<template lang="pug">
Modal
  template(#header)
    .text-center Какой тест тебе нравится?
  template(v-if="tests.length")
    .tests-list
      .test-card(
        :key="test.code"
        :class="{ active: test.code === testCode }"
        v-for="test in tests"
        @click="testCode = test.code"
      )
        .image
          Image(v-if="test.image" :slug="test.image")
          .status
        .title {{ test.title }}
      .text-center.width-100
        Button(:click="submit" :disabled="!testCode" arrow) Начать тест
  .empty-content(v-else)
    .empty-content-text В данной категории пока нет тестов
    Button(:click="close" arrow) Выбрать другую категорию
</template>

<script lang="ts">
import Modal from '@/components/app/modals/Modal.vue';
import Button from '@/components/basic/Button.vue';
import {useUser} from '@/stores/user';
import {useTest} from '@/stores/test';
// @ts-ignore
import Fancybox from '@fancyapps/ui/dist/fancybox.mjs';
import testsAll from '@/assets/data/tests.json';
import {defineComponent} from 'vue';
import Image from '@/components/basic/Image.vue';

export default defineComponent({
  name: 'TestsModal',
  data: () => ({
    userStore: useUser(),
    testStore: useTest(),
    testCode: useTest().current,
    testsAll
  }),
  components: {
    Image,
    Modal,
    Button,
  },
  computed: {
    tests() {
      return this.testsAll.filter(({age}) => age === this.userStore.age);
    }
  },
  methods: {
    async submit() {
      this.testStore.$reset();
      this.$nextTick(() => {
        try {
          this.testStore.setTest(this.testCode);
          nextStep(this, 'tests');
        } catch (e) {
          alert('Тест пока не готов, выберите другой!');
        }
      });
    },
    close() {
      Fancybox.getInstance()?.close();
    }
  }
});
</script>

<style scoped>
.tests-list {
  display: flex;
  flex-wrap: wrap;
  width: 610px;
  justify-content: space-between;
  padding-top: 40px;
  padding-bottom: 10px;
}

.empty-content {
  padding-top: 40px;
  padding-bottom: 20px;
}

.empty-content-text {
  padding-bottom: 30px;
}

.test-card {
  margin-bottom: 40px;
  text-align: center;
  position: relative;
  width: 270px;
}

.test-card .image {
  position: relative;
}

.test-card .status {
  width: 48px;
  height: 48px;
  background-color: #fff;
  position: absolute;
  bottom: 0;
  left: 50%;
  margin-left: -24px;
  border-radius: 100%;
}

.test-card img {
  max-width: 100%;
  height: 148px;
  display: inline-block;
  margin-bottom: 18px;
  box-shadow: 0 0 53px rgba(28, 25, 88, 0.11);
  border-radius: 29px;
  width: 100%;
  object-fit: cover;
}

.test-card.active .status {
  background-image: url('@/assets/images/checked.svg'), linear-gradient(180deg, #ff9649 0%, #ff5c00 100%);
  background-color: #fff;
  background-repeat: no-repeat, no-repeat;
  background-position: center, center;
  box-shadow: 0 0 22px rgba(255, 102, 12, 0.2);
}

.test-card .title {
  line-height: 175%;
  color: #0c0058;
}

@media screen and (max-width: 550px) {
  .tests-list {
    width: auto;
    justify-content: center;
  }
}
</style>