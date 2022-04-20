<template lang="pug">
ul.nav
  li: a(href="#") О нас
  li: nuxt-link(to="/courses") Курсы
  li: a(href="#") Наши эксперты
  li: a(href="#") Стоимость
</template>

<script lang="ts">
import {useTest} from '@/stores/test';
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'Navigation',
  methods: {scrollTo},
  data: () => ({
    testStore: useTest()
  })
});
</script>

<style>
.nav li a {
  font-weight: 600;
  white-space: nowrap;
}
</style>