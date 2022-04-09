import {acceptHMRUpdate, defineStore} from 'pinia';
import {Age} from '@/stores/user';

export interface IAnswer {
  id: string | number,
  title: string,
  value?: number,
  yesId?: number,
  noId?: number
}

export interface IGroup {
  id: string | number,
  title: string,
  items?: string[]
  text?: string,
  'sub-title'?: string,
  score?: number,
  answers?: number[] | {questionId: number, id: number}
}

export interface IQuestion {
  id?: string | number,
  title: string,
  group?: string | number,
  answers?: IAnswer[],
  type?: QuestionType,
  image?: string,
  male?: IAnswer[],
  female?: IAnswer[]
}

export interface ITest {
  code: string,
  title: string,
  age: Age,
  questions: IQuestion[],
  answers: IAnswer[],
  groups?: IGroup[],
  results?: any[]
}

export enum Step {
  NOT_STARTED,
  IN_PROGRESS,
  PAUSE,
  FINISHED
}

export enum QuestionType {
  INSTRUCTION = 'instruction',
}

export const useTest = defineStore({
  id: 'test',
  persist: true,
  state: () => ({
    current: '',
    step: Step.NOT_STARTED,
    currentQuestionNumber: 0,
    answers: [] as { answer: IAnswer, question: IQuestion }[],
    questionsCount: 0,
    result: {} as any,
    answersCount: 0
  }),
  getters: {},
  actions: {
    setResult(payload: any) {
      const isObject = (obj: any) => typeof obj === 'object' && obj !== null;
      if (!isObject(payload)) payload = {};
      this.result = payload;
    },
    setTest(payload: string) {
      this.current = payload;
    },
    setQuestionsCount(payload: number) {
      this.questionsCount = payload;
    },
    setStep(payload: Step) {
      this.step = payload;
    },
    addAnswer(payload: { answer: IAnswer, question: IQuestion }) {
      this.answers.push(payload);
    },
    nextQuestion() {
      this.currentQuestionNumber += 1;
    },
    incrementAnswersCount() {
      this.answersCount += 1;
    }
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTest, import.meta.hot));
}