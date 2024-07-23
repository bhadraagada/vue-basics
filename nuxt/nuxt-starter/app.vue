<script>
  import { ref } from 'vue';

  const message = ref('Hello, Vue.js!');
</script>

<template>
  <div>
    <h1>Vue.js</h1>
    <input v-model="message">
  </div>
</template>
