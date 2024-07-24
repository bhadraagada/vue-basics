<template>
  <div>
    <h1>{{ title }}</h1>
    <input type="text" ref="name" />
    <button @click="handleClick">click me</button>
    <h3>{{ names }}</h3>
    <div v-if="showModal">
      <Modal theme="sale" @close="toggleModal">
        <!-- <h1>Sign up for the formula one watch party</h1>
      <p>Beligum GP</p> -->
        <h1>{{ header }}</h1>
        <p>{{ content }}</p>
        <template v-slot:links>
          <a href="#">sign up link</a> <br />
          <a href="#">info of belgium gp</a>
        </template>
      </Modal>
    </div>
    <div v-if="showModal2">
      <Modal @close="toggleModal2">
        <h1>{{ header1 }}</h1>
        <p>{{ content2 }}</p>
      </Modal>
    </div>
    <button @click="toggleModal">Show Modal</button>
    <button @click="toggleModal2">Show Modal 2</button>
  </div>
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
      content2: "Baku GP",
      header1: "Sign up for the formula one paddock pass giveaway",
      showModal: false,
      showModal2: false,
    };
  },
  methods: {
    handleClick() {
      console.log(this.$refs.name.value);
      this.$refs.name.classList.add("active");
      this.$refs.name.focus();
      this.names = this.$refs.name.value;
    },
    toggleModal() {
      this.showModal = !this.showModal;
    },
    toggleModal2() {
      this.showModal2 = !this.showModal2;
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
