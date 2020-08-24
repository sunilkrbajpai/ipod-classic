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
    const { songItems, playing, songIndex, audio, songImageURL } = this.props;

    const percentageComplete = {
      width: (this.state.currentTime / audio.duration) * 100 + "%",
    };
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
        <div id="myProgress">
          <div id="myBar" style={percentageComplete}></div>
        </div>
      </div>
    );
  }
}

export default Playing;
