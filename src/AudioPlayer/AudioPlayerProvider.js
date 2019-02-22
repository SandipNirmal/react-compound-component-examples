import React from 'react'

import AudioPlayerContext from './AudioPlayerContext'
import {UPDATE_TIME, getDurationInSeconds} from './Utils'

let timeInterval = ''

export default class AudioPlayerProvider extends React.PureComponent {
  state = {
    isPlaying: false,
    currentTime: 0,
    totalTime: 0,
    remainingTime: 0
  }

  audioRef = React.createRef()

  componentDidMount() {
    const audioNode = this.audioRef.current;

    this.setState({totalTime: audioNode.duration, remainingTime: audioNode.duration})
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

  seekTo = (time) => {
    const audioNode = this.audioRef.current
    audioNode.currentTime = time
  }

  handleProgressBarClick = (progress) => {
    const currentTime = progress * this.state.totalTime
    console.log('currentTime', currentTime)
    this.setState({currentTime})
    this.seekTo(currentTime)
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
      togglePlay,
      handleProgressBarClick
    } = this

    return (
      <AudioPlayerContext.Provider
        value={{
        ...this.state,
        togglePlay,
        handleProgressBarClick
      }}>
        <div>Audio Player</div>
        <div>Current Time: {getDurationInSeconds(currentTime)}</div>
        <div>Remaining Time: {getDurationInSeconds(remainingTime)}</div>
        <div>Progress: {getDurationInSeconds((currentTime / totalTime) * 100)}%</div>
        {/* <progress
          ref={this.progressRef}
          id='progressBar'
          min={0}
          max={1}
          value={getDurationInSeconds(currentTime / totalTime)}/> */}
        <button onClick={togglePlay}>Toggle</button>
        <audio ref={this.audioRef} src={source}/> {this.props.children}
      </AudioPlayerContext.Provider>
    )
  }
}
