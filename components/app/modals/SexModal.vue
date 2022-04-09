<template lang="pug">
Modal
  template(#header)
    .text-center Выбери свой пол
  .sex-chooser
    .sex-item(:class="{ active: sex === Sex.Female }" @click="sex = Sex.Female")
      img(src="@/assets/images/female.svg" alt="Девочка")
    .sex-item(:class="{ active: sex === Sex.Male }" @click="sex = Sex.Male")
      img(src="@/assets/images/male.svg" alt="Мальчик")
  .text-center
    Button(:click="submit" :disabled="!sex" arrow) Выбрать тест
</template>

<script lang="ts">
import Modal from '@/components/app/modals/Modal.vue';
import Button from '@/components/basic/Button.vue';
import {Sex} from '@/stores/user';
import {useUser} from '@/stores/user';
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'SexModal',
  data: () => ({
    Sex,
    sex: undefined as undefined | Sex,
    userStore: useUser()
  }),
  components: {
    Modal,
    Button,
  },
  methods: {
    submit() {
      if (this.sex) this.userStore.setSex(this.sex);
      nextStep(this, 'sex');
    }
  }
});
</script>

<style scoped>
.sex-chooser {
  display: flex;
  padding-top: 118px;
  justify-content: center;
  padding-bottom: 82px;
}

.sex-item {
  background: #fff;
  box-shadow: 0 0 53px rgba(28, 25, 88, 0.11);
  border-radius: 51px;
  width: 294px;
  height: 204px;
  position: relative;
  flex-shrink: 0;
  cursor: pointer;
}

.sex-item.active {
  background: linear-gradient(180deg, #ff9649 0%, #ff5c00 100%), #ff5c00;
}

.sex-item:first-child {
  margin-right: 50px;
}

.sex-item img {
  position: absolute;
  bottom: 0;
  left: 50%;
}

.sex-item:nth-child(1) img {
  margin-left: -113px;
}

.sex-item:nth-child(2) img {
  margin-left: -108px;
}

@media screen and (max-width: 550px) {
  .sex-chooser {
    flex-direction: column;
    align-items: center;
    padding-top: 90px;
    padding-bottom: 40px;
  }

  .sex-item:first-child {
    margin-right: 0;
    margin-bottom: 100px;
  }
}
</style>