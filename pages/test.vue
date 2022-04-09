<template>
  <div>
    user:
    <pre>{{ user.$state }}</pre>
    tests:
    <pre>{{ tests }}</pre>
    <br>
    user:
    <pre>{{ user }}</pre>
    <input type="text" placeholder="email" v-model="email">
    <input type="text" placeholder="password" v-model="password">
    <button @click="click">auth</button>
  </div>
</template>

<script>
import {sendSignInLinkToEmail} from 'firebase/auth';

export default {
  data: () => ({
    email: 'aniki515151@gmail.com',
    password: '123456'
  }),
  methods: {
    increment() {
      // this.counter.increment();
    },
    click() {
      const actionCodeSettings = {
        url: 'http://localhost:3000/', // на эту страницу перебрасывается пользователь после авторизации по ссылке в email'е
        handleCodeInApp: true,
        // dynamicLinkDomain: 'example.page.link'
      };

      sendSignInLinkToEmail(this.auth, this.email, actionCodeSettings)
          .then((e) => {
            console.log('e', e);
          })
          .catch((error) => {
            console.log('error', error);
          });
    }
  }
}
</script>

<script setup>
import useCollection from '../composables/useCollection';
import {useUser as useUserStore} from '~/stores/user';

const auth = useState('auth');
const tests = useCollection('tests');
// const user = useUser();
const user = useUserStore();
</script>