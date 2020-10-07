import React from "react";

class Songs extends React.Component {
  render() {
    // show song Options
    const { songItems, active } = this.props;
    return (
      <div className="back">
        <h2>Songs</h2>
        <ul>
          {songItems.map((element, index) => {
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
    );
  }
}

export default Songs;
