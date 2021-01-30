<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from "@/views/Home.vue";
export default {
  components: {
    Home
  }
};
</script>


<style>
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
}

#app {
  font-family: unset;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

#nav {
  padding: 30px;
}

a {
  font-weight: bold;
  color: #fbfeff !important;
  text-decoration: none !important;
}

a.router-link-exact-active {
  color: #cbe6f5 !important;
  text-decoration: none !important;
}

.icon {
  font-size: 20px;
  text-decoration: none;
}

.bg-bubbles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.align-vertical {
  display: flex;
  align-items: center;
}

.text-align {
  text-align: left;
  margin-left: 40px;
}

@media only screen and (max-width: 990px) {
  .text-align {
    text-align: center;
    margin-right: 10px;
    margin-left: 10px;
  }
}

@media only screen and (max-width: 770px) {
  /* esto nos permite hacer un margen al hacer scroll-behavior: smooth para que uestro
manu no tape nuestro contenido*/
  .margin-scroll {
    scroll-margin: 138px !important;
  }
}

/* css scrollbar*/
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: #8597a0;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: #578fad;
}
</style>
