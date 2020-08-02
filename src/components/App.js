import React from 'react';
import '../styles/App.css';
import Case from './Case';
import song1 from "../assets/songs/Shaitan Ka Saala.mp3"
import song2 from "../assets/songs/Shape of you.mp3"
import song3 from "../assets/songs/Faded.mp3"
import img1 from '../assets/Thumbnails/shaitan_ka_sala.jpeg';
import img2 from '../assets/Thumbnails/shape_of_you.png';
import img3 from '../assets/Thumbnails/faded.jpg';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      active: 0,
      menuItems:["Cover Flow", "Music", "Games","Settings","About"],
      musicItems:["All Songs", "Albums", "Artists","Playlists"],
      songItemsUrl:[song1,song2,song3],
      songItems:["Shaitaan ka Saala","Shape of you","Faded"],
      songImageURL:[img1,img2,img3],
      songIndex:0,
      lengthMenuKey:{"-1":4,1:3,4:2,8:5,3:0},
      menuMapping:{"-1":[0,1,2,3,10],1:[4,5,6,9],3:[8]},
      currentMenu:-1,
      navigationStack:[],
      songUrl:song1,
      playing:false,
      theme:"#f0b4e7",
      audio:new Audio(song1)
    }
  }


  togglePlayPause=()=>{
    if(this.state.playing===true){
      this.setState({playing:false});
      this.state.audio.pause();
    }
    else{
      this.setState({playing:true});
      this.state.audio.play();
    }
  }
  moveForward=()=>{
    if(this.state.playing===true)
    {
      this.state.audio.pause();
      let songIndex = this.state.songIndex;
      if (songIndex === this.state.songItemsUrl.length - 1) {
        songIndex = 0;
      } else {
        songIndex++;
      }
      const songUrl = this.state.songItemsUrl[songIndex];
      this.setState({ songIndex: songIndex, songUrl: songUrl, audio: new Audio(songUrl) }, () => {
        this.state.audio.play();
      });
    }
  }

  moveBackward=()=>{
    if(this.state.playing===true)
    {
      this.state.audio.pause();
      let songIndex = this.state.songIndex;
      if (songIndex === 0) {
        songIndex = this.state.songItemsUrl.length - 1;
      } else {
        songIndex--;
      }
      const songUrl = this.state.songItemsUrl[songIndex];
      this.setState({ songIndex: songIndex, songUrl: songUrl, audio: new Audio(songUrl) }, () => {
        this.state.audio.play();
      });
    }
  }
  updateActiveMenu = (direction, menu) => {

    if(menu!==-1 && menu!==1 && menu!==4 && menu!==8 && menu!==3){
      return;
    }
    let min = 0;
    let max = 0;

    max = this.state.lengthMenuKey[menu];

    if (direction === 1) {
      if (this.state.active >= max) {
        this.setState({ active: min })
      } else {
        this.setState({ active: this.state.active + 1 })
      }
    } else {
      if (this.state.active <= min) {
        this.setState({ active: max })
      } else {
        this.setState({ active: this.state.active - 1 })
      }
    }
  }

  changeMenu=(id,fromMenu)=>{
    
    const navigationStack = this.state.navigationStack.slice();

    if(id===-1){
      if(this.state.currentMenu===-1)
        return;
      else{
        const prevId = navigationStack.pop();
        this.setState({currentMenu:prevId,navigationStack:navigationStack,active:0});
        return;
      }
    }

    if(fromMenu!==-1 && fromMenu!==1 &&fromMenu!==4 && fromMenu!==3 && fromMenu!==8  ){
      return;
    }


    if(fromMenu===8){
      if(id===0){
        this.setState({theme:"#f57d7d"});
      }
      else if(id===1){
        this.setState({theme:"#918989"});
      }else if(id===2){
        this.setState({theme:"#F5DDC5"});
      }else if(id===3){
        this.setState({theme:"#f0b4e7"})
      }
      else if(id===4){
        this.setState({theme:"rgb(210, 210, 210)"})
      }
      else if(id===5){
        this.setState({theme:" #7DDEFF"})
      }
      return;
    }

    navigationStack.push(this.state.currentMenu);

    if(fromMenu===4){
      const songUrl=this.state.songItemsUrl[id];
      this.state.audio.pause();
      this.setState({currentMenu:7,songUrl:songUrl,audio : new Audio(songUrl),navigationStack:navigationStack,active:0,playing:true, songIndex:id},()=>{
        this.state.audio.play();
      });
      
      return;
    }
    const currentMenuID = this.state.menuMapping[fromMenu][id];
    this.setState({currentMenu:currentMenuID,navigationStack:navigationStack,active:0});
  }


  setActiveOnMount=(count)=>{
    this.setState({active:count});
  }

  render() {
    const { active, currentMenu, menuItems, musicItems, songItems ,playing, songIndex ,theme,songImageURL,audio,songUrl} = this.state;
    return (
      <div className="App">
        <Case 
          songIndex={songIndex} 
          active={active} 
          menuItems={menuItems} 
          musicItems={musicItems} 
          currentMenu={currentMenu} 
          changeMenu={this.changeMenu} 
          setActiveOnMount={this.setActiveOnMount} 
          updateActiveMenu={this.updateActiveMenu} 
          togglePlayPause={this.togglePlayPause} 
          moveForward={this.moveForward}
          moveBackward={this.moveBackward}
          songItems={songItems} 
          playing={playing} 
          theme={theme}
          songImageURL={songImageURL}
          audio={audio}
          songUrl={songUrl}
        />
      </div>
    );
  }
}

export default App;
