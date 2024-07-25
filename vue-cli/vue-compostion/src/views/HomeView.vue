<template>
  <div class="home">
    Home
    <p>name: {{ name }}</p>
    <p ref="p">age: {{ age }}</p>
    <button @click="handleClick">Click me </button>
    <button @click="age++">Add age</button>
    <input type="text" v-model="name">
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: "Home",
  setup() {
    const p = ref("hello");

    const name = ref("bhadra");
    const age = ref(19);

    const handleClick = () => {
      name.value = "kumar";
      age.value = 20;
    };

    return { name, age, handleClick, p };
  },
};
</script>
