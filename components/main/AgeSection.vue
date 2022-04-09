<template lang="pug">
section.age-section
  .container
    h2 Выбери свой возраст
    .age-cards
      .age-card(@click="click(age)" :class="{active: age === userStore.age}" v-for="(age, index) in ages")
        .photo: Image(:slug="`age-photo-${(index+1)}.svg`")
        .content
          .label Возраст
          .age <b>{{ Age[age] }}</b> Лет
        Button(outlined) Выбрать
        Image.image(:slug="`age-image-${(index+1)}.svg`")
  .before.parallax
  .after.parallax
</template>

<script lang="ts">
import Button from '@/components/basic/Button.vue';
import Image from '@/components/basic/Image.vue';
import {Age} from '@/stores/user';
import {useUser} from '@/stores/user';
// @ts-ignore
import Fancybox from '@fancyapps/ui/dist/fancybox.mjs';
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'AgeSection',
  components: {Button, Image},
  data: () => ({
    Age,
    userStore: useUser()
  }),
  computed: {
    ages() {
      return Object.keys(this.Age);
    }
  },
  methods: {
    click(age: Age) {
      if (this.userStore.age) {
        this.userStore.presetAge(age);
        Fancybox.show([{src: '#age-alert'}]);
        return false;
      }
      this.userStore.setAge(age);
      nextStep(this, 'age');
    }
  }
});
</script>

<style scoped>
.age-section {
  padding-top: 245px;
  padding-bottom: 250px;
  position: relative;
}

.age-section .before {
  background-image: url('@/assets/images/asteroid-2.svg');
  display: block;
  position: absolute;
  top: -100px;
  left: 0;
  width: 216px;
  height: 610px;
}

.age-section .after {
  background-image: url('@/assets/images/asteroid-3.svg');
  display: block;
  position: absolute;
  top: 80px;
  left: 281px;
  width: 101px;
  height: 97px;
}

.age-cards {
  display: flex;
  padding-top: 150px;
}

.age-card {
  background: #fff;
  border-radius: 70px;
  position: relative;
  margin-left: 50px;
  width: 433px;
  height: 272px;
  padding: 40px;
  z-index: 2;
  cursor: pointer;
}

.age-card.active {
  /*cursor: default;*/
}

.age-card.active .btn {
  background: linear-gradient(180deg, #ff9649 0%, #ff5c00 100%);
  box-shadow: 0 0 22px rgba(255, 107, 0, 0.4);
  color: #fff;
}

.age-card:first-child {
  margin-left: 0;
}

.age-card .photo {
  height: 106px;
  width: 106px;
  border-radius: 100%;
  background: #fff;
  box-shadow: 0 0 22px rgba(28, 25, 88, 0.14);
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -53px;
  left: 42px;
}

.age-card .image {
  position: absolute;
  bottom: 0;
  right: 0;
  border-radius: 0 0 70px 0;
}

.age-card:nth-child(3) .image {
  right: -55px;
}

.age-card .content {
  margin-top: 32px;
  margin-bottom: 30px;
}

.age-card .content .label {
  line-height: 165%;
  color: #7b7698;
  margin-bottom: 5px;
}

.age-card .content .age {
  font-size: 18px;
  line-height: 165%;
  color: #7b7698;
  position: relative;
  z-index: 1;
}

.age-card .content .age b {
  font-weight: bold;
  font-size: 34px;
  line-height: 41px;
  color: #0c0058;
}

@media screen and (max-width: 550px) {
  .age-section {
    padding-top: 80px;
    padding-bottom: 70px;
  }

  .age-section h2 {
    position: relative;
    z-index: 2;
  }

  .age-cards {
    flex-direction: column;
    padding-top: 100px;
  }

  .age-card {
    margin-left: 0;
    width: auto;
    margin-bottom: 90px;
  }

  .age-card:last-child {
    margin-bottom: 0;
  }
}
</style>