<template lang="pug">
InputContainer
  component(
    :is="textarea ? 'textarea' : 'input'"
    v-bind="$attrs"
    :value="modelValue"
    type="text"
    :class="{error}"
    @input="$emit('update:modelValue', $event.target.value)"
    autcomplete="off"
  )
  span.error-text(v-if="error") {{ error }}
</template>

<script lang="ts">
import InputContainer from '@/components/basic/InputContainer.vue';
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'TextField',
  props: {
    modelValue: {type: [String, Number], default: ''},
    textarea: {type: Boolean, default: false},
    error: {type: String, default: ''},
  },
  components: {InputContainer}
});
</script>

<style scoped>
input, textarea {
  background: #f2f2f7;
  border-radius: 18px;
  font-weight: 500;
  font-size: 16px;
  line-height: 175%;
  font-family: 'Montserrat', sans-serif;
  color: rgba(12, 0, 88, 0.61);
  padding: 15px 36px 17px;
  border: none;
  outline: none;
  width: 100%;
  resize: none;
  box-shadow: none;
  -webkit-box-shadow: none;
}

.error {
  background: #ee9b9b;
  color: #fff;
}

*:focus {
  outline: none;
  box-shadow: none;
  -webkit-box-shadow: none;
}

::placeholder {
  color: rgba(12, 0, 88, 0.25);
  opacity: 1;
}

:-ms-input-placeholder {
  color: rgba(12, 0, 88, 0.25);
}

::-ms-input-placeholder {
  color: rgba(12, 0, 88, 0.25);
}

.error::placeholder {
  color: #fff;
  opacity: 1;
}

.error:-ms-input-placeholder {
  color: #fff;
}

.error::-ms-input-placeholder {
  color: #fff;
}

.error-text {
  font-size: 10px;
  position: absolute;
  bottom: -20px;
  left: 16px;
  line-height: 20px;
}
</style>