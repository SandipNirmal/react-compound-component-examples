import React from 'react'

import AudioPlayerContext from './AudioPlayerContext'

const ForwardRewind = () => {
  return <AudioPlayerContext.Consumer>
    {({forwardBy10s, rewindBy10s}) => <React.Fragment>
      <button onClick={forwardBy10s}>FF &gt;&gt; </button>
      <button onClick={rewindBy10s}>RW &lt;&lt; </button>
    </React.Fragment>}
  </AudioPlayerContext.Consumer>
}

export default ForwardRewind
