<template lang="pug">
Modal
  template(#header) {{ messages.header }}
  template(#description)
    div(v-html="messages.description")
  .success-content(v-if="success")
    img(src="@/assets/images/success-image.svg" alt="Toys")
    Button(:click="close") Продолжить
  form(autocomplete="off" v-else)
    TextField(placeholder="Как тебя зовут?" v-model="form.name" :error="errors.name" @focus="focus('name')")
    TextField(placeholder="Телефон" v-model="form.phone" :error="errors.phone" @focus="focus('phone')")
    TextField(v-model="form.email" placeholder="Твоя электронная почта" :error="errors.email" @focus="focus('email')")
    TextField(placeholder="Напиши с чем тебе помочь?" textarea v-model="form.message")
    InputContainer: Button(arrow :click="submit") Мне нужна помощь
    Checkbox(v-model="form.agreement")
      | Нажимая на кнопку, я принимаю <a href="/policy">соглашение</a><br/> на обработку моих персональных данных.
</template>

<script lang="ts">
import Modal from '@/components/app/modals/Modal.vue';
import Button from '@/components/basic/Button.vue';
import TextField from '@/components/basic/TextField.vue';
import Checkbox from '@/components/basic/Checkbox.vue';
import InputContainer from '@/components/basic/InputContainer.vue';
import {defineComponent} from 'vue';
import addToCollection from '@/composables/addToCollection';
// @ts-ignore
import Fancybox from '@fancyapps/ui/dist/fancybox.mjs';

export default defineComponent({
  name: 'HelpModal',
  data: () => ({
    form: {
      name: '',
      phone: '',
      email: '',
      message: '',
      agreement: true
    },
    labels: {
      name: 'Имя',
      phone: 'Телефон',
      email: 'E-mail',
      message: 'Сообщение'
    },
    errors: {
      email: '',
      name: '',
      phone: ''
    },
    success: false
  }),
  methods: {
    isEmailValid(email: string) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
    validate() {
      if (!this.form.email) this.errors.email = 'Это поле необходимо заполнить';
      else if (!this.isEmailValid(this.form.email)) this.errors.email = 'Введите корректный e-mail';

      if (!this.form.name) this.errors.name = 'Это поле необходимо заполнить';

      if (!this.form.phone) this.errors.phone = 'Это поле необходимо заполнить';
    },
    isFormValid() {
      // @ts-ignore
      return !(Object.keys(this.errors).find((key) => this.errors[key] !== ''));
    },
    async submit() {
      this.validate();
      if (!this.isFormValid()) return false;
      await addToCollection('mail', {
        subject: 'На сайте была заполнена форма «Нужна помощь»',
        data: this.form,
        labels: this.labels
      });
      this.success = true;
    },
    focus(field: 'email' | 'name' | 'phone') {
      this.errors[field] = '';
    },
    close() {
      Fancybox.getInstance()?.close();
    }
  },
  computed: {
    messages() {
      return this.success ? {
        header: 'Отлично!',
        description: 'Мы позвоним тебе, чтобы помочь или отправим сообщение на твою почту.'
      } : {
        header: 'Нужна помощь?',
        description: ''
      }
    }
  },
  components: {
    Modal,
    Button,
    TextField,
    Checkbox,
    InputContainer
  }
})
</script>

<style scoped>
.success-content {
  text-align: center;
  padding-top: 25px;
}

.success-content img {
  max-width: 296px;
  margin-bottom: 45px;
  display: inline-block;
}
</style>