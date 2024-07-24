<template>
  <div class="block" v-if="showBlock" @click="stopTimer">Click Me</div>
</template>

<script>
export default {
  props: ["delay"],
  data() {
    return {
      showBlock: false,
      timer: null,
      reactionTime: 0,
    };
  },
  mounted() {
    setTimeout(() => {
      this.showBlock = true;
      this.startTimer();
    }, this.delay);
  },
  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        this.reactionTime += 10;
      }, 10);
    },
    
    stopTimer() {
      clearInterval(this.timer);
      this.$emit("end", this.reactionTime);
    },
  },
};
</script>

<style>
.block {
  width: 400px;
  background: #0faf87;
  border-radius: 20px;
  color: white;
  padding: 100px 0;
  margin: 40px auto;
}
button {
  background: #0faf87;
  color: white;
  border: none;
  padding: 8px 16px;
  font-size: 20px;
  cursor: pointer;
  border-radius: 4px;
  width: 100px;
  height: 40px;
}
</style>
