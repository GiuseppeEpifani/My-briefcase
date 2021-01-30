<template>
  <div class="FullContent">
    <div class="container-full-content">
      <div id="/" class="margin-scroll">
        <About />
      </div>
      <br />
      <div id="services" class="margin-scroll">
        <Services />
      </div>
      <br />
    </div>
  </div>
</template>


<script>
import About from "@/views/About.vue";
import Services from "@/views/Services.vue";
export default {
  name: "FullContent",
  components: { About, Services }
};
</script>