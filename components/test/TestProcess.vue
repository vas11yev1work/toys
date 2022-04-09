<template lang="pug">
div
  Progress
  Question(
    v-if="test.code"
    :key="question.id || question.title"
    @answer="(answer) => handleAnswer(answer)"
    :question-text="questionText"
    :question="question"
    :answers="answers"
    :answer-format="answerFormat"
    :extra="extra"
  )
</template>

<script lang="ts">
import Progress from '@/components/test/Progress.vue';
import Question from '@/components/test/Question.vue';
import {useTest, Step, ITest, IAnswer, IQuestion, IGroup} from '@/stores/test';
import getTest from '@/composables/getTest';
import {defineComponent} from 'vue';
import {useUser} from '@/stores/user';

export default defineComponent({
  name: 'TestProcess',
  data: () => ({
    testStore: useTest(),
    questionText: '',
    question: {} as IQuestion,
    answers: [] as IAnswer[],
    answerFormat: (i: IAnswer) => i.title,
    questionsCount: 0,
    calcResult: () => {},
    Step,
    extra: {
      test: {} as ITest,
      questionImage: ''
    },
    test: {} as ITest,
    userStore: useUser()
  }),
  mounted(): void {
    this.init();
  },
  methods: {
    async init(): Promise<void> {
      this.test = await getTest();
      // this.test.questions = this.test.questions.slice(120); // todo remove later
      // this.test.questions = [this.test.questions[0], this.test.questions[1], this.test.questions[2], this.test.questions[3], this.test.questions[4]]; // todo remove later
      this.extra.test = this.test;
      // @ts-ignore
      if (this.test.code && typeof this[this.test.code] === 'function') this[this.test.code]();
    },
    handleAnswer(answer: IAnswer) {
      // @ts-ignore
      if (answer) this.testStore.addAnswer({answer, question: {id: this.question.id, group: this.question.group}});
      if (this.testStore.currentQuestionNumber + 1 >= this.test.questions.length) {
        this.calcResult();
        this.testStore.setStep(Step.FINISHED);
      } else {
        if (answer) this.testStore.incrementAnswersCount();
        this.testStore.nextQuestion();
        this.init();
      }
    },
    defaultTest() {
      const questions = this.test.questions;
      this.question = questions[this.testStore.currentQuestionNumber];
      this.questionText = this.question.title;
      this.answers = this.test.answers;
      this.questionsCount = this.getQuestionsCount(questions);
      this.calcResult = () => {
        const groupScores = this.testStore.answers.reduce((acc, {answer, question}) => {
          if (question.group) {
            if (!acc[question.group]) acc[question.group] = 0;
            acc[question.group] += answer.value;
          }
          return acc;
        }, {} as any);
        const groupId = Object.keys(groupScores).reduce((a, b) => groupScores[a] > groupScores[b] ? a : b);
        const group = this.test.groups?.find(({id}) => Number(id) === Number(groupId));
        this.testStore.setResult(group);
      }
    },
    /*
    Необходимо определить такие переменные, как:
    - question: object
    - questionText: string
    - answers: array of objects
    - answerFormat: function
    - questionsCount: number
    - calcResult: function (сделать setResult)
     */
    A1() {
      this.defaultTest();
      this.questionText = `Мне нравится ${this.question.title}`;
    },
    A2() {
      this.defaultTest();
    },
    A3() {
      this.defaultTest();
      this.questionText = this.questionText || 'Выбери подходящий вариант';
      // @ts-ignore
      if (this.userStore.sex && this.question[this.userStore.sex]) this.answers = this.question[this.userStore.sex];
      this.calcResult = () => {
        this.test.groups?.map((group) => {
          group.score = this.testStore.answers.reduce((acc, {answer, question}) => {
            const key = (Number(question.group) - 1) * 60 + Number(question.id);
            // @ts-ignore
            if (group.answers.find((_answer) => _answer.questionId === key && answer.id === _answer.id)) acc += 1;
            return acc;
          }, 0);
          return group;
        }).sort((a, b) => Number(b.score) - Number(a.score));
        console.log(this.test.groups);
        this.testStore.setResult({
          // @ts-ignore
          highTitle: this.test.groups[0].title,
          // @ts-ignore
          highText: this.test.groups[0].text,
          // @ts-ignore
          titleLess: this.test.groups[11].title,
          // @ts-ignore
          textLess: this.test.groups[11].text
        });
      }
    },
    B1() {
      this.defaultTest();
    },
    B2() {
      this.defaultTest();
      if (this.question.answers) this.answers = this.question.answers;
      this.calcResult = () => {
        this.test.groups?.map((group) => {
          group.score = this.testStore.answers.reduce((acc, {answer, question}) => {
            const key = Number(question.id);
            // @ts-ignore
            if (group.answers.find((_answer) => _answer.questionId === key && answer.id === _answer.id)) acc += 1;
            return acc;
          }, 0);
          return group;
        }).sort((a, b) => Number(b.score) - Number(a.score));
        console.log(this.test.groups);
        this.testStore.setResult({
          // @ts-ignore
          highTitle: this.test.groups[0].title,
          // @ts-ignore
          highText: this.test.groups[0].textPlus,
          // @ts-ignore
          titleLess: this.test.groups[15].title,
          // @ts-ignore
          textLess: this.test.groups[15].textMinus
        });
      }
    },
    C1() {
      this.defaultTest();
    },
    C2() {
      const questions = this.test.questions;
      this.question = questions[this.testStore.currentQuestionNumber];
      this.questionText = this.question.title;
      if (this.question.answers) this.answers = this.question.answers;
      this.answerFormat = (i) => i.title;
      this.questionsCount = this.getQuestionsCount(questions);
      this.calcResult = () => {
        const result = this.test.results?.find(({x, y}) =>
            Number(x) === Number(this.testStore.answers[1].answer.id) &&
            Number(y) === Number(this.testStore.answers[0].answer.id)
        );
        this.testStore.setResult(result);
      }
    },
    C3() {
      this.defaultTest();
      if (this.question.answers) this.answers = this.question.answers;
      this.calcResult = () => {
        this.test.groups?.map((group) => {
          group.score = 30 + this.testStore.answers.reduce((acc, {answer, question}) => {
            if (group.answers) {
              const key = group.answers[Number(question.id)];
              if (key === answer.yesId) acc += 1;
              if (key === answer.noId) acc -= 1;
            }
            return acc;
          }, 0);
          return group;
        }, {});
        const maxGroup = this.test.groups?.sort((a, b) => Number(b.score) - Number(a.score))[0] as IGroup;
        this.testStore.setResult({title: maxGroup.title || '', text: maxGroup.text || ''});
      }
    },
    C4() {
      const questions = this.test.questions;
      this.question = questions[this.testStore.currentQuestionNumber];
      if (this.question.group === 2) this.questionText = 'Найдите лишнее слово, не подходящее по смыслу к четырем другим из пяти названных';
      else if (this.question.group === 7) this.questionText = this.question.id + '. Найдите подходящую фигуру';
      else if (this.question.group === 8) this.questionText = this.question.id + '. Выберите подходящий кубик';
      else this.questionText = this.question.title;
      if (this.question.answers) this.answers = this.question.answers;
      if (this.question.group === 7 || this.question.group === 8) {
        this.answers = [{id: 1, title: 'а'}, {id: 2, title: 'б'}, {id: 3, title: 'в'}, {id: 4, title: 'г'}, {id: 5, title: 'д'}];
        this.extra.questionImage = '' + this.question.image;
      }
      this.answerFormat = (i) => i.title;
      this.questionsCount = this.getQuestionsCount(questions);
      this.calcResult = () => {
        const keyArr = ['',
          '1г, 2в, 3д, 4д, 5в, 6а, 7г, 8б, 9д, 10в, 11б, 12д, 13в, 14а, 15г, 16а, 17в, 18б, 19д, 20г',
          '21д, 22б, 23в 24г, 25б, 26г, 27в, 28г, 29д, 30в, 31 д, 32г, 33а, 34в, 35д, 36в, 37а, 38г, 39б, 40б',
          '41в, 42д, 43б, 44д, 45а, 46г, 47б, 48в, 49б, 50г, 51г, 52б, 53б, 54б, 55г, 56д, 57в, 58в, 59б, 60г',
          '61а, 62б, 63б,64а,65а,66б,67а,68а,69б,70а,71б,72а,73б,74а,75б,76а',
          '77а, 78б, 79а, 80а, 81а, 82б, 83а, 84а, 85б, 86б, 87б, 88б, 89а, 90а, 91а, 92б, 93а, 94а, 95а, 96а',
          '97б, 98б, 99а, 100б, 101б, 102б, 103б, 104а, 105а, 106б, 107а, 108а, 109а, 110а, 111а, 112а, 113а, 114а, 115а, 116а',
          '117б, 118г, 119в, 120в, 121д, 122г, 123 д, 124а, 125а, 126Б, 127д, 128в, 129д, 130г, 131в, 132а, 133г, 134г, 135б, 136в',
          '137б, 138б, 139в, 140а, 141г, 142а, 143б, 144д, 145в, 146г, 147а, 148б, 149д, 150г, 151в, 152б, 153д, 154а, 155в, 156д',
        ];
        const trim = (i: string) => i.trim();
        const isRightAnswer = (questionId: number, answerId: number, groupId: number) => {
          const keyGroup = keyArr[groupId].split(',').map(trim);
          const answerLetter = ['', 'а', 'б', 'в', 'г', 'д'][answerId];
          return !!keyGroup.find((key) => key === `${questionId}${answerLetter}`);
        }
        const score = this.testStore.answers.reduce((acc, {answer, question}) => {
          acc += isRightAnswer(Number(question.id), Number(answer.id), Number(question.group)) ? 1 : 0;
          return acc;
        }, 0);
        const getText = (score: number) => {
          if (score < 70) return 'Уровень интеллекта очень низкий';
          if (score < 85) return 'Низкий уровень интеллекта';
          if (score < 115) return 'Средний уровень интеллекта';
          if (score < 130) return 'Высокий уровень интеллекта';
          return 'Очень высокий уровень';
        }
        this.testStore.setResult({title: `IQ ${score}`, text: getText(score)});
      }
    },
    getQuestionsCount(questions: IQuestion[]) {
      return questions.filter(({id}) => String(id)?.[0] !== '_').length;
    }
  },
  watch: {
    questionsCount(val) {
      this.testStore.setQuestionsCount(val);
    }
  },
  components: {
    Progress,
    Question
  }
})
</script>