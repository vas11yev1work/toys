import {acceptHMRUpdate, defineStore} from 'pinia';

export enum Sex {
  Male = 'male',
  Female = 'female'
}

export enum Age {
  A = '8-12',
  B = '12-14',
  C = '14+'
}

export interface User {
  sex?: Sex,
  age?: Age
  draftAge?: Age
}

export const useUser = defineStore({
  id: 'user',
  persist: true,
  state: () => ({
    sex: undefined,
    age: undefined,
    draftAge: undefined
  }) as User,
  getters: {},
  actions: {
    setSex(payload: Sex) {
      this.sex = payload;
    },
    setAge(payload: Age) {
      this.age = payload;
    },
    presetAge(payload: Age) {
      this.draftAge = payload;
    }
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUser, import.meta.hot));
}