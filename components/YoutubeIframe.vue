<template>
  <div>
    <iframe
      ref="youtubePlayer"
      :id="`youtubePlayer-${props.idVideo}`"
      :src="youtubeSrc"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      class="h-[120vh] w-full -translate-y-16 object-cover"
    ></iframe>
  </div>
</template>

<script setup>
import { loadYoutubeAPI, registerPlayerCallback } from '@/utils/youtube-api'

const props = defineProps({
  idVideo: String,
  initialTime: Number,
})

const youtubeSrc = ref(
  `https://www.youtube.com/embed/${props.idVideo}?mute=1&enablejsapi=1&disablekb=1&controls=0&rel=0&iv_load_policy=3&cc_load_policy=0&playsinline=1&showinfo=0&modestbranding=1&fs=0&loop=1&playlist=${props.idVideo}&vq=hd1080`,
)

const player = ref(null)
const playerReady = ref(false)
const emit = defineEmits(['videoLoaded', 'videoTimeUpdate'])
let intervalId

onMounted(() => {
  loadYoutubeAPI()

  registerPlayerCallback(() => {
    player.value = new window.YT.Player(`youtubePlayer-${props.idVideo}`, {
      videoId: props.idVideo,
      events: {
        onReady: onPlayerReady,
        onStateChange: onPlayerStateChange,
      },
    })
  })
})

const onPlayerReady = (event) => {
  playerReady.value = true
  player.value = event.target
  if (props.initialTime > 0) {
    player.value.seekTo(props.initialTime)
  }
  emit('videoLoaded', true)
}

const onPlayerStateChange = (event) => {
  if (event.data === YT.PlayerState.PLAYING && !intervalId) {
    const duration = player.value.getDuration()
    intervalId = setInterval(() => {
      const currentTime = player.value.getCurrentTime()
      emit('videoTimeUpdate', currentTime)
      if ((duration - currentTime) <= 10) {
        player.value.seekTo(duration - (duration - 5))
      }
    }, 1000)
  } else {
    clearInterval(intervalId)
    intervalId = null
  }
}

const playVideo = () => {
  const startTime = props.initialTime;
  if (player.value) {
    player.value.playVideo();
    let attempts = 0;
    const maxAttempts = 50;

    let checkIfPlaying = setInterval(() => {
      if (!player.value || attempts >= maxAttempts) {
        clearInterval(checkIfPlaying);
        return;
      }

      const state = player.value.getPlayerState();
      if (state === YT.PlayerState.PLAYING) {
        clearInterval(checkIfPlaying);
        player.value.seekTo(startTime);
      }

      attempts++;
    }, 100);
  } else {
    console.log("Le lecteur n'est pas prêt.");
  }
}


const stopVideo = () => {
  if (player.value) {
    player.value.stopVideo()
  } else {
    console.log("Le lecteur n'est pas prêt.")
  }
}

const toggleMute = () => {
  if (player.value.isMuted()) {
    player.value.unMute()
  } else {
    player.value.mute()
  }
}

onUnmounted(() => {
  if (player.value) {
    player.value.destroy()
  }
  if (intervalId) {
    clearInterval(intervalId)
  }
})

defineExpose({
  playVideo,
  stopVideo,
  toggleMute,
})
</script>
