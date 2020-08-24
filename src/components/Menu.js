import React from "react";
import "../styles/Menu.css";
import game from "../assets/games.gif";
import music from "../assets/music.gif";
import settings from "../assets/settings.gif";
import coverflow from "../assets/coverflow.jpg";
import about from "../assets/programer.gif";

class Menu extends React.Component {
  render() {
    const { active, menuItems } = this.props;
    return (
      <div className="menu-container">
        <div className="menu">
          <ul>
            {menuItems.map((element, index) => {
              return active === index ? (
                <li key={index} className="active">
                  &nbsp;{element}
                </li>
              ) : (
                <li key={index}>&nbsp;{element}</li>
              );
            })}
          </ul>
        </div>
        <div className="leaf">
          {active === 0 && (
            <img
              className="menu-icon-image"
              src={coverflow}
              alt="coverflow"
            ></img>
          )}
          {active === 1 && (
            <img className="menu-icon-image" src={music} alt="music"></img>
          )}
          {active === 2 && (
            <img className="menu-icon-image" src={game} alt="games"></img>
          )}
          {active === 3 && (
            <img
              className="menu-icon-image"
              src={settings}
              alt="settings"
            ></img>
          )}
          {active === 4 && (
            <img className="menu-icon-image" src={about} alt="settings"></img>
          )}
        </div>
      </div>
    );
  }
}

export default Menu;
