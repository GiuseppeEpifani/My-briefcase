<template>
  <div>
    <span class="word" :id="this.idWord" :style="{ fontSize: this.font }"
      >Front-end Developer</span
    >
  </div>
</template>

<script>
export default {
  props: ["font_size", "id"],
  name: "TextChangeComponent",
  data() {
    return {
      font: this.font_size,
      idWord: this.id,
    };
  },
  mounted() {
    let words = [
      "Freelancer",
      "Programmer",
      "Back-end Developer",
      "Front-end Developer",
      "React Native Developer"
    ];
    let wordWrapper = document.getElementById(this.idWord);
    let wordWrapperContent = wordWrapper.innerHTML;
    let addingWord = false;
    let counter = 1;

    setInterval(() => {
      if (wordWrapperContent.length > 0 && !addingWord) {
        wordWrapper.innerHTML = wordWrapperContent.slice(0, -1);
        wordWrapperContent = wordWrapper.innerHTML;
      } else {
        addingWord = true;
      }

      if (addingWord) {
        if (wordWrapperContent.length < words[counter].length) {
          wordWrapper.innerHTML = words[counter].slice(
            0,
            wordWrapperContent.length + 1
          );
          wordWrapperContent = wordWrapper.innerHTML;
        } else {
          if (counter < words.length) {
            counter++;
          }
          addingWord = false;
        }
      }

      if (counter == words.length) {
        counter = 0;
      }
    }, 100);
  },
};
</script>

<style scoped>
.word {
  background-color: #596b75;
  color: #ffffff;
  line-height: 1.4em;
  height: 1.4em;
  padding: 0 14px 0 7px;
  display: inline-block;
  vertical-align: middle;
  position: relative;
}

.word:before {
  content: "";
  background-color: #ffffff;
  width: 1px;
  position: absolute;
  top: 8px;
  bottom: 5px;
  right: 7px;
}
</style>
