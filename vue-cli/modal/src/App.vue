<template>
  <h1>{{ title }}</h1>
  <input type="text" ref="name" />
  <button @click="handleClick">click me</button>
  <h3>{{ names }}</h3>
  <Modal :header="header" :content="content" theme="sale" />
</template>

<script>
import Modal from "./components/Modal.vue";

export default {
  name: "App",
  components: {
    Modal,
  },
  data() {
    return {
      title: "Hello World suppppp",
      names: null,
      header: "Sign up for the formula one watch party",
      content: "Beligum GP",
    };
  },
  methods: {
    handleClick() {
      console.log(this.$refs.name.value);
      this.$refs.name.classList.add("active");
      this.$refs.name.focus();
      this.names = this.$refs.name.value;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  color: aqua;
}
</style>
