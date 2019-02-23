import React from 'react'
import {FaPause} from 'react-icons/fa'

import AudioPlayerContext from './AudioPlayerContext'

const Pause = () => {
  return <AudioPlayerContext.Consumer>
    {({pause}) => <button onClick={pause} className='icons'>
      <FaPause/>
    </button>}
  </AudioPlayerContext.Consumer>
}

export default Pause
