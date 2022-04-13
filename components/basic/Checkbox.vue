<template lang="pug">
InputContainer
  input(
    type="checkbox"
    :id="id"
    :checked="modelValue"
    @change="$emit('update:modelValue', $event.target.checked)"
  )
  label(:for="id" :class="{ white }"): slot
</template>

<script lang="ts">
import InputContainer from '@/components/basic/InputContainer.vue';
import {defineComponent} from 'vue';

export default defineComponent({
  data: () => ({
    id: `checkbox_${Date.now()}`
  }),
  props: {
    modelValue: {type: Boolean, default: false},
    white: {type: Boolean, default: false},
  },
  components: {InputContainer}
});
</script>

<style scoped>
input[type="checkbox"] {
  display: none;
}

label {
  cursor: pointer;
  position: relative;
  font-size: 11px;
  line-height: 132.5%;
  color: #9a9a9a;
  padding-left: 40px;
  display: block;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

label :deep(a) {
  text-decoration: underline;
}

label :deep(a:hover) {
  text-decoration: none;
}

label:before {
  content: '';
  display: block;
  width: 24px;
  height: 24px;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(180deg, #ff9649 0%, #ff5c00 100%);
  box-shadow: 0 0 22px rgba(255, 107, 0, 0.4);
  border-radius: 4px;
}

label:after {
  content: '';
  position: absolute;
  display: none;
  width: 16px;
  height: 12px;
  top: 5px;
  left: 4px;
  background-image: url('@/assets/images/checked.svg');
  background-repeat: no-repeat;
}

input[type="checkbox"]:checked + label:after {
  display: block;
}
@media screen and (max-width: 550px) {
  .white {
    color: white;
  }
}
</style>