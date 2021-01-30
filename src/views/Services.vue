<template>
  <div class="services align-vertical">
    <div class="container-services">
      <div>
        <p class="text-align h2 ml-4 mt-2">Mis <span>Servicios</span></p>
        <hr />
      </div>
      <div class="mt-2 mb-2">
        <b-row>
          <b-col cols="12">
            <b-row>
              <b-col
                cols="12"
                sm="12"
                md="12"
                lg="3"
                xl="3"
                class="d-flex align-items-center justify-content-center"
              >
                <div class="container-icon">
                  <i class="fab fa-html5  icon-services"></i>
                </div>
              </b-col>
              <b-col cols="12" sm="12" md="12" lg="9" xl="9">
                <p class="text-align h2 mr-3">Front-<span>end</span></p>
                <p class="text-align mr-3">
                Mis servicios de Front-End consisten en páginas SPA interactivas de presentación y contacto, además de aplicaciones web a medida, todas estas, programadas bajo el framework de Vue.js lo que las hace intuitivas para el usuario, para el diseño utilizo CSS puro ademas de bootstrapVue o vuetify, dependiendo de cual se ajuste mejor a la necesidad del cliente.                </p>
              </b-col>
            </b-row>
            <hr />
          </b-col>
          <b-col cols="12">
            <b-row>
              <b-col cols="9" class="d-none d-none d-lg-block">
                <p class="text-align text-change h2 ml-4 mr-3">
                  Back-<span>end</span>
                </p>
                <p class="text-align text-change ml-4 mr-3">
                Mis servicios de Back-End consisten en la creación de aplicaciones a medida API REST con Node.js o Laravel con su respectiva documentación. Las bases de datos que utilizo son: Mysql, PostgreSQL, MongoDB.                </p>
              </b-col>

              <b-col
                cols="12"
                sm="12"
                md="12"
                lg="3"
                xl="3"
                class="d-flex align-items-center justify-content-center"
              >
                <div class="container-icon">
                  <i class="fas fa-code icon-services"></i>
                </div>
              </b-col>

              <b-col
                cols="12"
                sm="12"
                md="12"
                lg="9"
                xl="9"
                class="d-block d-md-block d-lg-none"
              >
                <p class="text-align h2">Back-<span>end</span></p>
                <p class="text-align">
                  Mis servicios de Back-End consisten en la creación de aplicaciones a medida API REST con Node.js o Laravel con su respectiva documentación. Las bases de datos que utilizo son: Mysql, PostgreSQL, MongoDB.
                </p>
              </b-col>
            </b-row>
            <hr />
          </b-col>
          <b-col cols="12">
            <b-row>
              <b-col
                cols="12"
                sm="12"
                md="12"
                lg="3"
                xl="3"
                class="d-flex align-items-center justify-content-center"
              >
                <div class="container-icon">
                  <i class="fab fa-react  icon-services"></i>
                </div>
              </b-col>
              <b-col cols="12" sm="12" md="12" lg="9" xl="9">
                <p class="text-align h2 mr-3">Mobile <span>Developer</span></p>
                <p class="text-align mr-3">
                Mis servicios de Mobile developer consisten en aplicaciones a medida pequeñas y medianas con sus funciones nativas programadas en React Native (expo)  con su respectiva API REST.                </p>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Services",
  components: {}
};
</script>

<style scoped>
hr {
  height: 8px !important;
  background-image: linear-gradient(10deg, #cbe6f5, transparent) !important;
  border: 0 !important;
  height: 1px !important;
}

span {
  color: #cbe6f5;
}

.col-12 {
  padding: 0;
}

.services {
  min-width: 100%;
  min-height: 100%;
  max-height: 790px;
  background: #4c565c;
}

.container-services {
  width: 100%;
  height: 80%;
  max-height: 790px;
  overflow-y: auto;
}

.row {
  width: 100% !important;
  margin: 0 !important;
}

.icon-services {
  font-size: 80px;
  margin-top: 14px;
  z-index: 10;
  color: #cbe6f5;
}

.container-icon {
  background: #578fad;
  background: -webkit-linear-gradient(180deg, #65747c 0%, #578fad 100%);
  background: -moz-linear-gradient(180deg, #65747c 0%, #578fad 100%);
  background: linear-gradient(180deg, #65747c 0%, #578fad 100%);
  border-radius: 50px;
  width: 100px;
  height: 100px;
  overflow: hidden;
  z-index: 5;
}

.text-align {
  text-align: left;
}

@media only screen and (max-width: 1300px) {
  .text-change {
    margin-left: 3px !important;
  }
  .icon-services {
    font-size: 50px;
    margin-top: 10px;
  }

  .container-icon {
    width: 70px;
    height: 70px;
  }
}

@media only screen and (max-width: 990px) {
  .services {
    max-height: 2000px;
  }

  .container-services {
    max-height: 2000px;
  }

  .text-align {
    text-align: center;
    margin-right: 10px;
    margin-left: 10px;
  }

  .icon-services {
    font-size: 80px;
    margin-top: 14px;
  }

  .container-icon {
    width: 100px;
    height: 100px;
    margin-bottom: 10px;
  }
}
</style>