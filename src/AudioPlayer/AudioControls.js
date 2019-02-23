import React from 'react'

import {PlayPause, ForwardRewind, ProgressBar, CurrentTime, TotalTime} from './index'

const AudioControls = () => <div className='controls'>
  <PlayPause/>
  <ForwardRewind/>
  <CurrentTime/>
  <ProgressBar/>
  <TotalTime/>
</div>

export default AudioControls
