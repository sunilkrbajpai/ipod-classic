import React from "react";
import Header from "./Header";
import Menu from "./Menu";
import Music from "./Music";
import Songs from "./Songs";
import Settings from "./Settings";
import "../styles/Display.css";
import Themes from "./Themes";
import About from "./About";
import SongPlay from "./SongPlay";
import games from "../assets/games.jpg";
import albums from "../assets/albums.png";
import artists from "../assets/artists.jpg";
import playlists from "../assets/playlists.jpg";

class Display extends React.Component {
  render() {
    const {
      active,
      currentMenu,
      menuItems,
      musicItems,
      setActiveOnMount,
      songItems,
      playing,
      songIndex,
      songImageURL,
      audio,
      songUrl,
    } = this.props;
    return (
      <div className="display">
        <Header />
        {currentMenu === -1 && (
          <Menu
            menuItems={menuItems}
            setActiveOnMount={setActiveOnMount}
            active={active}
          />
        )}
        {currentMenu === 1 && (
          <Music
            musicItems={musicItems}
            setActiveOnMount={setActiveOnMount}
            active={active}
          />
        )}
        {currentMenu === 2 && (
          <div className="blank-div">
            <h1 className="head-name">Games</h1>
            <br />
            <img src={games} className="icon-name" />
          </div>
        )}
        {currentMenu === 3 && <Settings active={active} />}
        {currentMenu === 4 && <Songs songItems={songItems} active={active} />}
        {currentMenu === 5 && (
          <div className="blank-div">
            <h1 className="head-name">Albums</h1>
            <br />
            <img src={albums} className="icon-name" />
          </div>
        )}
        {currentMenu === 6 && (
          <div className="blank-div">
            <h1 className="head-name">Artists</h1>
            <br />
            <img src={artists} className="icon-name" />
          </div>
        )}
        {currentMenu === 9 && (
          <div className="blank-div">
            <h1 className="head-name">Playlists</h1>
            <br />
            <img src={playlists} className="icon-name" />
          </div>
        )}
        {(currentMenu === 0 || currentMenu === 7) && (
          <SongPlay
            songImageURL={songImageURL}
            audio={audio}
            songUrl={songUrl}
            playing={playing}
            songIndex={songIndex}
            songItems={songItems}
          />
        )}
        {currentMenu === 8 && <Themes active={active} />}
        {currentMenu === 10 && <About active={active} />}
      </div>
    );
  }
}

export default Display;
