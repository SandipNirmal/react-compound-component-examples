import React, {Component} from 'react';

import {Mario_Bros_Medley} from './resources'

import Tabs from "./Tabs/TabProvider";
import TabHeader from "./Tabs/TabHeader";
import TabDetail from "./Tabs/TabDetails";

import AudioPlayer from './AudioPlayer/AudioPlayerProvider'

// import StyledButton from './UIComponents/StyledButton'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Tabs>
          <TabHeader/>
          <TabDetail/>
        </Tabs>

        <AudioPlayer source={Mario_Bros_Medley}/>

        {/* <StyledButton>Normal Button</StyledButton>
        <StyledButton primary>Primary Button</StyledButton> */}
      </div>
    );
  }
}

export default App;
