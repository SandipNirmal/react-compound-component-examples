import React, {Component} from 'react';

import {Mario_Bros_Medley} from './resources'

import {Tabs, TabDetail, TabHeader} from './Tabs/index'

import {AudioPlayer, Controls, ProgressBar, PlayPause, Play, Pause, ForwardRewind} from './AudioPlayer/index'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Tabs>
          <TabHeader/>
          <TabDetail/>
        </Tabs>

        <AudioPlayer source={Mario_Bros_Medley}>
          <Controls />
        </AudioPlayer>
      </div>
    );
  }
}

export default App;
