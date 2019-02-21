import React from 'react'

// import {Mario_Bros_Medley} from './../resources'
import AudioPlayerContext from './AudioPlayerContext'

let timeInterval = ''

const UPDATE_TIME = 500

const getDurationInSeconds = (duration) => {
  return duration.toFixed(2)
}

export default class AudioPlayerProvider extends React.PureComponent {
  state = {
    isPlaying: false,
    currentTime: 0,
    totalTime: 0,
    remainingTime: 0
  }

  audioRef = React.createRef()
  progressRef = React.createRef()

  componentDidMount() {
    // const {state: {totalTime}, setState} = this

    const audioNode = this.audioRef.current
    this.setState({totalTime: audioNode.duration, remainingTime: audioNode.duration})

    // this
    //   .progressRef
    //   .current
    //   .addEventListener('click', function (e) {
    //     var x = e.pageX - this.offsetLeft, // or e.offsetX (less support, though)
    //         y = e.pageY - this.offsetTop, // or e.offsetY
    //         clickedValue = (x * this.max / this.offsetWidth);

    //     console.log(x, y);
    //     console.log('clickedValue', clickedValue);

    //     const currentTime = clickedValue * totalTime

    //     console.log('currentTime', currentTime)
    //     setState({currentTime})
    //   })
  }

  play = () => {
    const audioNode = this.audioRef.current
    this.setState({isPlaying: true, totalTime: audioNode.duration, remainingTime: audioNode.duration})

    audioNode.play()

    timeInterval = setInterval(this.updateTime, UPDATE_TIME)
  }

  pause = () => {
    const audioNode = this.audioRef.current
    audioNode.pause()

    this.setState({isPlaying: false})

    clearInterval(timeInterval)
  }

  updateTime = () => {
    const {
      state: {
        currentTime,
        totalTime,
        remainingTime
      }
    } = this

    if (currentTime < totalTime) {
      this.setState({
        currentTime: currentTime + (UPDATE_TIME / 1000),
        remainingTime: remainingTime - (UPDATE_TIME / 1000)
      })
    }
  }

  togglePlay = () => {
    const {state: {
        isPlaying
      }} = this

    isPlaying
      ? this.pause()
      : this.play()
  }

  render() {
    const {
      props: {
        source
      },
      state: {
        currentTime,
        remainingTime,
        totalTime
      },
      togglePlay
    } = this

    return (
      <AudioPlayerContext.Provider value={{}}>
        <div>Audio Player</div>
        <div>Current Time: {getDurationInSeconds(currentTime)}</div>
        <div>Remaining Time: {getDurationInSeconds(remainingTime)}</div>
        <div>Progress: {getDurationInSeconds((currentTime / totalTime) * 100)}%</div>
        <progress
          ref={this.progressRef}
          id='progressBar'
          min={0}
          max={1}
          value={getDurationInSeconds(currentTime / totalTime)}/>
        <button onClick={togglePlay}>Toggle</button>
        <audio ref={this.audioRef} src={source}/> {this.props.children}
      </AudioPlayerContext.Provider>
    )
  }
}
