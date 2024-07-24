<template>
  <div class="home">
    Home
    <p>name: {{ name }}</p>
    <p ref="p">age: {{ age }}</p>
    <button @click="handleClick">Click me </button>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: "Home",
  setup() {
    console.log(this);

    const p = ref("hello");

    let name = "bhadra";
    let age = 19;

    const handleClick = () => {
      console.log(p.value);
      p.value.classList.add("active");
      p.value.textContent = "hello world";
    };

    return { name, age, handleClick, p };
  },
};
</script>
