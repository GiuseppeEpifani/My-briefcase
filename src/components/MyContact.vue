<template>
  <div>
    <b-container class="h3">
      <i class="far fa-envelope"></i>
      <span class="my-contact ml-2">Giuseppe.epifanivillalobos@gmail.com</span>
    </b-container>
  </div>
</template>


<script>
export default {
  name: "myContact",
};
</script>

<style scoped>
.my-contact {
  font-size: 28px !important;
}
@media only screen and (max-width: 1300px) {
  .my-contact {
    font-size: 20px !important;
  }
}
@media only screen and (max-width: 770px) {
  .my-contact {
    font-size: 20px !important;
  }
}

@media only screen and (max-width: 600px) {
  .my-contact {
    font-size: 16px !important;
  }

  .fa-envelope {
    text-align: center;
  }
}
</style>