import React from 'react'
import {FaPlay} from 'react-icons/fa'

import AudioPlayerContext from './AudioPlayerContext'

const Play = () => {
  return <AudioPlayerContext.Consumer>
    {({play}) => <button onClick={play} className='icons'><FaPlay /></button>}
  </AudioPlayerContext.Consumer>
}

export default Play