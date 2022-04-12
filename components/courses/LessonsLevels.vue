<template>
  <div class="lessons-levels">
    <div class="lesson">
      <div class="title-wrap">
        <span class="count">4</span>
        <span class="lesson-text"> занятия</span>
      </div>
      <span class="price">1 800 <span class="rub">₽</span></span>
      <br>
      <Button outlined sp style="color: white; margin-top: 15px;">Подобрать курс</Button>
    </div>
    <div class="lesson best">
      <div class="title-wrap">
        <span class="count">12</span>
        <span class="lesson-text"> занятий</span>
      </div>
      <span class="price">4 800 <span class="rub">₽</span></span>
      <br>
      <Button style="margin-top: 25px;">Изменить будущее ребенка&nbsp;&nbsp;&nbsp;›</Button>
    </div>
    <div class="lesson">
      <div class="title-wrap">
        <span class="count">8</span>
        <span class="lesson-text"> занятий</span>
      </div>
      <span class="price">2 800 <span class="rub">₽</span></span>
      <br>
      <Button outlined sp style="color: white; margin-top: 15px;">Подобрать курс</Button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Button from '~/components/basic/Button.vue'

export default defineComponent({
  components: { Button }
})
</script>

<style lang="scss" scoped>
.lessons-levels {
  display: flex;
  align-items: center;
  position: relative;
  z-index: 5;
  .lesson:not(.best) {
    border: 3px solid #fe6205;
    background: linear-gradient(171.5deg, #323056 -6.18%, #302D5C 93.5%), #FFFFFF;
    padding: 15px 75px 30px;
  }
  .lesson.best {
    position: relative;
    border-radius: 30px;
    background: linear-gradient(168.2deg, #FFFFFF 8.64%, #EFEFF1 91.21%);
    padding: 70px 57px 35px;
    color: #0C0058;
    &::before {
      content: 'ХИТ !';
      display: flex;
      justify-content: center;
      align-items: center;
      height: 110px;
      width: 110px;
      background: linear-gradient(277.02deg, #FF9649 -17.11%, #FF7426 34.24%, #FF5C00 71.58%);
      border-radius: 50%;
      color: white;
      font-size: 32px;
      font-weight: 700;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%) translateY(-50%) rotateZ(340deg);
    }
  }
  .lesson {
    text-align: center;
    &:first-child {
      border-right: none;
      border-radius: 30px 0 0 30px;
    }
    &:last-child {
      border-left: none;
      border-radius: 0 30px 30px 0;
    }
    .title-wrap {
      .count {
        font-size: 60px;
        font-weight: 800;
        margin-right: 10px;
      }
      .lesson-text {
        font-size: 24px;
        font-weight: 500;
      }
    }
    .price {
      font-size: 38px;
      font-weight: 700;
      .rub {
        font-size: 20px;
        font-weight: 600;
      }
    }
  }
}
</style>