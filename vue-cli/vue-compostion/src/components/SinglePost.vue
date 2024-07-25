<template>
  <div>
    <h1>{{ post.title }} - {{ post.author }}</h1>
    <p>{{ snippet }}</p>
    <p>Tags: {{ post.tags }}</p>
  </div>
</template>

<script>
import { computed } from "vue";

export default {
  name: "SinglePost",
  props: ["post"],
  setup(props) {
    const snippet = computed(() => {
      return props.post.body.substring(0, 200) + "...";
    });

    return { snippet };
  },
};
</script>

<style></style>
