<template lang="pug">
.test-stopper
  Progress
  ClientOnly
    .current-progress-container
      .current-progress(v-if="questionsCount")
        | Ты уже прошёл {{ questionsCount }} {{ declOfNum(questionsCount, ['вопрос', 'вопроса', 'вопросов']) }}
    .image
      Image(:slug="image")
      TestClue(:class="cluePosition") {{ clueText }}
    .text-center
      Button(@click="doContinue" arrow) Продолжить отвечать
</template>

<script lang="ts">
import Button from '@/components/basic/Button.vue';
import TestClue from '@/components/test/TestClue.vue';
import Progress from '@/components/test/Progress.vue';
import {Step, useTest} from '@/stores/test';
import Image from '@/components/basic/Image.vue';

export default defineComponent({
  name: 'TestStopper',
  data: () => ({
    testStore: useTest(),
    image: '',
    cluePosition: 'left top',
    clueText: ''
  }),
  computed: {
    questionsCount() {
      return this.testStore.answersCount;
    }
  },
  created() {
    const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
    const randomNumber = random(1, 12);
    const positions = [
      'left top', 'right top', 'right center',
      'right center', 'right top', 'right top',
      'left center', 'left top', 'right center',
      'left top', 'left center', 'right top'
    ];
    this.image = `stopper-${randomNumber}.png`;
    this.cluePosition = positions[(randomNumber - 1)];
    const texts = [
      'Ты уже так далеко! Молодец! Продолжай в том же духе.',
      'Не останавливайся! Впереди будет только веселее.',
      'Ого, мы так далеко! Давай продолжим?',
      'Вот это да, мы так далеко!',
    ];
    this.clueText = texts[random(0, 3)];
  },
  methods: {
    declOfNum,
    doContinue() {
      this.testStore.setStep(Step.IN_PROGRESS);
    }
  },
  components: {
    Button,
    Progress,
    TestClue,
    Image
  },
});
</script>

<style scoped>
.test-stopper .image {
  width: 675px;
  position: relative;
  margin-bottom: 38px;
}

@media screen and (max-width: 550px) {
  .test-stopper .image {
    width: 100%;
  }
}

.test-stopper .current-progress-container {
  padding-top: 50px;
  padding-bottom: 30px;
  text-align: center;
}

.test-stopper .current-progress {
  background: #f3f2f6;
  border-radius: 5px;
  padding: 4px 18px 6px;
  line-height: 165%;
  color: #0c0058;
  display: inline-block;
}

.test-stopper .image img {
  max-width: 100%;
  height: auto;
}

.test-stopper :deep(.clue) {
  position: absolute;
  top: 40px;
  left: 40px;
  right: auto;
  max-width: 290px;
}

.test-stopper :deep(.clue.left) {
  left: 40px;
  right: auto;
}

.test-stopper :deep(.clue.right) {
  left: auto;
  right: 40px;
}

.test-stopper :deep(.clue.center) {
  top: 50%;
  margin-top: -100px;
}
</style>