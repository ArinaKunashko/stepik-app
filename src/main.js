import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store';
import VueVideoPlayer from '@videojs-player/vue'
import 'video.js/dist/video-js.css'
import AudioPlayer from '@liripeng/vue-audio-player'
import VueMathjax from 'vue-mathjax-next';



createApp(App)
.use(router)
.use(store)
.use(VueVideoPlayer)
.use(AudioPlayer)
.use(VueMathjax)

.mount("#app")