<template>
  <div>
    <div class="fixed-top d-block d-sm-block d-md-none container-nav-s ">
      <b-row>
        <b-col cols="12">
          <span class="float-left ml-5 mt-2 My-Name"
            >G<span style="color:#ffffff">uiseppe</span> E<span
              style="color:#ffffff"
              >pifani</span
            ></span
          >
        </b-col>
        <b-col cols="12">
          <div class="float-left ml-5 mt-1">
            <TextChangeComponent font_size="14px" id="word" />
          </div>
        </b-col>
        <b-col cols="12" style="font-size:12px !important">
          <hr />
          <div class="mb-5 d-flex justify-content-center shadow">
            <div class="p-2 mr-3">
              <a href="#/"
                ><i class="fas fa-user p-2 icon"></i>
                <div>Sobre mi</div>
              </a>
            </div>
            <div class="p-2 ml-3">
              <a href="#services">
                <i class="fas fa-laptop-code p-2 icon"></i>
                <div>Servicios</div>
              </a>
            </div>
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>


<script>
import TextChangeComponent from "@/components/TextChangeComponent.vue";
export default {
  name: "MenuSmComponent",
  components: { TextChangeComponent }
};
</script>

<style scoped>
hr {
  margin: 0 !important;
  margin-top: 5px !important;
  height: 8px !important;
  background-image: linear-gradient(90deg, #cbe6f5, transparent) !important;
  border: 0 !important;
  height: 1px !important;
}
.container-nav-s {
  background: #4c565c;
  width: 100% !important;
  height: 136px;
  color: #cbe6f5;
}

.My-Name {
  font-size: 17px;
  font-weight: bold;
}

a {
  color: #cbe6f5 !important;
}
</style>