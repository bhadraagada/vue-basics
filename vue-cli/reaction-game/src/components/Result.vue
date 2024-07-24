<template>
  <p v-if="score" class="score">Your score: {{ score }} ms</p>
  <p v-if="score" class="rank">Rank: {{ rank }}</p>
</template>

<script>
export default {
  data() {
    return{
      rank: null
    }
  },
  props: ["score"],
  mounted() {
    if (this.score < 250) {
      this.rank = "Ninja fingers"
    } else if (this.score < 500) {
      this.rank = "Fast fingers"
    } else if (this.score < 1000) {
      this.rank = "Average fingers"
    } else {
      this.rank = "Slow fingers"
    }
  },

}
</script>

<style>
  .rank {
    font-size: 1.4em;
    color: #0faf87;
    font-weight: bold;
  }
  .score {
    font-size: 1.4em;
    color: #0faf87;
    font-weight: bold;
  }
</style>