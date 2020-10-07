import React from "react";
import "../styles/SongPlay.css";

class Playing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: 0,
    };
    this.intervalId = "";
  }

  // logic for updating the current music playback
  componentDidMount() {
    const { audio } = this.props;
    this.setState({ currentTime: audio.currentTime });
    this.intervalId = setInterval(() => {
      this.setState({ currentTime: this.props.audio.currentTime });
    }, 100);
  }

  // Clear interval for that same thing
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  // Render playing screen
  render() {
    const {
      songItems,
      playing,
      songIndex,
      audio,
      songImageURL,
      moveForward,
    } = this.props;

    if (this.state.currentTime === audio.duration) {
      moveForward();
    }
    const percentageComplete = {
      width: (this.state.currentTime / audio.duration) * 100 + "%",
    };
    const currentTimeShow = Math.floor(this.state.currentTime % 60 > 10)
      ? Math.floor(this.state.currentTime / 60) +
        ":" +
        Math.floor(this.state.currentTime % 60)
      : Math.floor(this.state.currentTime / 60) +
        ":0" +
        Math.floor(this.state.currentTime % 60);
    var durationShow = Math.floor(audio.duration % 60 > 10)
      ? Math.floor(audio.duration / 60) + ":" + Math.floor(audio.duration % 60)
      : Math.floor(audio.duration / 60) +
        ":0" +
        Math.floor(audio.duration % 60);
    if (durationShow === "NaN:0NaN") {
      durationShow = "0:00";
    }
    return (
      <div className="now-playing-container">
        <div className="song-details">
          <div className="thumb">
            <img src={songImageURL[songIndex]} alt={songItems[songIndex]}></img>
          </div>
          <div className="detailsSong">
            <marquee scrollamount="2">
              <h3 className="name">{songItems[songIndex]}</h3>
            </marquee>
            {playing && <h5 className="statusTxt">Playing</h5>}
            {!playing && <h5 className="statusTxt blink_me">Paused</h5>}
          </div>
        </div>
        <span className="showTime">{currentTimeShow}</span>
        <div id="myProgress">
          <div id="myBar" style={percentageComplete}></div>
        </div>
        <span className="showTime">{durationShow}</span>
      </div>
    );
  }
}

export default Playing;
