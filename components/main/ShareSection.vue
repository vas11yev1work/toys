<template lang="pug">
section.share-section
  .container
    .content
      h2 Расскажи всем об этом тесте
      .description Простые тесты для ответов на важные вопросы
      .accordion
        .accordion-item(
          @click="activeIndex = index"
          :class="{ active: index === activeIndex }"
          v-for="(item, index) in items"
        )
         .accordion-title {{ item.title }}
         .accordion-text {{ item.text }}
  .after.parallax
</template>

<script lang="ts">
import items from '@/assets/data/faq.json';
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'ShareSection',
  data: () => ({
    items,
    activeIndex: 0
  })
});
</script>

<style scoped>
.share-section {
  padding-top: 20px;
  padding-bottom: 100px;
  background-color: #1e2267;
  position: relative;
}

.share-section:before {
  content: '';
  background-image: url('@/assets/images/asteroid-4.svg');
  display: block;
  position: absolute;
  bottom: -313px;
  right: 0;
  width: 253px;
  height: 669px;
}

.share-section .after {
  content: '';
  background-image: url('@/assets/images/asteroid-5.svg');
  display: block;
  position: absolute;
  top: 100px;
  right: 5px;
  width: 107px;
  height: 107px;
}

.share-section .container {
  display: flex;
  justify-content: flex-end;
}

.share-section .content {
  max-width: 750px;
}

.share-section h2 {
  color: #fff;
  text-align: left;
  margin-bottom: 15px;
}

.share-section .description {
  color: #fff;
  margin-bottom: 50px;
  max-width: 520px;
  line-height: 165%;
  letter-spacing: 0.08em;
}

.share-section .accordion {
  background: #fff;
  border-radius: 30px;
  width: 100%;
  z-index: 2;
  position: relative;
}

.accordion {
  padding-left: 50px;
  padding-right: 65px;
  padding-bottom: 10px;
}

.accordion .accordion-item {
  padding-top: 40px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.accordion .accordion-item:last-child {
  border-bottom: none;
}

.accordion-title {
  font-weight: bold;
  font-size: 22px;
  line-height: 118%;
  color: #0c0058;
  cursor: pointer;
  padding-bottom: 20px;
  position: relative;
}

.accordion-title:before {
  content: '';
  display: block;
  width: 17px;
  height: 10px;
  background-image: url('@/assets/images/arrow.svg');
  position: absolute;
  top: 50%;
  margin-top: -14px;
  right: 0;
  transition: all .3s ease-in-out;
}

.accordion-text {
  line-height: 165%;
  color: #4e4a64;
  max-height: 0;
  overflow: hidden;
  transition: max-height .3s ease-in-out;
}

.accordion .accordion-item.active .accordion-text {
  max-height: 53px;
}

.accordion .accordion-item.active .accordion-title:before {
  transform: rotate(180deg);
}

@media screen and (max-width: 550px) {
  .share-section {
    background: transparent;
    padding-bottom: 60px;
  }

  .share-section .after {
    width: 80px;
  }

  .share-section h2 {
    margin-bottom: 30px;
  }

  .share-section .description {
    position: relative;
    z-index: 2;
    margin-bottom: 40px;
  }

  .accordion {
    padding-left: 20px;
    padding-right: 45px;
  }

  .accordion-title:before {
    right: -30px;
    margin-top: 0;
    top: 9px;
  }

  .accordion .accordion-item {
    padding-top: 30px;
  }

  .accordion-title {
    font-size: 20px;
  }
}
</style>