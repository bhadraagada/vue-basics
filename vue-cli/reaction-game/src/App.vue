<template>
  <h1>Reaction Time Tester</h1>
  <p>How fast are you?</p>
  <button @click="start" :disabled="isPlaying">Start</button>
  <Block v-if="isPlaying" :delay="delay" @end="endGame"/>
  <Result v-if="!isPlaying" :score="score" />
  <!-- <p v-if="score">Your score: {{ score }} ms</p> -->
</template>

<script>
import Block from "./components/Block.vue";
import Result from "./components/Result.vue";

export default {
  name: "App",
  data() {
    return {
      isPlaying: false,
      delay: null,
      score: null,
    };
  },
  components: { Block, Result },
  methods: {
    start() {
      this.delay = 2000 + Math.random() * 5000;
      this.isPlaying = true;
      this.score = null;
    },
    endGame(reactionTime) {
      this.score = reactionTime
      this.isPlaying = false;
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #444;
  margin-top: 60px;
}
button[disabled] {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
