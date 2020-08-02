import React from 'react';
import Header from './Header';
import Menu from './Menu';
import Music from './Music';
import Songs from './Songs';
import Settings from './Settings';
import "../styles/Display.css"
import Themes from './Themes';
import About from './About';

class Display extends React.Component {
    render() {
        const { active, currentMenu, menuItems, musicItems, setActiveOnMount, songItems, playing, songIndex } = this.props;
        return (
            <div className="display">
                <Header />
                {currentMenu === -1 && <Menu menuItems={menuItems} setActiveOnMount={setActiveOnMount} active={active} />}
                {currentMenu === 0 && <div className="blank-div"><h1> Cover Flow </h1> </div>}
                {currentMenu === 1 && <Music musicItems={musicItems} setActiveOnMount={setActiveOnMount} active={active} />}
                {currentMenu === 2 && <div className="blank-div"><h1>Games</h1></div>}
                {currentMenu === 3 && <Settings active={active}/>}
                {currentMenu === 4 && <Songs songItems={songItems} active={active} />}
                {currentMenu === 5 && <div className="blank-div"><h1>Albums</h1></div>}
                {currentMenu === 6 && <div className="blank-div"><h1>Artists</h1></div>}
                {currentMenu === 9 && <div className="blank-div"><h1>Playlists</h1></div>}
                {(currentMenu === 7||currentMenu===0) && playing === true && <div className="blank-div"><h1>Playing {songItems[songIndex]}</h1></div>}
                {(currentMenu === 0 ||currentMenu===7) && playing === false && <div className="blank-div"><h1>Paused {songItems[songIndex]}</h1></div>}
                {currentMenu===8 && <Themes active={active}/>}
                {currentMenu === 10 && <About active={active}/>}

            </div>
        )
    }
}


export default Display;