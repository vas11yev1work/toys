<template lang="pug">
section.about-section
  .container
    .image.parallax-background
      img(v-show="activeIndex === 0" src="@/assets/images/planet-big-1.svg" alt="Toys")
      img(v-show="activeIndex === 1" src="@/assets/images/planet-big-2.svg" alt="Toys")
      img(v-show="activeIndex === 2" src="@/assets/images/planet-big-3.svg" alt="Toys")
      img(v-show="activeIndex === 3" src="@/assets/images/planet-big-4.svg" alt="Toys")
      ul.about-navigation
        li(v-for="(_, index) in questions")
          a(@click.prevent="activeIndex = index" href="#" :class="{ active: index === activeIndex }"): Question
    .content
      h2 {{ question.title }}
      .card(v-html="question.text")
  .before.parallax
</template>

<script lang="ts">
import Question from '@/components/icons/Question.vue';
import questions from '@/assets/data/about.json';
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'AboutSection',
  data: () => ({
    questions,
    activeIndex: 0
  }),
  computed: {
    question() {
      return this.questions[this.activeIndex];
    }
  },
  components: {Question}
});
</script>

<style scoped>
.about-section {
  padding-top: 200px;
  position: relative;
}

.about-section .before {
  background-image: url('@/assets/images/asteroid-1.svg');
  display: block;
  position: absolute;
  top: 20px;
  right: 0;
  width: 204px;
  height: 382px;
}

.about-navigation li {
  position: absolute;
}

.about-navigation li:nth-child(1) {
  top: 60px;
  left: calc(100% + 10px);
}

.about-navigation li:nth-child(2) {
  top: 190px;
  left: calc(100% + 50px);
}

.about-navigation li:nth-child(3) {
  top: 320px;
  left: calc(100% + 45px);
}

.about-navigation li:nth-child(4) {
  top: 450px;
  left: calc(100% + 0px);
}

.about-navigation li a {
  display: flex;
  width: 58px;
  height: 58px;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  background-color: #fff;
}

.about-navigation li a.active {
  background-color: #fe6205;
}

.about-navigation li a.active :deep(svg path) {
  fill: #fff;
}

.about-section .image {
  position: relative;
  z-index: 2;
}

.about-section .image img {
  width: 584px;
  height: 585px;
  object-fit: contain;
}

.about-section .container {
  display: flex;
  align-items: center;
}

.about-section .content {
  color: #fff;
  margin-left: 270px;
}

.about-section .content h2 {
  text-align: left;
  margin-bottom: 40px;
}

.about-section .content .card {
  border-radius: 5px;
  background: #454568;
  padding: 35px 25px;
  line-height: 165%;
  position: relative;
  z-index: 2;
}

@media screen and (max-width: 550px) {
  .about-section {
    padding-top: 60px;
  }

  .about-section .container {
    flex-direction: column;
  }

  .about-section .content {
    margin-left: 0;
  }

  .about-section .content h2 {
    display: none;
  }

  .about-section > h2 {
    display: block;
    margin-bottom: 30px;
    position: relative;
  }

  .about-section .image {
    margin-bottom: 120px;
  }

  .about-section .image img {
    width: 100%;
    height: auto;
  }

  .about-section:before {
    top: -140px;
  }

  .about-navigation li:nth-child(1) {
    top: auto;
    bottom: -30px;
    left: 0;
  }

  .about-navigation li:nth-child(2) {
    top: auto;
    bottom: -80px;
    left: calc((100% - (58px * 4)) / 3 + 58px);
  }

  .about-navigation li:nth-child(3) {
    top: auto;
    bottom: -80px;
    left: calc((100% - (58px * 4)) / 3 * 2 + (58px * 2));
  }

  .about-navigation li:nth-child(4) {
    top: auto;
    bottom: -30px;
    left: calc(100% - 58px);
  }
}
</style>