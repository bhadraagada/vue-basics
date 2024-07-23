const app = Vue.createApp({
  data() {
    return {
      url: "https://www.youtube.com",
      showDets: true,
      drivers: [
        {
          image: "assets/red bull.avif",
          team: "Red Bull",
          driver1: "Max Verstappen",
          driver2: "Sergio Perez",
          points: 69,
          isFav: true
        },
        {
          image: "assets/ferrari.avif",
          team: "Ferrari",
          driver1: "Charles Leclerc",
          driver2: "Carlos Sainz",
          points: 68,
          isFav: true
        },
        {
          image: "assets/mercedes.avif",
          team: "Mercedes",
          driver1: "Lewis Hamilton",
          driver2: "George Russell",
          points: 45,
          isFav: false
        },
      ],
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
    },
    toggleFav(i) {
      i.isFav = !i.isFav;
    }
  },
});

app.mount("#app");
