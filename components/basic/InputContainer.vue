<template lang="pug">
.input-container: slot
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'InputContainer'
});
</script>

<style scoped>
.input-container {
  margin-bottom: 20px;
  position: relative;
}
</style>