import React from 'react'

import AudioPlayerContext from './AudioPlayerContext'
import {getDurationInSeconds} from './Utils'

const CurrentTime = () => {
  return <AudioPlayerContext.Consumer>
    {({currentTime}) => <div>{getDurationInSeconds(currentTime)}</div>}
  </AudioPlayerContext.Consumer>
}

export default CurrentTime
