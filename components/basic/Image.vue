<template lang="pug">
img(v-if="chosenImageSource" :src="chosenImageSource" alt="Toys")
</template>

<script lang="ts">
import {defineComponent, onMounted, ref} from 'vue';

export default defineComponent({
  props: {
    slug: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    // @ts-ignore
    const allImages = import.meta.glob('../../assets/images/*');
    let chosenImageSource = ref('');

    onMounted(() => {
      allImages[`../../assets/images/${props.slug}`]().then((mod) => {
        chosenImageSource.value = mod.default;
      });
    });

    return {chosenImageSource};
  },
});
</script>
