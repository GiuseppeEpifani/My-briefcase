<template>
  <div class="align-vertical home">
    <MenuSmComponent />
    <div class="container-main mx-auto">
      <b-row class="justify-content-md-center">
        <b-col
          cols="12"
          col
          sm="12"
          md="1"
          lg="1"
          xl="1"
          style="z-index: 100 !important"
        >
          <MenuXlComponent />
        </b-col>
        <b-col
          cols="12"
          col
          sm="12"
          md="11"
          lg="5"
          xl="5"
          style="z-index: 90 !important"
        >
          <CardPresentationComponent />
        </b-col>
        <b-col
          cols="12"
          col
          sm="12"
          md="11"
          lg="6"
          xl="6"
          class="d-flex align-items-center ml-auto"
          style="z-index: 100"
        >
          <div class="container-content d-none d-none d-lg-block">
            <transition name="fadeUp" mode="out-in">
              <router-view style="animation-duration: 0.4s" />
            </transition>
          </div>
          <div class="container-content d-block d-sm-block d-lg-none">
            <FullContent />
          </div>
        </b-col>
      </b-row>
      <div>
        <button id="btn_scroll_top" @click="top_scroll_button">
          <i class="fas fa-angle-up fa-2x"></i>
        </button>
      </div>
    </div>
    <ScuareComponent />
  </div>
</template>

<script>
import CardPresentationComponent from "@/components/CardPresentationComponent.vue";
import ScuareComponent from "@/components/ScuareComponent.vue";
import MenuXlComponent from "@/components/MenuXlComponent.vue";
import MenuSmComponent from "@/components/MenuSmComponent.vue";
import FullContent from "@/views/FullContent.vue";

export default {
  name: "Home",
  components: {
    CardPresentationComponent,
    ScuareComponent,
    MenuXlComponent,
    MenuSmComponent,
    FullContent,
  },
  methods: {
    top_scroll_button() {
      const component_scroll = document.getElementById("body");
      console.log(component_scroll);

      component_scroll.scrollTo({ top: 1, behavior: "smooth" });
    },

    handle_scroll() {
      const top_scroll_btn = document.getElementById("btn_scroll_top");
      const component_scroll = document.getElementById("body");

      component_scroll.scrollTop > 400
        ? top_scroll_btn.classList.add("active")
        : top_scroll_btn.classList.remove("active");
    },

    add_scroll() {
      const component_scroll = document.getElementById("body");

      component_scroll.addEventListener("scroll", this.handle_scroll);
    },

    delete_scroll() {
      const component_scroll = document.getElementById("body");

      component_scroll.removeEventListener("scroll", this.handle_scroll);
    },
  },
  mounted() {
    this.add_scroll();
  },
};
</script>

<style>
html {
  overflow-y: hidden !important;
}

body {
    background: #578fad;
  background: -webkit-linear-gradient(180deg, #4c565c 0%, #cbe6f5 100%);
  background: -moz-linear-gradient(180deg, #4c565c 0%, #cbe6f5 100%);
  background: linear-gradient(180deg, #4c565c 0%, #cbe6f5 100%);
  overflow-y: auto !important;
}

.row {
  position: relative;
}

.home {
  min-height: 100% !important;
  min-width: 100% !important;
  overflow-y: hidden;
}

.col {
  padding: 0 !important;
}

.container-main {
  color: #ffffff;
  background-color: rgba(255, 255, 255, 0) !important;
  width: 80%;
}

@media only screen and (max-width: 1000px) {
  .container-main {
    margin-top: 20px !important;
  }
  
  .home {
      overflow-y: inherit;
  }
}

@media only screen and (max-width: 770px) {
  .container-main {
    margin-top: 70px !important;
  }
}

.container-content {
  height: 95%;
  width: 100%;
  background-color: rgba(255, 255, 255, 0) !important;
}

#btn_scroll_top {
  z-index: 100 !important;
  position: fixed;
  right: 18px;
  bottom: 40px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #578fad;
  background: -webkit-linear-gradient(180deg, #cbe6f5 0%, #cbe6f5 100%);
  background: -moz-linear-gradient(180deg, #cbe6f5 0%, #cbe6f5 100%);
  background: linear-gradient(180deg, #4e5b63 0%, #cbe6f5 100%);
  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.25);
  border: none;
  color: #ffff;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  opacity: 0;
  pointer-events: none;
  transition: all 0.4s;
  box-shadow: 2px 2px 9px 0px rgba(255, 255, 255, 0.75);
  -webkit-box-shadow: 2px 2px 9px 0px rgba(255, 255, 255, 0.75);
  -moz-box-shadow: 2px 2px 9px 0px rgba(255, 255, 255, 0.75);
}

#btn_scroll_top.active {
  bottom: 80px;
  pointer-events: auto;
  opacity: 1;
}
</style>
