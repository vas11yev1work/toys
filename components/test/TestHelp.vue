<template lang="pug">
.test-help-block(v-if="ready" :class="[userStore.sex, { 'show-helper': clue.showHelper }]")
  .title Буду тебе помогать
  TestClue(:caption="clue.caption"): div(v-html="clue.text")
  template(v-if="clue.showHelper")
    .helper-name {{ helperName }}
    .helper-description Твой помощник
</template>

<script lang="ts">
import TestClue from '@/components/test/TestClue.vue';
import {useUser, Sex} from '@/stores/user';
import {defineComponent} from 'vue';
import {useTest} from '@/stores/test';
import getTest from '~/composables/getTest';

export default defineComponent({
  name: 'TestHelp',
  data: () => ({
    userStore: useUser(),
    testStore: useTest(),
    clue: {
      caption: 'Подсказка',
      text: 'Этот вопрос очень важный, отвечай на него честно!',
      showHelper: true
    },
    ready: false
  }),
  async created() {
    if (this.testStore.current === 'A2') {
      const test = await getTest();
      const text = test.answers.reduce((acc: string, answer: { description: string, title: string }) => {
        acc += `<li><b>${answer.title}</b> ${answer.description}</li>`
        return acc;
      }, '');
      this.clue = {
        caption: 'Инструкция',
        text: `<ul class="clue-long">${text}</ul>`,
        showHelper: false
      }
    }
    if (this.testStore.current === 'C1') {
      this.clue = {
        caption: 'Инструкция',
        text: '<p class="small-text">Варианты ответов: по шкале от 1 до 10, где 1 – абсолютно не важно, 10 – исключительно важно</p>',
        showHelper: true
      }
    }
    this.ready = true;
  },
  computed: {
    helperName() {
      return this.userStore.sex === Sex.Female ? 'Диана' : 'Барри';
    }
  },
  components: {
    TestClue
  }
});
</script>

<style scoped>
:deep(.clue-long) {
  font-size: 14px;
  line-height: 21px;
}

:deep(.clue-long li) {
  margin-bottom: 10px;
}

:deep(.clue-long li b) {
  width: 20px;
  display: inline-block;
  text-align: center;
  font-size: 16px;
}

:deep(.clue p.small-text) {
  font-size: 14px;
  line-height: 23px;
}

.test-help-block {
  background: #ececf0;
  box-shadow: 0 0 22px rgba(28, 25, 88, 0.06);
  border-radius: 37px;
  position: relative;
  background-position: center bottom;
  background-repeat: no-repeat;
  padding: 50px 21px;
  text-align: center;
  height: 726px;
  margin-top: 58px;
  margin-bottom: 66px;
  margin-right: -63px;
  width: 330px;
}

.test-help-block.female {
  background-image: url('@/assets/images/diana.svg');
}

.test-help-block.male {
  background-image: url('@/assets/images/barri.svg');
}

.test-help-block:not(.show-helper) {
  background-image: none;
}

.title {
  font-weight: bold;
  font-size: 22px;
  line-height: 100%;
  color: #0c0058;
  margin-bottom: 43px;
}

.clue {
  margin-bottom: 42px;
}

.helper-name {
  font-weight: bold;
  font-size: 30px;
  line-height: 100%;
  color: #0c0058;
  margin-bottom: 7px;
}

.helper-description {
  font-size: 16px;
  line-height: 175%;
  color: #4e4a64;
}

@media screen and (max-width: 550px) {
  .test-help-block {
    width: 100%;
    margin-right: 0;
    margin-top: 0;
    margin-bottom: 30px;
  }
}
</style>