import React, {useEffect}from 'react';
import "../styles/Playing.css"

class Playing extends React.Component {

    constructor(props) {
        super();
    }

    // logic for updating the current music playbak
   
    // Render playing screen
    render() {
        const { songItems, playing, songIndex, audio, songImageURL } = this.props;
        return (
            <div className="now-playing-container">
                <div className="song-details">
                    <div className="thumb">
                        <img src={songImageURL[songIndex]} alt={songItems[songIndex]}></img>
                    </div>
                    <div className="detailsSong">
                        <marquee scrollamount="2"><h3 className="name">{songItems[songIndex]}</h3></marquee>
                            {playing && <h5 className="statusTxt">Playing</h5>}
                            {!playing && <h5 className="statusTxt">Paused</h5>}
                    </div>
                </div>
                
                    <progress className="progress" max="100" value="70"></progress>
            </div>
        )
    }
}


export default Playing;