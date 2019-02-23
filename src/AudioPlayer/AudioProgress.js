import React from 'react'

import AudioPlayerContext from './AudioPlayerContext'

export default class ProgressBar extends React.PureComponent {
  progressRef = React.createRef()

  progressBarClickHandler = (e, handleProgressBarClick) => {
    const progressBarNode = this.progressRef.current;
    const x = e.pageX - progressBarNode.offsetLeft, // or e.offsetX (less support, though)
      y = e.pageY - progressBarNode.offsetTop, // or e.offsetY
      progressValue = (x * progressBarNode.max / progressBarNode.offsetWidth);

    console.log(x, y);
    console.log('progressValue', progressValue);

    handleProgressBarClick(progressValue)
  }

  render() {
    const {progressBarClickHandler} = this

    return (
      <AudioPlayerContext.Consumer>
        {({currentTime, totalTime, handleProgressBarClick}) => {
          const progressValue = (currentTime / totalTime)
        return <progress
          ref={this.progressRef}
          id='progressBar'
          min={0}
          max={1}
          onClick={(e) => {
          progressBarClickHandler(e, handleProgressBarClick)
        }}
          value={isNaN(progressValue) ? 0 : progressValue}/>
      }
}
      </AudioPlayerContext.Consumer>
    )
  }
}
