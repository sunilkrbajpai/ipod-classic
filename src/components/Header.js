import React from "react";
import "../styles/Header.css";
import BatteryImage from "../assets/battery.png";
import WifiImg from "../assets/wifi.png";

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      time: this.getCurrentTime(),
    };
    this.stateId = "";
  }

  componentDidMount() {
    // update time after every 10 seconds
    this.stateId = setInterval(() => {
      this.setState({ time: this.getCurrentTime() });
    }, 5000);
  }

  getCurrentTime() {
    //   get current time and set value accordingly
    const today = new Date();
    var time = today.getHours() + ":" + today.getMinutes();
    if (today.getMinutes() < 10) {
      time = today.getHours() + ":0" + today.getMinutes();
    }
    return time;
  }

  render() {
    const { time } = this.state;
    return (
      <div className="bar">
        <h5 className="heading">
          {/* <img className="apple-logo" src={AppleLogo} alt="LOGO"/> */}
          iPod
        </h5>
        <img className="wifi" src={WifiImg} alt="wifi" />

        <h3 className="time">{time}</h3>
        <img className="battery" src={BatteryImage} alt="Battery" />
      </div>
    );
  }
}

export default Header;
