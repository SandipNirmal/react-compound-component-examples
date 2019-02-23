import React from 'react'

import {PlayPause, ForwardRewind, ProgressBar, CurrentTime, TotalTime} from './index'

const AudioControls = () => <div style={{
  display: 'flex'
}}>
  <PlayPause/>
  <ForwardRewind/>
  <CurrentTime/>
  <ProgressBar/>
  <TotalTime/>
</div>

export default AudioControls
