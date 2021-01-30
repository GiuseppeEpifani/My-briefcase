<template>
  <div class="about align-vertical">
    <div class="container-about">
      <div class="mt-2 mb-2">
        <b-row>
          <b-col cols="12">
            <h2 class="text-align ml-4">Sobre <span>Mi</span></h2>
          </b-col>

          <b-col cols="12">
            <hr />
            <p class="text-align mt-4 mr-3">
             Hola, me llamo Guiseppe Epifani, tengo 22 años y soy Analista programador, egrese de la universidad Inacap el año 2020. Soy activo y autodidacta en el mundo del desarrollo de software, amante de la programación en general, me gustan los desafios y solucionar problemas, y sentir la satisfacción de automatizar procesos de una empresa que antes se realizaban de manera manual o bien de llevar a codigo las ideas de mis cliente y brindarles un servicio de calidad.
            </p>
            <p class="text-align mt-4 mr-3">
              Tenego solidas bases en el lenguaje de programación JavaScript, actualmente utilizo en el Front-end el Framework Vue.js pero tambien conozco la libreria React.js, ademas para el diseño utilizo css puro, BostrapVue o Vuetify dependiendo de cual se adapte mejor a la necesidad del cliente. <br> 
              En el Backend tengo experiencia haciendo API REST con Node.js y Laravel (Lumen) o bien trabajando con Laravel mix. <br><br>
              Poseo comocimientos en Vuex, Axios, Redux, JWT, Passport.
            </p>
          </b-col>
          <b-col cols="12">
            <h2 class="text-align mt-3 ml-4">Mis <span>Habilidades</span></h2>
          </b-col>
          <b-col cols="12">
            <hr />
          </b-col>
          <b-col cols="12">
            <skillsComponent />
          </b-col>
           <b-col cols="12">
            <hr />
          </b-col>
          <b-col cols="12">
            <h2 class="text-align mt-3 ml-4"><span>C</span>ontacto</h2>
          </b-col>
           <b-col cols="12">
            <myContact />
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>


<script>
import skillsComponent from "@/components/skillsComponent.vue";
import myContact from "@/components/MyContact.vue";

export default {
  name: "Abuot",
  components: { skillsComponent, myContact}
};
</script>

<style scoped>
hr {
  height: 8px !important;
  background-image: linear-gradient(90deg, #cbe6f5, transparent) !important;
  border: 0 !important;
  height: 1px !important;
}

span {
  color: #cbe6f5;
}
.col-12 {
  padding: 0;
}
.row {
  width: 100% !important;
  margin: 0 !important;
}

.about {
  min-width: 100%;
  min-height: 100%;
  background: #4c565c;
}

.container-about {
  width: 100%;
  height: 80%;
  max-height: 790px;
  overflow-y: auto;
}

@media only screen and (max-width: 990px) {
  .about {
    max-height: 2000px;
  }

  .container-about {
    max-height: 2000px;
  }
}

</style>