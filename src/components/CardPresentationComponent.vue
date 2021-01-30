<template>
  <div class="CardPresentationComponent">
    <div class="container-main">
      <b-card>
        <div class="container-main-image">
          <div class="container-image img"></div>
        </div>
        <b-card-title class="mt-4">
          <span class="My-Name"
            >G<span style="color: #ffffff">uiseppe</span> E<span
              style="color: #ffffff"
              >pifani</span
            ></span
          >
        </b-card-title>
        <b-card-text>
          <b-row class="mx-auto">
            <b-col cols="12"
              ><TextChangeComponent font_size="18px" id="wordCard" />
            </b-col>
            <b-col cols="12" class="mt-4"
              ><a href="https://github.com/GiuseppeEpifani" target="_blank"
                ><i
                  class="fab fa-github p-2 icon icon-card"
                  style="color: #cbe6f5"
                ></i>
              </a>
              <a href="https://www.linkedin.com/in/guiseppe-epifani-50b1781b4/" target="_blank"
                ><i
                  class="fab fa-linkedin p-2 icon icon-card"
                  style="color: #cbe6f5"
                ></i>
              </a>
              <a href="tel:+56999081586">
                <i
                  class="fas fa-mobile-alt p-2 icon icon-card"
                  style="color: #cbe6f5"
                ></i>
              </a>
            </b-col>
          </b-row>
        </b-card-text>
        <hr />
          <a href="/cv.pdf" target="_blank" class="btn-cv">Descargar CV <i class="fas fa-cloud-download-alt ml-2"></i
        ></a>
      </b-card>
    </div>
  </div>
</template>

<script>
import TextChangeComponent from "@/components/TextChangeComponent.vue";

export default {
  name: "CardPresentationComponent",
  components: {
    TextChangeComponent,
  },
  props: {
    msg: String,
  },
};
</script>


<style scoped>
hr {
  width: 400px;
  background: #cbe6f5;
}

@media only screen and (max-width: 770px) {
  hr {
    width: 250px;
  }

  .container-image,
  .container-main-image {
    height: 380px !important;
  }
}

button {
  color: #cbe6f5;
  border-color: #cbe6f5;
}

button:hover {
  background: #578fad;
  color: #ffffff;
  border-color: #578fad;
}

.card-body {
  background: #4c565c;
  color: #cbe6f5;
  border-radius: 3px;
  overflow: hidden;
  padding: 0 !important;
  padding-bottom: 10px !important;
}
.container-image {
  width: 100%;
  height: 600px;
  background: url("/images/yo.png") no-repeat center center;
  background-size: cover;
}
.container-main-image {
  background: #578fad;
  background: -webkit-linear-gradient(180deg, #cbe6f5 0%, #cbe6f5 100%);
  background: -moz-linear-gradient(180deg, #cbe6f5 0%, #cbe6f5 100%);
  background: linear-gradient(180deg, #4e5b63 0%, #cbe6f5 100%);
  overflow: hidden;
  width: 100%;
  height: 600px;
  clip-path: polygon(100% 0, 100% 91%, 50% 100%, 0 91%, 0 0);
}
.container-main {
  width: 100%;
  height: 100%;
  -webkit-box-shadow: -20px -20px 0px -4px rgba(87, 143, 173, 1);
  -moz-box-shadow: -20px -20px 0px -4px rgba(87, 143, 173, 1);
  box-shadow: -20px -20px 0px -4px rgba(87, 143, 173, 1);
}

.My-Name {
  font-size: 30px;
  font-weight: bold;
}

.icon-card {
  font-size: 33px;
}

.btn-cv {
  background: rgba(0, 0, 0, 0);
  border: solid 1px #cbe6f5;
  padding: 6px;
  border-radius: 5px;
}

.btn-cv:hover {
  border: solid 1px #578fad;
  background: #578fad;
  color: #ffffff;
}
</style>
