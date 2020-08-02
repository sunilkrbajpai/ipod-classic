import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div className="back">
                <h2>About</h2>
                <p style={{paddingLeft:"5px"}}>
                    This iPod is made by<br/> 
                    <b>Sunil bajpai </b>with ❤️<br/>
                    <br/>About Developer &nbsp;
                    <a href="https://sunilkrbajpai.github.io/resume/" >Visit here</a>

                    <br></br>
                    <br></br>
                    Visit repository: &nbsp;
                    <a href="https://www.github.com/">Github</a>
                </p>
            </div>
        )
    }
}
