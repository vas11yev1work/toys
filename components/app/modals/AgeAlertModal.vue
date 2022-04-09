<template lang="pug">
Modal
  template(#header) Внимание!
  template(#description)
    | <br/>Вы уверены, что хотите изменить возрастную категорию?<br/>
    b Весь прогресс по тесту будет утрачен
  .age-alert-content
    Button(outlined :click="cancel") Отмена
    Button(:click="click" arrow) Продолжить
</template>

<script lang="ts">
import Modal from '@/components/app/modals/Modal.vue';
import Button from '@/components/basic/Button.vue';
import {useUser} from '@/stores/user';
import {useTest} from '@/stores/test';
// @ts-ignore
import Fancybox from '@fancyapps/ui/dist/fancybox.mjs';
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'AgeAlertModal',
  data: () => ({
    userStore: useUser(),
    testStore: useTest()
  }),
  components: {
    Modal,
    Button,
  },
  methods: {
    cancel() {
      Fancybox.getInstance()?.close();
    },
    click() {
      if (this.userStore.draftAge) this.userStore.setAge(this.userStore.draftAge);
      this.testStore.setTest('');
      nextStep(this, 'age');
    }
  }
})
</script>

<style scoped>
.age-alert-content {
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
}

.age-alert-content :deep(.btn) {
  padding-top: 17px;
  padding-bottom: 17px;
}

@media screen and (max-width: 550px) {
  .age-alert-content {
    flex-direction: column;
    align-items: center;
  }

  .age-alert-content :deep(.btn) {
    margin-bottom: 20px;
  }

  .age-alert-content :deep(.btn:last-child) {
    margin-bottom: 0;
  }
}
</style>