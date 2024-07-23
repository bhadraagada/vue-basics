<template>
  <div class="backdrop" @click="closeModal">
    <div class="modal" :class="{ sale: theme === 'sale' }">
      <h1>{{ header }}</h1>
      <p>{{ content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["header", "content", "theme"],
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style>
.modal {
  width: 400px;
  padding: 20px;
  margin: 100px auto;
  background: white;
  border-radius: 10px;
}
.backdrop {
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}
.modal h1 {
  color: #743535;
  border: none;
}
.modal p {
  font-style: normal;
}
.sale {
  background: crimson;
  color: white;
  border: 1px solid black;
  border-radius: 10px;
}
.sale h1 {
  color: white;
}
</style>
