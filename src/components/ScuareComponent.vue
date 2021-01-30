<template>
  <div>
    <ul class="scuare">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>


<script>
export default {
  name: "ScuareComponents"
};
</script>

<style>
.scuare {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 90%;
  z-index: 1;
  overflow: hidden;
}

.scuare li {
  position: absolute;
  list-style: none;
  display: block;
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.15);
  bottom: -160px;
  -webkit-animation: square 25s infinite linear;
  -moz-animation: square 25s infinite linear;
  animation: square 25s infinite linear;
}

.scuare li:nth-child(1) {
  left: 10%;
}

.scuare li:nth-child(2) {
  left: 20%;
  width: 80px;
  height: 80px;
  -webkit-animation-delay: 2s;
  -moz-animation-delay: 2s;
  animation-delay: 2s;
  -webkit-animation-duration: 17s;
  -moz-animation-duration: 17s;
  animation-duration: 17s;
}

.scuare li:nth-child(3) {
  left: 25%;
  -webkit-animation-delay: 4s;
  -moz-animation-delay: 4s;
  animation-delay: 4s;
}

.scuare li:nth-child(4) {
  left: 40%;
  width: 60px;
  height: 60px;
  -webkit-animation-duration: 22s;
  -moz-animation-duration: 22s;
  animation-duration: 22s;
  background-color: rgba(255, 255, 255, 0.25);
}

.scuare li:nth-child(5) {
  left: 70%;
}

.scuare li:nth-child(6) {
  left: 80%;
  width: 120px;
  height: 120px;
  -webkit-animation-delay: 3s;
  -moz-animation-delay: 3s;
  animation-delay: 3s;
  background-color: rgba(255, 255, 255, 0.2);
}

.scuare li:nth-child(7) {
  left: 32%;
  width: 160px;
  height: 160px;
  -webkit-animation-delay: 7s;
  -moz-animation-delay: 7s;
  animation-delay: 7s;
}

.scuare li:nth-child(8) {
  left: 55%;
  width: 20px;
  height: 20px;
  -webkit-animation-delay: 15s;
  -moz-animation-delay: 15s;
  animation-delay: 15s;
  -webkit-animation-duration: 40s;
  -moz-animation-duration: 40s;
  animation-duration: 40s;
}

.scuare li:nth-child(9) {
  left: 25%;
  width: 10px;
  height: 10px;
  -webkit-animation-delay: 2s;
  -moz-animation-delay: 2s;
  animation-delay: 2s;
  -webkit-animation-duration: 40s;
  -moz-animation-duration: 40s;
  animation-duration: 40s;
  background-color: rgba(255, 255, 255, 0.3);
}

.scuare li:nth-child(10) {
  left: 90%;
  width: 160px;
  height: 160px;
  -webkit-animation-delay: 11s;
  -moz-animation-delay: 11s;
  animation-delay: 11s;
}

.scuare li:nth-child(11) {
  left: 15%;
  width: 17px;
  height: 17px;
  -webkit-animation-delay: 12s;
  -moz-animation-delay: 12s;
  animation-delay: 12s;
  -webkit-animation-duration: 40s;
  -moz-animation-duration: 40s;
  animation-duration: 40s;
  background-color: rgba(255, 255, 255, 0.5);
}

.scuare li:nth-child(12) {
  left: 20%;
  width: 5px;
  height: 5px;
  -webkit-animation-delay: 15s;
  -moz-animation-delay: 15s;
  animation-delay: 15s;
  -webkit-animation-duration: 15s;
  -moz-animation-duration: 15s;
  animation-duration: 15s;
  background-color: rgba(255, 255, 255, 0.1);
}

.scuare li:nth-child(13) {
  left: 45%;
  width: 8px;
  height: 8px;
  -webkit-animation-delay: 17s;
  -moz-animation-delay: 17s;
  animation-delay: 17s;
  -webkit-animation-duration: 29s;
  -moz-animation-duration: 29s;
  animation-duration: 29s;
  background-color: rgba(255, 255, 255, 0.3);
}

.scuare li:nth-child(14) {
  left: 50%;
  width: 120px;
  height: 120px;
  -webkit-animation-delay: 11s;
  -moz-animation-delay: 11s;
  animation-delay: 11s;
  -webkit-animation-duration: 19s;
  -moz-animation-duration: 19s;
  animation-duration: 19s;
  background-color: rgba(255, 255, 255, 0.35);
}

.scuare li:nth-child(15) {
  left: 67%;
  width: 50px;
  height: 50px;
  -webkit-animation-delay: 6s;
  -moz-animation-delay: 6s;
  animation-delay: 6s;
  -webkit-animation-duration: 12s;
  -moz-animation-duration: 12s;
  animation-duration: 12s;
  background-color: rgba(255, 255, 255, 0.5);
}

.scuare li:nth-child(16) {
  left: 75%;
  width: 20px;
  height: 20px;
  -webkit-animation-delay: 1s;
  -moz-animation-delay: 1s;
  animation-delay: 1s;
  -webkit-animation-duration: 25s;
  -moz-animation-duration: 25s;
  animation-duration: 25s;
  background-color: rgba(255, 255, 255, 0.3);
}

.scuare li:nth-child(17) {
  left: 10%;
  width: 10px;
  height: 10px;
  -webkit-animation-delay: 2s;
  -moz-animation-delay: 2s;
  animation-delay: 2s;
  -webkit-animation-duration: 20s;
  -moz-animation-duration: 20s;
  animation-duration: 20s;
  background-color: rgba(255, 255, 255, 0.45);
}

.scuare li:nth-child(18) {
  left: 55%;
  width: 10px;
  height: 10px;
  -webkit-animation-delay: 2s;
  -moz-animation-delay: 2s;
  animation-delay: 2s;
  -webkit-animation-duration: 32s;
  -moz-animation-duration: 32s;
  animation-duration: 32s;
  background-color: rgba(255, 255, 255, 0.4);
}

.scuare li:nth-child(19) {
  left: 59%;
  width: 10px;
  height: 10px;
  -webkit-animation-delay: 8s;
  -moz-animation-delay: 8s;
  animation-delay: 8s;
  -webkit-animation-duration: 15s;
  -moz-animation-duration: 15s;
  animation-duration: 15s;
  background-color: rgba(255, 255, 255, 0.4);
}

.scuare li:nth-child(20) {
  left: 5%;
  width: 15px;
  height: 15px;
  -webkit-animation-delay: 3s;
  -moz-animation-delay: 3s;
  animation-delay: 3s;
  -webkit-animation-duration: 10s;
  -moz-animation-duration: 10s;
  animation-duration: 10s;
  background-color: rgba(255, 255, 255, 0.25);
}

/*
              * Animaciones
              */

@-webkit-keyframes square {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

  100% {
    -webkit-transform: translateY(-100%) rotate(600deg);
    transform: translateY(-100%) rotate(600deg);
  }
}

@-moz-keyframes square {
  0% {
    -moz-transform: translateY(0);
    transform: translateY(0);
  }

  100% {
    -moz-transform: translateY(-100%) rotate(600deg);
    transform: translateY(-100%) rotate(600deg);
  }
}

@keyframes square {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

  100% {
    -webkit-transform: translateY(-1500px) rotate(600deg);
    transform: translateY(-1500px) rotate(600deg);
  }
}
</style>
