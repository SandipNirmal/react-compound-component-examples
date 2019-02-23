import React from 'react'

import AudioPlayerContext from './AudioPlayerContext'

const Play = () => {
  return <AudioPlayerContext.Consumer>
    {({play}) => <button onClick={play}>Play</button>}
  </AudioPlayerContext.Consumer>
}

export default Play
