<template lang="pug">
.present-block
  .title В конце ты получишь <span>подарок!</span>
  .description
    template(v-if="testStore.step !== Step.FINISHED")
      template(v-if="testStore.questionsCount")
        | Ты сможешь забрать его через: {{ questionsLeft }} {{ declOfNum(questionsLeft, ['вопрос', 'вопроса', 'вопросов']) }}
      template(v-else) Ты сможешь забрать его ответив на все вопросы
    template(v-else) Ты сможешь забрать его указав адрес электронной почты
  Button(:disabled="testStore.step !== Step.FINISHED" :click="click") Забрать подарок
</template>

<script lang="ts">
import Button from '@/components/basic/Button.vue';
import {useTest, Step} from '@/stores/test';
import {defineComponent} from 'vue';
// @ts-ignore
import emitter from 'tiny-emitter/instance.js';

export default defineComponent({
  name: 'Present',
  data: () => ({
    testStore: useTest(),
    Step
  }),
  computed: {
    questionsLeft() {
      return this.testStore.questionsCount - this.testStore.answersCount;
    }
  },
  methods: {
    declOfNum,
    click() {
      emitter.emit('focus-finish-email');
    }
  },
  components: {Button}
});
</script>

<style scoped>
.present-block {
  background: #ececf0;
  box-shadow: 0 0 22px rgba(28, 25, 88, 0.06);
  border-radius: 37px;
  position: relative;
  background-image: url('@/assets/images/present.svg');
  background-position: center bottom;
  background-repeat: no-repeat;
  padding: 50px 40px;
  text-align: center;
  height: 570px;
  margin-top: 137px;
  margin-bottom: 144px;
  margin-left: -63px;
  width: 330px;
}

.title {
  font-weight: bold;
  font-size: 22px;
  line-height: 130%;
  color: #0c0058;
  margin-bottom: 23px;
}

.title span {
  color: #fe6205;
}

.description {
  font-size: 16px;
  line-height: 165%;
  color: #4e4a64;
  margin-bottom: 40px;
}

.btn {
  padding-top: 18px;
  padding-bottom: 18px;
}

.btn.btn-disabled {
  border: 1px solid #bcbcbc;
  box-shadow: 0 0 22px rgba(192, 192, 192, 0.4);
}

@media screen and (max-width: 550px) {
  .present-block {
    margin-top: 0;
    margin-bottom: 30px;
    margin-left: 0;
    width: 100%;
    height: auto;
    padding-bottom: 185px;
    padding-left: 20px;
    padding-right: 20px;
  }

  .description {
    margin-bottom: 30px;
  }
}
</style>