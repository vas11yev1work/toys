<template>
  <div class="free-banner">
    <h3>Попробуй <b>бесплатное <br> пробное</b> занятие !</h3>
    <p class="info-text">
      Это будет <b>увлекательное путешествие</b>, <br> мы уверены - <b>ты захочешь продолжить!</b>
    </p>
    <form autocomplete="off">
      <div class="fields">
        <TextField class="text-field" v-model="name" placeholder="Как тебя зовут?" />
        <TextField class="text-field" v-model="phone" placeholder="+7 (999) 999 - 99 - 99" />
        <TextField class="text-field" v-model="email" placeholder="Твоя электронная почта" />
      </div>
      <Button style="margin-bottom: 13px;">Хочу на пробное занятие&nbsp;&nbsp;&nbsp;›</Button>
      <Checkbox v-model="agreement">
        Нажимая на кнопку, я принимаю <a href="/policy">соглашение</a><br/> на обработку моих персональных данных.
      </Checkbox>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import TextField from '~/components/basic/TextField.vue'
import Button from '~/components/basic/Button.vue'
import Checkbox from '~/components/basic/Checkbox.vue'

export default defineComponent({
  components: { Checkbox, Button, TextField },
  setup() {
    const name = ref('');
    const phone = ref('');
    const email = ref('');
    const agreement = ref(true);

    return { name, phone, email, agreement }
  }
})
</script>

<style lang="scss" scoped>
.free-banner {
  background-image: url('@/assets/images/free-banner.svg');
  padding: 60px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50px;
  h3 {
    font-weight: 600;
    font-size: 36px;
    line-height: 120%;
    margin-bottom: 20px;
    margin-top: 0;
    b {
      font-weight: 700;
    }
  }
  form {
    margin-top: 30px;
    .fields {
      display: flex;
    }
    .text-field {
      max-width: 245px;
      margin-right: 25px;
      width: 100%;
      &:last-child {
        max-width: 281px;
        margin-right: 0;
      }
    }
  }
}
</style>