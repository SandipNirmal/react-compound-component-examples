import React from 'react'

import AudioPlayerContext from './AudioPlayerContext'

const PlayPasue = () => {
  return <AudioPlayerContext.Consumer>
    {({togglePlay, isPlaying}) => <button onClick={togglePlay}>{isPlaying
        ? 'Pause'
        : 'Play'}</button>}
  </AudioPlayerContext.Consumer>
}

export default PlayPasue
