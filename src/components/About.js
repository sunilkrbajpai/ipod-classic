import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      // about menu code here
      <div className="back">
        <h2>About</h2>
        <p style={{ paddingLeft: "5px" }}>
          Made by&nbsp;
          <b>Sunil bajpai </b>with ❤️
          <br />
          <br />
          About Developer: &nbsp;
          <a href="https://sunilkrbajpai.github.io/resume/" target="_blank">
            Visit here
          </a>
          <br></br>
          <br></br>
          Visit Github profile: &nbsp;
          <a href="https://www.github.com/sunilkrbajpai" target="_blank">
            Click here
          </a>
        </p>
      </div>
    );
  }
}
