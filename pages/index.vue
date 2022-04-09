<template lang="pug">
div(:class="{ 'hidden-test-section': !testStore.current }" class="planet")
  .background-1
  section.main-section
    .container
      .image: img(src="@/assets/images/main.svg" alt="Toys")
      .content
        .tag Интерактивный онлайн-тест
        .title Пройди тест и узнай о себе много нового
        .description
          p После прохождения теста - ты сможешь узнать о себе много интересного. Возможно ты даже определишься c будущей профессией...
          p: b Осторожно, результат может быть неожиданным!
        Button(@click.prevent="scrollTo(testStore.current ? 'test' : 'age')") Начать тест&nbsp;&nbsp;&nbsp;›
    .before.parallax
  section.reason-section#reason
    h2 Для чего нужно тестирование?
    .container
      .reason-items
        each val, key in {'1': 'Интересы', '2': 'Склонности', '3': 'Способности'}
          .reason-item
            .image: img(src=`@/assets/images/why-${key}.svg` alt=`${val}`)
            .title= val
            .description
              if key === '1'
                | В будущем <b>тебе нужно будет попробовать себя в разных видах деятельности</b> (спорте, литературе, искусстве, науке). <b>Тест поможет определиться</b> с выбором!
              if key === '2'
                | Одно дело — <b>интересоваться книгами о животных</b>, но совсем другое — находить удовольствие в ежедневной работе по уходу за ними. <b>А что интересно тебе?</b>
              if key === '3'
                | <b>Узнай свои личные качества</b> и способности. Это очень <b>важно</b> и <b>интересно</b>. От этого зависит твой потенциал и какого уровня ты сможешь достигнуть в будущем.
  AboutSection
  .background-2
  CoursesSection
    .before.parallax
  AgeSection#age
  .background-3
  section.test-section#test(v-if="testStore.current")
    .container
      h2 Давай скорее начинать
      TestCard
  .background-4
  ShareSection#share
  div(style="display: none")
    AgeAlertModal.age-alert-modal#age-alert
    SexModal.sex-modal#sex
    TestsModal.tests-modal#tests
    SuccessModal#success
</template>

<script lang="ts">
import Button from '@/components/basic/Button.vue';
import TestCard from '@/components/test/TestCard.vue';
import AboutSection from '@/components/main/AboutSection.vue';
import ShareSection from '@/components/main/ShareSection.vue';
import AgeSection from '@/components/main/AgeSection.vue';
import SexModal from '@/components/app/modals/SexModal.vue';
import TestsModal from '@/components/app/modals/TestsModal.vue';
import AgeAlertModal from '@/components/app/modals/AgeAlertModal.vue';
import {useUser} from '@/stores/user';
import {useTest} from '@/stores/test';
import {defineComponent} from 'vue';
import SuccessModal from '@/components/app/modals/SuccessModal.vue';
import CoursesSection from '~/components/main/CoursesSection.vue'

export default defineComponent({
  components: {
    CoursesSection,
    SuccessModal,
    Button,
    TestCard,
    AboutSection,
    ShareSection,
    AgeSection,
    SexModal,
    TestsModal,
    AgeAlertModal
  },
  methods: {
    scrollTo,
  },
  data: () => ({
    userStore: useUser(),
    testStore: useTest()
  }),
});
</script>

<style scoped>
.planet:before {
  content: '';
  background-image: url('@/assets/images/planet-1.svg');
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  width: 218px;
  height: 299px;
  z-index: 2;
}

@media screen and (max-width: 1745px) {
  .planet:before {
    display: none;
  }
}
</style>