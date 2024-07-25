<template>
  <div class="post-list">
    <h1>Post List</h1>
    <div v-for="post in posts" :key="post.id">
      <SinglePost :post="post" />
      <span>{{ post.like }}</span>
    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from "vue";
import SinglePost from "./SinglePost.vue";

export default {
  name: "PostList",
  props: ["posts"],
  components: { SinglePost },
  setup(props) {
    onMounted(() => {
      console.log("Component is mounted");
    });
    onUnmounted(() => {
      console.log("Component is unmounted");
    });
    onUpdated(() => {
      console.log("Component is updated");
    });
  },
};
</script>

<style></style>
