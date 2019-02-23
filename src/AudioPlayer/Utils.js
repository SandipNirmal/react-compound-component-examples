export const UPDATE_TIME = 1000

export const getDurationInSeconds = (duration) => {
  let mins = (duration / 60).toFixed(0)
  let secs = Math.round(duration % 60).toFixed(0)

  mins = mins < 10 ? `0${mins}` : mins
  secs = secs < 10 ? `0${secs}` : secs

  return `${mins}:${secs}`
}
