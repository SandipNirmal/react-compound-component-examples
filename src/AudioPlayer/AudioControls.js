import React from 'react'

import PlayPause from './PlayPauseButton'
import ForwardRewind from './ForwardRewindAudio'
import ProgressBar from './AudioProgress'

const AudioControls = () => <div style={{display: 'flex'}}>
  <PlayPause/>
  <ForwardRewind/>
  <ProgressBar/>
</div>

export default AudioControls
