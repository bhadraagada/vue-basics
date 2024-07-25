<template>
  <!-- <div class="home">
    Home
    <p>name: {{ name }}</p>
    <p ref="p">age: {{ age }}</p>
    <button @click="handleClick">Click me </button>
    <button @click="age++">Add age</button>
    <input type="text" v-model="name">
  </div> -->
  <!-- <div class="home">
    <h1>Home</h1>
    <h2>Refs</h2>
    <p>{{ bhadra.name }} - {{ bhadra.age }}</p>
    <button @click="updateBhadra">Update</button>
    <h2>Reactive</h2>
    <p>{{ bhadraTwo.name }} - {{ bhadraTwo.age }}</p>
    <button @click="updateBhadraTwo">Update</button>
  </div> -->
  <!-- <div>
    <h1>Home</h1>
    <input type="text" v-model="search" />
    <p>searching for - {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">{{ name }}</div>
    <button @click="handleClick">Stop</button>
  </div> -->
  <div>
    <h1>Home</h1>
    <!-- <button @click="togglePosts">Toggle Posts</button> -->
    <!-- <button @click="posts.pop()">Delete Post</button> -->
    <div v-if="posts.length">
      <PostList v-if="showPosts" :posts="posts" />
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
    <div v-if="error">{{ error.message }}"</div>
  </div>
</template>

<script>
import getPosts from "@/composables/getPosts";
import PostList from "../components/PostList.vue";

export default {
  name: "Home",
  components: { PostList },

  // setup() {
  //   const p = ref("hello");

  //   const name = ref("bhadra");
  //   const age = ref(19);

  //   const handleClick = () => {
  //     name.value = "kumar";
  //     age.value = 20;
  //   };

  //   return { name, age, handleClick, p };
  // },

  // setup() {
  //   const bhadra = ref({ name: "kumar", age: 20 });
  //   const bhadraTwo = reactive({ name: "kumari", age: 30 });

  //   const updateBhadra = () => {
  //     bhadra.value.age = 21;
  //   };

  //   const updateBhadraTwo = () => {
  //     bhadraTwo.age = 21;
  //   };

  //   return { bhadra, updateBhadra, bhadraTwo, updateBhadraTwo };
  // },

  // setup() {
  //   const search = ref("");
  //   const names = ref([
  //     "bhadra",
  //     "kumar",
  //     "kumari",
  //     "rahul",
  //     "sachin",
  //     "yoshi",
  //     "toad",
  //   ]);

  //   const stopWatch = watch(search, () => {
  //     console.log("watch function raning");
  //   });

  //   const stopEffect = watchEffect(() => {
  //     console.log("watch effect raning", search.value);
  //   });

  //   const matchingNames = computed(() => {
  //     return names.value.filter((name) => name.includes(search.value));
  //   });

  //   const handleClick = () => {
  //     stopWatch();
  //     stopEffect();
  //   };

  //   return { names, search, matchingNames, handleClick, stopWatch, stopEffect };
  // },

  setup() {
    const { posts, error, load } = getPosts();
    load();
    return { posts, error };
  },
};
</script>
