import React from 'react';
import "../styles/Themes.css"

class Themes extends React.Component {
    render() {
        const {active} = this.props;
        return (
            <div className="back">
                <h2>Themes</h2>
                <ul>
                    {["Tomato Red","Space Gray","Gold","Light Purple","Classic Silver","Diamond Blue"].map((element,index)=>{
                        return active===index?<li key={index} className="active theme-li">{element}</li>:<li className="theme-li" key={index}>{element} </li>
                    })}
                </ul>
            </div>

        )
    }

}


export default Themes;