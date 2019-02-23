import React from 'react'
import {FaForward, FaBackward} from 'react-icons/fa'

import AudioPlayerContext from './AudioPlayerContext'

const ForwardRewind = () => {
  return <AudioPlayerContext.Consumer>
    {({forwardBy10s, rewindBy10s}) => <React.Fragment>
      <button onClick={forwardBy10s} className='icons'>
        <FaForward />
      </button>
      <button onClick={rewindBy10s} className='icons'>
        <FaBackward />
      </button>
    </React.Fragment>}
  </AudioPlayerContext.Consumer>
}

export default ForwardRewind
