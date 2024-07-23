const app = Vue.createApp({
  data () {
    return {
      showDets: true,
      title: "Red Bull Racing",
      driver1: "Max Verstappen",
      driver2: "Sergio Perez",
      points: 60
    }
  },
  methods: {
    changeDriver(driver2) {
      // this.driver2 = "Lando Norris";
      this.driver2 = driver2;
    },
    toggleShow() {
      this.showDets = !this.showDets;
    }
  }
});

app.mount("#app");
