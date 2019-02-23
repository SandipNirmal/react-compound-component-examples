import React from 'react'

import AudioPlayerContext from './AudioPlayerContext'

const Pause = () => {
  return <AudioPlayerContext.Consumer>
    {({pause}) => <button onClick={pause} className='icons'>Pause</button>}
  </AudioPlayerContext.Consumer>
}

export default Pause
