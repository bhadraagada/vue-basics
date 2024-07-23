const app = Vue.createApp({
  data() {
    return {
      showDets: true,
      title: "Red Bull Racing",
      driver1: "Max Verstappen",
      driver2: "Sergio Perez",
      points: 60,
      x: 0,
      y: 0,
    };
  },
  methods: {
    changeDriver(driver2) {
      // this.driver2 = "Lando Norris";
      this.driver2 = driver2;
    },
    toggleShow() {
      this.showDets = !this.showDets;
    },
    // mouse events
    handleEvent(e, i) {
      console.log(e, e.type);
      if (i) console.log(i);
    },
    handleMouse(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    }
  },
});

app.mount("#app");
