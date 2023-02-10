<template>
    <div class='content'>
        <div class='video-fixed' v-if="step.type === 'video'">
            <div class="video">
                <video-player :src=step.content controls :loop='true' :volume='0.6'>
                    <source :src='step.content' type='video/mp4' />
                </video-player>
            </div>
        </div>

        <div v-else-if="step.type === 'audio'">
            {{ currentAudioName || audioList[0].name }}
            <audio-player class='audio' :src=step.content ref='audioPlayer' :before-play='handleBeforePlay'
                :audio-list='audioList.map(elm => elm.url)' theme-color='##293133' :show-prev-button='false'
                :show-next-button='false' :show-playback-rate='false'>
                <source :src='step.content' type='audio/mp3' />
            </audio-player>
        </div>

        <div v-else-if="step.type === 'text'">
            <vue-markdown :source='step.content' />
        </div>

        <div v-else>
            <div class='block'> <vue-mathjax :formula='step.content'></vue-mathjax> </div>
            <div v-if='step.img' class='block'>
                <img :src='step.img' />
            </div>

            <div class='block'>
                <textarea v-model='assumption' />
            </div>
            <button class='button is-link' :disabled='step.success' @click='checkAnswer'> Check </button>
            <div v-if='step.success'>
                <span class='icon is-small'>
                    <i class='mdi mdi-18px mdi-check' style='color:green'></i>
                </span>

                {{ step.answer }} is correct answer! Great!
            </div>
            <div v-if='step.success === false'> Error </div>
        </div>

    </div>
</template>

<script>
import { VideoPlayer } from '@videojs-player/vue'
import VueMarkdown from 'vue-markdown-render'
import { mapMutations } from 'vuex'
import { AudioPlayer } from '@liripeng/vue-audio-player'

export default {
    name: 'StepContent',
    data() {
        return {
            currentAudioName: '',
            audioList: [
                {
                    name: 'FrontoWeek',
                    url: 'https://anchor.fm/s/1e9ae408/podcast/play/31695063/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2021-3-18%2F176944047-44100-2-556c558f7f4dc.m4a'
                },
            ],
            formula: '$$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.$$',
            msg: 'Welcome to Your Vue.js App',
            assumption: '',
        }
    },
    components: {
        VideoPlayer, VueMarkdown, AudioPlayer
    },
    props: {
        step: {
            id: Number,
            type: String,
        },
    },
    mounted() {
        if (this.step.type === 'video' || this.step.type === 'text' || this.step.type === 'audio') {
            this.setSuccess(this.step.id)
        }
    },
    updated() {
        if (this.step.type === 'video' || this.step.type === 'text' || this.step.type === 'audio') {
            this.setSuccess(this.step.id)
        }
    },
    methods: {
        ...mapMutations({
            setSuccess: 'setSuccess',
        }),
        setSuccess(id) {
            this.$store.dispatch('setSuccess', id);
        },
        setUnsuccess(id) {
            this.$store.dispatch('setUnsuccess', id);
        },
        handleBeforePlay(next) {
            this.currentAudioName = this.audioList[this.$refs.audioPlayer.currentPlayIndex].name

            next()
        },
        checkAnswer() {
            if (this.assumption === this.step.answer) {
                this.setSuccess(this.step.id)
            } else {
                this.setUnsuccess(this.step.id)
            }
            this.assumption = ''
        }

    },
}
</script>

<style scoped>
.audio {
    min-width: 500px;
    color: black;
}

.video {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    color: gray;
    top: 0;
}

.video-fixed {
    max-width: 700px;
    margin: auto;
}

textarea {
    width: 100%;
    font-size: 110%;
}

.block {
    text-align: center;
    font-weight: 500;
    font-size: 130%;
}
</style>