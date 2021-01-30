<template>
  <div class="MenuXlComponent">
    <div class="main-nav">
      <div id="nav" class="container-nav mx-auto d-none d-none d-lg-block">
        <div class="d-flex flex-column">
          <div class="p-2 mt-3">
            <router-link to="/" class-active="active"
              ><i class="fas fa-user p-2 icon"></i>
              <div>Sobre mi</div>
            </router-link>
            <hr />
          </div>
          <div class="p-2">
            <router-link to="services">
              <i class="fas fa-laptop-code p-2 icon"></i>
              <div>Servicios</div>
            </router-link>
            <hr />
          </div>
        </div>
      </div>

      <div
        id="nav"
        class="container-nav mx-auto d-none d-md-block d-lg-none fixed"
      >
        <div class="d-flex flex-column">
          <div class="p-2 mt-3">
            <a href="#/" class-active="active"
              ><i class="fas fa-user p-2 icon"></i>
              <div>Sobre mi</div>
              
            </a>
            <hr />
          </div>
          <div class="p-2">
            <a href="#services">
              <i class="fas fa-laptop-code p-2 icon"></i>
              <div>Servicios</div>
            </a>
            <hr />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "MenuXlComponent",
};
</script>

<style scoped>
.main-nav {
  float: right;
  width: 68px !important;
  margin-right: 5px !important;
}

@media only screen and (max-width: 1000px) {
  .main-nav {
    margin-top: 20px !important;
  }
}
.container-nav {
  z-index: 100 !important;
  background: #4c565c;
  padding: 0 !important;
  width: 68px !important;
  margin-right: 5px !important;
  margin-top: 18px;
  border-radius: 6px;
  font-size: 12px;
}

.fixed {
  position: fixed;
}
</style>