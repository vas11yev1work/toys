<template lang="pug">
.clue
  .title
    Image(:slug="helper.image")
    span {{ (caption || helper.name) }}
  .text
    template(v-if="text") {{ text[userStore.sex] }}
    slot
</template>

<script lang="ts">
import {useUser, Sex} from '@/stores/user';
import Image from '@/components/basic/Image.vue';
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'TestClue',
  props: {
    caption: {type: String, default: ''},
    text: {type: [Object, Boolean], default: false}
  },
  computed: {
    helper() {
      return this.userStore.sex === Sex.Female
          ? {name: 'Диана', image: 'diana-small.svg'}
          : {name: 'Барри', image: 'barri-small.svg'};
    }
  },
  data: () => ({
    userStore: useUser()
  }),
  components: {Image}
});
</script>

<style scoped>
.clue {
  background: #fff;
  box-shadow: 0 0 22px rgba(28, 25, 88, 0.06);
  border-radius: 37px;
  padding: 20px 20px 26px;
}

.clue .title {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  height: 53px;
}

.clue .title img {
  margin-right: 28px;
}

.clue .title span {
  font-weight: bold;
  font-size: 20px;
  line-height: 100%;
  color: #0c0058;
}

.clue .text {
  line-height: 165%;
  color: #4e4a64;
  text-align: left;
}

@media screen and (max-width: 550px) {
  .clue {
    padding-bottom: 30px;
  }
}
</style>