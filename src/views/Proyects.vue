<template>
  <div class="proyects">
    <div class="container-proyects">
      <b-row class="img-contenedor">
        <b-col cols="12" sm="12" md="12" lg="6" xl="6" class=" p-1">
          <p class="text-align h4">Proyecto Mobil Geocolización</p>
          <p class="text-align mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
            cupiditate nesciunt odio expedita laboriosam dolores id labore
            doloremque. Perferendis suscipit similique debitis excepturi non
            facilis blanditiis. Laboriosam velit accusamus repellendus.
          </p>
        </b-col>
        <b-col cols="12" sm="12" md="12" lg="6" xl="6">
          <div class="img-contenedor">
            <img src="images/geocolizacion.jfif" alt="geo" />
          </div>
        </b-col>
      </b-row>
      <b-row class="img-contenedor">
        <b-col cols="12" sm="12" md="12" lg="6" xl="6">
          <div class="img-contenedor">
            <img src="images/geocolizacion.jfif" alt="geo" />
          </div>
        </b-col>
        <b-col cols="12" sm="12" md="12" lg="6" xl="6" class=" p-1 border-top">
          <p class="text-align h4">Proyecto Mobil Geocolización</p>
          <p class="text-align mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
            cupiditate nesciunt odio expedita laboriosam dolores id labore
            doloremque. Perferendis suscipit similique debitis excepturi non
            facilis blanditiis. Laboriosam velit accusamus repellendus.
          </p>
        </b-col>
      </b-row>
      <b-row class="img-contenedor">
        <b-col cols="12" sm="12" md="12" lg="6" xl="6" class=" p-1 border-top">
          <p class="text-align h4">Proyecto Mobil Geocolización</p>
          <p class="text-align mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
            cupiditate nesciunt odio expedita laboriosam dolores id labore
            doloremque. Perferendis suscipit similique debitis excepturi non
            facilis blanditiis. Laboriosam velit accusamus repellendus.
          </p>
        </b-col>
        <b-col cols="12" sm="12" md="12" lg="6" xl="6">
          <div class="img-contenedor">
            <img src="images/geocolizacion.jfif" alt="geo" />
          </div>
        </b-col>
      </b-row>
      <b-row class="img-contenedor">
        <b-col cols="12" sm="12" md="12" lg="6" xl="6">
          <div class="img-contenedor">
            <img src="images/geocolizacion.jfif" alt="geo" />
          </div>
        </b-col>
        <b-col cols="12" sm="12" md="12" lg="6" xl="6" class=" p-1 border-top">
          <p class="text-align h4">Proyecto Mobil Geocolización</p>
          <p class="text-align mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
            cupiditate nesciunt odio expedita laboriosam dolores id labore
            doloremque. Perferendis suscipit similique debitis excepturi non
            facilis blanditiis. Laboriosam velit accusamus repellendus.
          </p>
        </b-col>
      </b-row>
      <b-row class="img-contenedor">
        <b-col cols="12" sm="12" md="12" lg="6" xl="6">
          <div class="img-contenedor">
            <img src="images/geocolizacion.jfif" alt="geo" />
          </div>
        </b-col>
        <b-col cols="12" sm="12" md="12" lg="6" xl="6" class=" p-1 border-top">
          <p class="text-align h4">Proyecto Mobil Geocolización</p>
          <p class="text-align mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
            cupiditate nesciunt odio expedita laboriosam dolores id labore
            doloremque. Perferendis suscipit similique debitis excepturi non
            facilis blanditiis. Laboriosam velit accusamus repellendus.
          </p>
        </b-col>
      </b-row>
      <b-row class="img-contenedor">
        <b-col cols="12" sm="12" md="12" lg="6" xl="6">
          <div class="img-contenedor">
            <img src="images/geocolizacion.jfif" alt="geo" />
          </div>
        </b-col>
        <b-col cols="12" sm="12" md="12" lg="6" xl="6" class=" p-1 border-top">
          <p class="text-align h4">Proyecto Mobil Geocolización</p>
          <p class="text-align mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
            cupiditate nesciunt odio expedita laboriosam dolores id labore
            doloremque. Perferendis suscipit similique debitis excepturi non
            facilis blanditiis. Laboriosam velit accusamus repellendus.
          </p>
        </b-col>
      </b-row>
    </div>
  </div>
</template>


<script>
export default {
  name: "Proyects",
  components: {}
};
</script>

<style scoped>
img {
  min-width: 100%;
  min-height: 100%;
  width: 100%;
  height: 100%;
}
.col-12 {
  padding: 0;
}
.row {
  width: 100% !important;
  margin: 0 !important;
}
.border-top {
  border-color: #cbe6f5 !important;
  border-top: solid 2px;
}

.proyects {
  min-width: 100%;
  min-height: 100%;
  max-height: 828px;
  background: #4c565c;
}

.container-proyects {
  width: 100%;
  height: 80%;
  max-height: 828px;
  overflow-y: auto;
}

@media only screen and (max-width: 990px) {
  .proyects {
    max-height: 2000px;
  }

  .container-proyects {
    max-height: 2000px;
  }
}

.img-contenedor img {
  -webkit-transition: all 0.9s ease; /* Safari y Chrome */
  -moz-transition: all 0.9s ease; /* Firefox */
  -o-transition: all 0.9s ease; /* IE 9 */
  -ms-transition: all 0.9s ease; /* Opera */
  width: 100%;
}
.img-contenedor:hover img {
  -webkit-transform: scale(1.25);
  -moz-transform: scale(1.25);
  -ms-transform: scale(1.25);
  -o-transform: scale(1.25);
  transform: scale(1.25);
}
.img-contenedor {
  /*Ancho y altura son modificables al requerimiento de cada uno*/
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>