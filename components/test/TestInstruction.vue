<template lang="pug">
.test-instruction
  .title {{ question.title }}
  .description(v-html="question.text")
  .text-center
    Button(@click="$emit('next')" arrow) Продолжить
</template>

<script lang="ts">
import Button from '@/components/basic/Button.vue';
import {useTest, Step} from '@/stores/test';
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'TestInstruction',
  data: () => ({
    testStore: useTest(),
    Step
  }),
  props: {
    question: {type: Object, default: () => ({})}
  },
  components: {Button}
});
</script>

<style scoped>
.test-instruction {
  line-height: 180%;
  color: #4e4a64;
}

.description {
  margin-bottom: 60px;
}

.description :deep(img) {
  max-width: 100%;
}

.title {
  font-weight: bold;
  font-size: 28px;
  line-height: 125%;
  text-align: center;
  color: #0c0058;
  margin-bottom: 50px;
}
</style>