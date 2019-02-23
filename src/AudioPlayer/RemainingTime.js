import React from 'react'

import AudioPlayerContext from './AudioPlayerContext'
import {getDurationInSeconds} from './Utils'

const RemainingTime = () => {
  return <AudioPlayerContext.Consumer>
    {({remainingTime}) => <div>{getDurationInSeconds(remainingTime)}</div>}
  </AudioPlayerContext.Consumer>
}

export default RemainingTime
