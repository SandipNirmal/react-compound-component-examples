import React from 'react'
import {FaPlay, FaPause} from 'react-icons/fa'

import AudioPlayerContext from './AudioPlayerContext'

const PlayPasue = () => {
  return <AudioPlayerContext.Consumer>
    {({togglePlay, isPlaying}) => <button onClick={togglePlay} className='icons'>{isPlaying
        ? <FaPause />
        : <FaPlay />}</button>}
  </AudioPlayerContext.Consumer>
}

export default PlayPasue
