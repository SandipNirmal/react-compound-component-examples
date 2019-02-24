import React from 'react'

import AudioPlayerContext from './AudioPlayerContext'
import {UPDATE_TIME} from './Utils'

import './Player.css'

let timeInterval = ''

export default class AudioPlayerProvider extends React.PureComponent {
  state = {
    isPlaying: false,
    currentTime: 0,
    totalTime: 0,
    remainingTime: 0,
    title: '',
    loading: true,
    loadingError: false
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

  /**
   * Function to update progress bar
   */
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

  /**
   * Toggle playback. Play/Pause
   */
  togglePlay = () => {
    const {state: {
        isPlaying
      }} = this

    isPlaying
      ? this.pause()
      : this.play()
  }

  /**
   * Seek playback to given time
   *
   * @param {number} time
   */
  seekTo = (time) => {
    const audioNode = this.audioRef.current
    audioNode.currentTime = time;
  }

  /**
   * Handles progress bar click event. And seeks audio to particular time.
   *
   * @param {number} progress
   */
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

  /**
   * Handler for audio objects canPlayThrough event.
   */
  handleCanPlayThrough = (e) => {
    const {duration, src} = e.currentTarget
    const title = src.substring(src.lastIndexOf('/') + 1, src.length)

    this.setState({
      totalTime: duration,
      remainingTime: duration,
      title: title.substring(0, title.indexOf('.')),
      loading: false
    })
  }

  /**
   * Handler for audio object error
   */
  handleError = (e) => {
    this.setState({loadingError: true, loading: false})
  }

  /**
   * Forward audio by 10seconds
   */
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

  /**
   * Rewind audio by 10seconds
   */
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

  /**
   * Set time for component
   */
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
        title,
        loading,
        loadingError
      },
      play,
      pause,
      togglePlay,
      handleProgressBarClick,
      handleCanPlayThrough,
      forwardBy10s,
      rewindBy10s,
      handleError
    } = this

    return (
      <div className='player'>
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
          <audio
            ref={this.audioRef}
            src={source}
            onError={handleError}
            onCanPlayThrough={handleCanPlayThrough}/>
          <div style={{
            textAlign: 'left'
          }}>{title}</div>
          {loading
            ? 'Loading...'
            : loadingError
              ? <span className='error'>Error Loading Audio.</span>
              : this.props.children}
        </AudioPlayerContext.Provider>
      </div>
    )
  }
}
