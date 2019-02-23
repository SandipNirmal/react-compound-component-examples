import React from 'react'

import AudioPlayerContext from './AudioPlayerContext'
import {UPDATE_TIME, getDurationInSeconds} from './Utils'

let timeInterval = ''

export default class AudioPlayerProvider extends React.PureComponent {
  state = {
    isPlaying: false,
    currentTime: 0,
    totalTime: 0,
    remainingTime: 0,
    title: ''
  }

  audioRef = React.createRef()

  /**
   * Plays current audio Content
   */
  play = () => {
    const audioNode = this.audioRef.current
    audioNode.play()

    const {currentTime, duration} = audioNode
    this.setState({
      isPlaying: true,
      currentTime,
      remainingTime: duration - currentTime
    })

    timeInterval = setInterval(this.updateTime, UPDATE_TIME)
  }

  /**
   * Pauses current audio Content
   */
  pause = () => {
    const audioNode = this.audioRef.current
    audioNode.pause()

    const {currentTime, duration} = audioNode
    this.setState({
      isPlaying: false,
      currentTime,
      remainingTime: duration - currentTime
    })

    clearInterval(timeInterval)
  }

  updateTime = () => {
    const {
      state: {
        currentTime,
        totalTime
      },
      audioRef
    } = this

    const {currentTime: currentPlaybackTime, duration} = audioRef.current

    if (currentTime < totalTime) {
      this.setState({
        currentTime: currentPlaybackTime,
        remainingTime: duration - currentPlaybackTime
      })
    } else if (currentTime >= totalTime) {
      this.setState({isPlaying: false})
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
    audioNode.currentTime = time;
  }

  handleProgressBarClick = (progress) => {
    const {state: {
        totalTime
      }} = this
    const currentTime = progress * this.state.totalTime

    this.setState({
      currentTime,
      remainingTime: totalTime - currentTime
    })

    this.seekTo(currentTime)
  }

  handleCanPlayThrough = (e) => {
    const {duration, src} = e.currentTarget
    const title = src.substring(src.lastIndexOf('/') + 1, src.length)

    this.setState({
      totalTime: duration,
      remainingTime: duration,
      title: title.substring(0, title.indexOf('.'))
    })
  }

  forwardBy10s = () => {
    const {
      state: {
        currentTime,
        totalTime
      }
    } = this
    let seekedTime = currentTime + 10
    seekedTime = seekedTime > totalTime
      ? totalTime
      : seekedTime

    this.seekTo(seekedTime)
    this.setState({
      currentTime: seekedTime,
      remainingTime: totalTime - seekedTime
    })
  }

  rewindBy10s = () => {
    const {
      state: {
        currentTime,
        totalTime
      },
      isPlaying
    } = this
    let seekedTime = currentTime - 10
    seekedTime = seekedTime < 0
      ? 0
      : seekedTime

    this.seekTo(seekedTime)
    this.setState({
      currentTime: seekedTime,
      remainingTime: totalTime - seekedTime
    })

    // Play Audio if rewinding from end of audio
    !isPlaying && this.play()
  }

  setTime = (time) => {
    const audioNode = this.audioRef.current
    const {duration, currentTime} = audioNode

    this.setState({
      currentTime: time,
      remainingTime: duration - currentTime
    })

  }

  render() {
    const {
      props: {
        source
      },
      state: {
        currentTime,
        remainingTime,
        totalTime,
        title
      },
      play,
      pause,
      togglePlay,
      handleProgressBarClick,
      handleCanPlayThrough,
      forwardBy10s,
      rewindBy10s
    } = this

    return (
      <AudioPlayerContext.Provider
        value={{
        ...this.state,
        togglePlay,
        handleProgressBarClick,
        play,
        pause,
        forwardBy10s,
        rewindBy10s
      }}>
        {/* <div>Audio Player</div>
        <div>Current Time: {currentTime.toFixed(0)}</div>
        <div>Remaining Time: {getDurationInSeconds(remainingTime)}</div>
        <div>Progress: {getDurationInSeconds((currentTime / totalTime) * 100)}%</div>
        <button onClick={togglePlay}>Toggle</button>
        <button onClick={forwardBy10s}>FF10</button>
        <button onClick={rewindBy10s}>RW10</button> */}
        <audio
          ref={this.audioRef}
          src={source}
          onCanPlayThrough={handleCanPlayThrough}/>
        <div style={{textAlign: 'left'}}>{title}</div>
        {this.props.children}
      </AudioPlayerContext.Provider>
    )
  }
}
