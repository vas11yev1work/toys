<template lang="pug">
.finish-container
  .results
    .title
      template(v-if="testStore.result.title") Твой результат: <span>{{ testStore.result.title }}!</span>
      template(v-else) Тест успешно пройден!
    .description
      template(v-if="testStore.current === 'A1'")
        p Ты можешь быть успешен в таких профессиях, как:
        ul: li(v-for="item in testStore.result.items") {{ item }}
      template(v-if="testStore.current === 'A2'")
        p {{ testStore.result.text }}
      template(v-if="testStore.current === 'A3' || testStore.current === 'B2'")
        h3 Доминирующий фактор: {{ testStore.result.highTitle }}
        p {{ testStore.result.highText }}
        h3 Минимальный фактор: {{ testStore.result.titleLess }}
        p {{ testStore.result.textLess }}
      template(v-if="testStore.current === 'C1'")
        p: i {{ testStore.result['sub-title'] }}
        div(v-html="testStore.result.text")
      template(v-if="testStore.current === 'C2'")
        p <b>Ты можешь быть успешен</b> в таких профессиях, как:
        ul: li(v-for="item in testStore.result.items") {{ item }}
        br
        p Если твоя цель – своевременный и точный выбор профессии с учетом своих возможностей, требований профессии и рынка труда, <b>задай себе следующие вопросы:</b>
        ul
          li Каким должно быть содержание профессии, чтобы интересно было работать?
          li Есть ли у меня профессионально важные качества для этой работы?
          li Какое образование нужно для этой профессии?
          li На какой уровень образования я могу рассчитывать?
          li За какую минимальную заработную плату я могу работать?
          li Какой образ жизни я хочу вести – напряженный или свободный?
          li Хочу ли я работать рядом с домом, или мне это безразлично?
      template(v-if="testStore.current === 'C3'")
        p {{ testStore.result.text }}
      template(v-if="testStore.current === 'C4'")
        p: i {{ testStore.result.text }}
  .present
    .title Забери свой <span>подарок</span>:
    .description Подарок будет ждать тебя <b>на твоей электронной почте:</b>
    form.present-form
      TextField(placeholder="Твоя электронная почта" ref="email" :error="errors.email" v-model="email" @focus="errors.email = ''")
      Button(class="submit" :click="submit")
  Share(
    :image="'/assets/images/' + test.image"
    :title="test.title"
    :description="shareDescription"
  )
  Button(data-fancybox href="#tests" arrow) Пройти другой тест
</template>

<script lang="ts">
import Button from '@/components/basic/Button.vue';
import TextField from '@/components/basic/TextField.vue';
import {ITest, useTest} from '@/stores/test';
import {defineComponent} from 'vue';
import Share from '@/components/app/Share.vue';
import getTest from '~/composables/getTest';
import {Age, Sex, useUser} from '@/stores/user';
// @ts-ignore
import emitter from 'tiny-emitter/instance.js';
// @ts-ignore
import Fancybox from '@fancyapps/ui/dist/fancybox.mjs';

export default defineComponent({
  name: 'TestFinish',
  components: {Share, TextField, Button},
  data: () => ({
    testStore: useTest(),
    test: {} as ITest,
    userStore: useUser(),
    email: '',
    errors: {
      email: ''
    }
  }),
  async created() {
    this.test = await getTest();
    emitter.on('focus-finish-email', () => {
      this.focusEmail();
    });
  },
  methods: {
    isEmailValid(email: string) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
    focusEmail() {
      (this.$refs.email as any).$el.children[0].focus();
    },
    async submit() {
      if (!this.email) this.errors.email = 'Это поле необходимо заполнить';
      else if (!this.isEmailValid(this.email)) this.errors.email = 'Введите корректный e-mail';
      if (this.errors.email) return false;
      let result = this.testStore.result.title || 'Тест пройден';
      if (this.testStore.current === 'C2') {
        result = this.testStore.result.items.join(', ');
      }
      await addToCollection('mail', {
        subject: `На сайте был пройден тест «${this.test.title}»`,
        data: {
          sex: this.userStore.sex === Sex.Male ? 'мальчик' : 'девочка',
          // @ts-ignore
          age: Age[this.userStore.age],
          test: this.test.title,
          result,
          email: this.email
        },
        labels: {
          sex: 'Пол',
          age: 'Возраст',
          email: 'E-mail',
          test: 'Тест',
          result: 'Результат'
        }
      });
      await addToCollection('mail', {
        subject: `Вы прошли тест тест «${this.test.title}»`,
        data: {
          test: this.test.title,
          result,
          to: this.email
        },
        labels: {
          test: 'Тест',
          result: 'Результат'
        }
      });
      Fancybox.show([{src: '#success'}]);
    }
  },
  computed: {
    shareDescription() {
      const genderWord = this.userStore.sex === Sex.Female ? 'прошла' : 'прошел';
      const start = `Я успешно ${genderWord} этот тест.`;
      const end = 'Попробуй и ты!';
      if (this.testStore.result.title) return `${start} Мой результат: ${this.testStore.result.title}! ${end}`;
      return `${start} ${end}`;
    }
  }
});
</script>

<style scoped>
.finish-container {
  padding-top: 30px;
  line-height: 180%;
  color: #4e4a64;
  padding-left: 44px;
  padding-right: 44px;
}

.title {
  font-weight: bold;
  font-size: 22px;
  line-height: 130%;
  color: #0c0058;
  margin-bottom: 25px;
}

.title span {
  color: #fe6205;
}

.description p {
  margin-bottom: 25px;
}

.description p:last-child {
  margin-bottom: 0;
}

.present .description {
  margin-bottom: 15px;
}

.results, .present, .share {
  margin-bottom: 50px;
}

:deep(input) {
  background-color: #fff;
  border: 2px solid #fe6205;
}

.present-form {
  display: block;
  max-width: 430px;
  position: relative;
}

.present-form .submit {
  position: absolute;
  width: 44px;
  height: 44px;
  display: block;
  right: 10px;
  top: 10px;
  background-image: url('@/assets/images/arrow-right.svg'), linear-gradient(180deg, #ff9649 0%, #ff5c00 100%);
  border-radius: 11px;
  cursor: pointer;
  background-position: center, center;
  background-repeat: no-repeat, no-repeat;
  padding: 0;
}

.present-form .submit.loading {
  background-image: linear-gradient(180deg, #ff9649 0%, #ff5c00 100%);
}

.present-form .submit.btn :deep(svg.preloader) {
  margin-left: -11px;
}

.finish-container .description ul li {
  padding-left: 20px;
  margin-bottom: 10px;
  position: relative;
}

.finish-container .description ul li:before {
  content: '';
  display: block;
  width: 6px;
  position: absolute;
  height: 6px;
  background-color: #fe6205;
  border-radius: 100%;
  top: 50%;
  margin-top: -3px;
  left: 0;
}

@media screen and (max-width: 550px) {
  .finish-container {
    padding-left: 10px;
    padding-right: 10px;
  }

  .btn {
    padding: 15px 20px;
    font-size: 14px;
  }

  .results, .present, .share {
    margin-bottom: 30px;
  }
}
</style>