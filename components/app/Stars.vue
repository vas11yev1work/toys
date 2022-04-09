<template lang="pug">
.star(
  v-for="star in stars"
  :class="{active}"
  :style="{ left: `${star.left}px`, top: `${star.top}px`, width: `${star.size}px`, height: `${star.size}px` }"
)
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'Stars',
  data: () => ({
    stars: [] as { size: number, top: number, left: number }[],
    active: false
  }),
  watch: {
    $route() {
      this.setStars();
    },
  },
  methods: {
    setStars() {
      const random = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min);
      this.active = false;
      this.stars = [];
      setTimeout(() => {
        const starsCount = Math.round(document.body.scrollHeight * window.innerWidth / 500000 * 1.5);
        for (let i = 0; i <= starsCount; i++) {
          this.stars.push({size: random(2, 6), top: random(0, document.body.scrollHeight), left: random(0, window.innerWidth)});
        }
      }, 800);
      setTimeout(() => {
        this.active = true;
      }, 900);
    }
  },
  mounted() {
    window.addEventListener('resize', this.setStars);
    this.setStars();
  },
  unmounted() {
    window.removeEventListener('resize', this.setStars);
  }
});
</script>

<style scoped>
.star {
  background: #fff;
  filter: blur(2px);
  position: absolute;
  z-index: 1;
  opacity: 0;
  transition: opacity .3s ease-in-out;
}

.star.active {
  opacity: 1;
}

.star:before {
  content: '';
  background: linear-gradient(180deg, #e7d1be 0%, #dca278 100%);
  box-shadow: 0 0 67px #fff;
  filter: blur(6px);
  width: calc(100% * 2);
  height: calc(100% * 2);
  display: block;
  position: absolute;
  top: -3px;
  left: -3px;
}
</style>