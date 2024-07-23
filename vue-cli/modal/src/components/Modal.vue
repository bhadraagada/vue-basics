<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal" :class="{ sale: theme === 'sale' }">
      <slot>default content</slot>
      <div class="actions">
        <slot name="links"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["theme"],
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
.modal .actions {
    margin-top: 20px;
    text-align: center;
    color: #743535;
    font-weight: bold;
    font-style: italic;
    display: flex;
    flex-direction: column;
}
.modal .actions a {
    color: #743535;
    padding: 8px;
    border: 1px solid #743535;
    border-radius: 4px;
    text-decoration: none;
    margin: 10px;
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
