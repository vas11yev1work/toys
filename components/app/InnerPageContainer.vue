<template lang="pug">
.inner-page-container: .container: slot
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'InnerPageContainer'
});
</script>