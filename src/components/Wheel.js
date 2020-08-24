import React from "react";
import "../styles/Wheel.css";
import ZingTouch from "zingtouch";
class Wheel extends React.Component {
  constructor() {
    super();
    this.angle = 0;
  }
  render() {
    const { changeMenu, active, currentMenu, theme } = this.props;
    return (
      <div className="wheel-container">
        <div className="wheel" id="wheel">
          <div className="controll" id="menu">
            <div>
              <strong>MENU</strong>
            </div>
          </div>
          <div className="controll" id="forward">
            <i className="fas fa-fast-forward"></i>
          </div>
          <div className="controll" id="play-pause">
            <div>
              <i className="fas fa-play"></i>
              <i className="fas fa-pause"></i>
            </div>
          </div>
          <div className="controll" id="backward">
            <i className="fas fa-fast-backward"></i>
          </div>
        </div>

        <div
          style={{ backgroundColor: theme }}
          className="blank"
          id="blank"
          onClick={() => {
            changeMenu(active, currentMenu);
          }}
        ></div>
      </div>
    );
  }

  wheelControll = (e) => {
    const { updateActiveMenu, currentMenu } = this.props;

    if (e.detail.distanceFromOrigin === 0) {
      this.angle = e.detail.angle;
    }
    if (Math.abs(this.angle - e.detail.angle) > 300) {
      this.angle = Math.abs(e.detail.angle);
      if (e.detail.distanceFromLast === 0) {
        return;
      } else if (e.detail.distanceFromLast < 0) {
        updateActiveMenu(1, currentMenu);
      } else {
        updateActiveMenu(0, currentMenu);
      }
    } else if (Math.abs(this.angle - e.detail.angle) > 15) {
      this.angle = Math.abs(e.detail.angle);
      if (e.detail.distanceFromLast === 0) {
        return;
      } else if (e.detail.distanceFromLast > 0) {
        updateActiveMenu(1, currentMenu);
      } else {
        updateActiveMenu(0, currentMenu);
      }
    }
  };

  componentDidMount() {
    const {
      changeMenu,
      togglePlayPause,
      moveForward,
      moveBackward,
    } = this.props;
    const wheelControll = this.wheelControll;
    const wheel = document.getElementById("wheel");
    const activeRegion = ZingTouch.Region(wheel);
    const menuIcon = document.getElementById("menu");
    const playPause = document.getElementById("play-pause");
    const Forward = document.getElementById("forward");
    const Backward = document.getElementById("backward");

    activeRegion.bind(menuIcon, "tap", function (e) {
      changeMenu(-1, -1);
    });
    activeRegion.bind(wheel, "rotate", function (e) {
      wheelControll(e);
    });
    activeRegion.bind(playPause, "tap", function (e) {
      togglePlayPause();
    });
    activeRegion.bind(Forward, "tap", function () {
      moveForward();
    });
    activeRegion.bind(Backward, "tap", function () {
      moveBackward();
    });
  }
}

export default Wheel;
