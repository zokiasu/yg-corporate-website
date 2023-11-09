let apiScriptLoaded = false
let pendingPlayers = []

export function loadYoutubeAPI() {
  if (apiScriptLoaded) {
    pendingPlayers.forEach((callback) => callback())
    pendingPlayers = []
    return
  }

  const tag = document.createElement('script')
  tag.src = 'https://www.youtube.com/iframe_api'
  const firstScriptTag = document.getElementsByTagName('script')[0]
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

  window.onYouTubeIframeAPIReady = () => {
    apiScriptLoaded = true
    pendingPlayers.forEach((callback) => callback())
    pendingPlayers = []
  }
}

export function registerPlayerCallback(callback) {
  if (apiScriptLoaded && window.YT && window.YT.Player) {
    callback()
  } else {
    pendingPlayers.push(callback)
  }
}

export function isApiLoaded() {
  return apiScriptLoaded
}
