<template lang="pug">
.test-container
  TestInstruction(
    v-if="question.type === 'instruction'"
    :question="question"
    @next="$emit('answer', false)"
  )
  template(v-else)
    .question
      template(v-if="extra.test.code === 'B1'")
        .pre-title Любите ли вы? Нравится ли вам? Хотели ли вы?
      template(v-if="extra.test.code === 'C1'")
        .pre-title Насколько важным для Вас является каждое из следующих утверждений?
      template(v-if="extra.test.code === 'C3'")
        .pre-title Выбери 2 варианта ответа: тот который отражает твою точку зрения и тот, который тебе не нравится.
      div {{ questionText }}
    .question-image(v-if="extra.test.code === 'C4' && extra.questionImage")
      Image(:slug="extra.questionImage")
    .answers(v-if="answers.length && extra.test.code !== 'C1'" :class="{ [`answers-${extra.test.code}`]: true }")
      .answer(
        v-if="extra.test.code !== 'C3'"
        :class="{ active: answer.id === currentAnswer.id }"
        v-for="answer in answers"
        @click="currentAnswer = answer"
      )
        .status
        .answer-text {{ answerFormat(answer) }}
      .answer(
        v-if="extra.test.code === 'C3'"
        v-for="answer in answers"
      )
        .status.status-yes(:class="{ active: answer.id === currentAnswer.yesId }" @click="currentAnswer.yesId = answer.id"): Yes
        .status.status-no(:class="{ active: answer.id === currentAnswer.noId }" @click="currentAnswer.noId = answer.id"): No
        .answer-text {{ answerFormat(answer) }}
    .answers-slider(v-if="extra.test.code === 'C1'")
      ClientOnly
        component(:is="sliderComponent" v-model="sliderAnswer" :key="question.title")
    .buttons
      Button(outlined v-if="false") Назад
      a.pause(href="javascript:" @click="pause"): img(src="@/assets/images/pause.svg" alt="Пауза")
      Button(:disabled="isNextButtonDisabled" :click="next" arrow) Вперед
</template>

<script lang="ts">
import Button from '@/components/basic/Button.vue';
import TestInstruction from '@/components/test/TestInstruction.vue';
import {defineComponent} from 'vue';
import {Step, useTest} from '@/stores/test';
import scrollTo from '@/composables/scrollTo';
import {shallowRef} from 'vue';
import Yes from '@/components/icons/Yes.vue';
import No from '@/components/icons/No.vue';
import Image from '@/components/basic/Image.vue';

export default defineComponent({
  name: 'Question',
  props: {
    questionText: {type: String, default: ''},
    answers: {type: Array, default: []},
    answerFormat: {type: Function, default: (i: any) => i},
    extra: {type: Object, default: () => ({})},
    question: {type: Object, default: () => ({})}
  },
  data: () => ({
    testStore: useTest(),
    currentAnswer: {},
    sliderComponent: null,
    sliderAnswer: 1
  }),
  watch: {
    sliderAnswer: {
      handler(val) {
        // this.currentAnswer = {yesId: 1, noId: 1}
        if (this.extra.test.code === 'C1') {
          // @ts-ignore
          this.currentAnswer = this.answers.find(({id}) => Number(id) === Number(val));
        }
      },
      immediate: true
    }
  },
  async mounted() {
    if (this.extra.test.code === 'C1' && process.client) {
      // @ts-ignore
      this.sliderComponent = shallowRef((await import('@/components/basic/Slider.vue')).default);
    }
  },
  computed: {
    isNextButtonDisabled() {
      if (this.extra.test.code === 'C3') return !this.currentAnswer.yesId || !this.currentAnswer.noId;
      return !this.currentAnswer.id;
    }
  },
  methods: {
    next() {
      this.$emit('answer', this.currentAnswer);
      this.currentAnswer = {};
    },
    pause() {
      this.testStore.setStep(Step.PAUSE);
      // this.$nextTick(() => {
      //   scrollTo('test');
      // });
    }
  },
  components: {Button, TestInstruction, Yes, No, Image}
});
</script>

<style scoped>
.test-container {
  padding-top: 58px;
  max-width: 520px;
  margin: 0 auto;
}

.question {
  font-weight: bold;
  font-size: 28px;
  line-height: 125%;
  text-align: center;
  color: #0c0058;
  margin-bottom: 50px;
}

.answers .answer {
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  cursor: pointer;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.answers.answers-A2 .answer .answer-text {
  font-size: 44px;
  line-height: 125%;
  color: #0c0058;
  font-weight: bold;
}

.answers .answer .status {
  background-color: #fff;
  box-shadow: 0 0 22px rgba(28, 25, 88, 0.14);
  width: 48px;
  height: 48px;
  border-radius: 100%;
  flex-shrink: 0;
}

.answers .answer .status-yes,
.answers .answer .status-no {
  display: flex;
  align-items: center;
  justify-content: center;
}

.answers .answer .status-yes {
  margin-right: 15px;
}

.answers .answer .status-yes.active {
  background: radial-gradient(92.31% 92.31% at 19.93% 9.79%, #68af06 0%, #83d017 100%);
}

.answers .answer .status-no.active {
  background: radial-gradient(92.31% 92.31% at 19.93% 9.79%, #b94848 0%, #e86b6b 100%);
}

.answers .answer .status-yes.active :deep(svg path),
.answers .answer .status-no.active :deep(svg path) {
  fill: #fff;
}

.answers .answer .status-no {

}

.answers .answer.active .status {
  background-image: url('@/assets/images/checked.svg'), linear-gradient(180deg, #ff9649 0%, #ff5c00 100%);
  background-repeat: no-repeat, no-repeat;
  background-position: center, center;
  box-shadow: 0 0 22px rgba(255, 102, 12, 0.2);
}

.answers .answer .answer-text {
  line-height: 150%;
  color: #4e4a64;
  margin-left: 35px;
}

.buttons {
  padding-top: 37px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.buttons .btn {
  padding-top: 21px;
  padding-bottom: 21px;
}

.buttons .pause {
  margin-right: 42px;
}

.buttons .btn:first-child {
  /*margin-right: 45px;*/
}

.pre-title,
.pre-title {
  margin-bottom: 20px;
  font-size: 18px;
  line-height: 150%;
  color: #4e4a64;
  font-weight: normal;
}

.question-image {
  margin-bottom: 40px;
  text-align: center;
}

.question-image img {
  max-width: 100%;
}

@media screen and (max-width: 550px) {
  .buttons {
    padding-top: 10px;
  }

  .buttons .btn {
    padding: 15px 20px;
    font-size: 14px;
  }

  .test-container {
    padding-top: 30px;
  }

  .question {
    font-size: 20px;
    margin-bottom: 30px;
  }

  .answers .answer {
    margin-bottom: 20px;
  }

  .answers .answer .status {
    width: 24px;
    height: 24px;
  }

  .answers .answer .answer-text {
    margin-left: 15px;
  }
}
</style>