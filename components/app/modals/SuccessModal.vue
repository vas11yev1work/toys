<template lang="pug">
Modal
  template(#header) Отлично!
  template(#description) Подарок придёт тебе на почту
  .success-content
    img(src="@/assets/images/success-image.svg" alt="Toys")
    Button(:click="close") Продолжить
</template>

<script lang="ts">
import Modal from '@/components/app/modals/Modal.vue';
import Button from '@/components/basic/Button.vue';
import {defineComponent} from 'vue';
import addToCollection from '@/composables/addToCollection';
// @ts-ignore
import Fancybox from '@fancyapps/ui/dist/fancybox.mjs';

export default defineComponent({
  name: 'SuccessModal',
  methods: {
    close() {
      Fancybox.getInstance()?.close();
    }
  },
  components: {
    Modal,
    Button,
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