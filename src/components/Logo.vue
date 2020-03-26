<template>
<h1><span>open</span><span>ride</span></h1>
</template>

<script>
export default {
  data() {
    return {}
  },
  components: {},
  computed: {},
  methods: {},
  mounted() {}
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Luckiest+Guy&display=swap");

h1 {
  margin: 0;
  font-family: "Luckiest Guy", cursive;
  font-size: 3.5em;
  padding: 0;
  color: white;
  text-shadow: 0 0.1em 20px black, 0.05em -0.03em 0 black, 0.05em 0.005em 0 black, 0em 0.08em 0 black, 0.05em 0.08em 0 black, 0px -0.03em 0 black, -0.03em -0.03em 0 black, -0.03em 0.08em 0 black, -0.03em 0 0 black;
}
h1 span {
  -webkit-transform: scale(0.9);
          transform: scale(0.9);
  display: inline-block;
}
h1 span:first-child {
  -webkit-animation: bop 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards infinite alternate;
          animation: bop 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards infinite alternate;
}
h1 span:last-child {
  -webkit-animation: bopB 1s 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards infinite alternate;
          animation: bopB 1s 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards infinite alternate;
}

@-webkit-keyframes bop {
  0% {
    -webkit-transform: scale(0.9);
            transform: scale(0.9);
  }
  50%,
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
}

@keyframes bop {
  0% {
    -webkit-transform: scale(0.9);
            transform: scale(0.9);
  }
  50%,
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
}
@-webkit-keyframes bopB {
  0% {
    -webkit-transform: scale(0.9);
            transform: scale(0.9);
  }
  80%,
  100% {
    -webkit-transform: scale(1) rotateZ(-3deg);
            transform: scale(1) rotateZ(-3deg);
  }
}
@keyframes bopB {
  0% {
    -webkit-transform: scale(0.9);
            transform: scale(0.9);
  }
  80%,
  100% {
    -webkit-transform: scale(1) rotateZ(-3deg);
            transform: scale(1) rotateZ(-3deg);
  }
}
</style>