import React from 'react'

import AudioPlayerContext from './AudioPlayerContext'
import {getDurationInSeconds} from './Utils'

const TotalTime = () => {
  return <AudioPlayerContext.Consumer>
    {({totalTime}) => <div>{getDurationInSeconds(totalTime)}</div>}
  </AudioPlayerContext.Consumer>
}

export default TotalTime
