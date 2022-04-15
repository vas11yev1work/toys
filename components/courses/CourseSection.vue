<template>
  <section class="main-courses-section">
    <div class="container">
      <div class="section-content">
        <div class="text-content">
          <h2>Открываем для <br> ребенка <span>мир IT!</span></h2>
          <p class="info-text">На занятиях <b>ребенок познакомится с клавиатурой, получит навык свободного владению мышью</b>, повысит скорость печати.</p>
          <Button class="mb-button" style="margin-right: 30px;">Записаться&nbsp;&nbsp;&nbsp;›</Button>
          <Button sp outlined style="color: white; ">Пробное занятие</Button>
        </div>
        <img class="girl" src="@/assets/images/course-girl.png" alt="girl">
      </div>
    </div>
    <img class="clouds" src="@/assets/images/course-clouds.svg" alt="clouds">
    <img class="section-footer" src="@/assets/images/courses-info-section-footer.svg" alt="bg">
    <div class="items">
      <div class="item">
        <span class="count">20</span>
        <p class="desc">увлекательных <b>занятий</b></p>
      </div>
      <div class="item">
        <span class="count">LIVE</span>
        <p class="desc"><b>живые</b> онлайн-занятия</p>
      </div>
      <div class="item">
        <span class="count">8</span>
        <p class="desc">до 8 <b>человек в группе</b></p>
      </div>
      <div class="item">
        <span class="count">1-2</span>
        <p class="desc"><b>раза в неделю</b> будни вечер/выходные</p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Button from '~/components/basic/Button.vue'

export default defineComponent({
  components: { Button }
})
</script>

<style lang="scss" scoped>
.main-courses-section {
  position: relative;
  padding-bottom: 80px;
  .section-title {
    text-align: left;
    font-size: 46px;
    margin-bottom: 20px;
  }
  &::after {
    content: '';
    position: absolute;
    bottom: -40px;
    right: -100px;
    background-image: url('@/assets/images/course-planet.svg');
    background-repeat: no-repeat;
    background-position: center center;
    height: 520px;
    width: 600px;
    object-fit: cover;
    @media screen and (max-width: 1880px) {
      display: none;
    }
  }
  .section-content {
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 550px) {
      padding-bottom: 50px;
    }
    .mb-button {
      @media screen and (max-width: 550px) {
        margin-bottom: 20px;
      }
    }
    .girl {
      padding-right: 300px;
      @media screen and (max-width: 550px) {
        display: none;
      }
    }
    .text-content {
      padding-top: 84px;
      @media screen and (max-width: 550px) {
        padding-top: 30px;
      }
      h2 {
        text-align: left;
        margin-bottom: 20px;
        span {
          color: #FF9649;
          background: linear-gradient(180deg, #FF9649 0%, #FF5C00 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
      p {
        max-width: 400px;
        margin-bottom: 40px;
      }
    }
  }
  .clouds {
    position: absolute;
    bottom: -80px;
    @media screen and (max-width: 1880px) {
      display: none;
    }
  }
  .items {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    position: absolute;
    bottom: -60px;
    z-index: 11;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 1170px;
    background: linear-gradient(175.03deg, #2F2B77 -16.21%, #12103A 121.97%);
    padding: 53px 110px;
    grid-gap: 100px;
    border-radius: 50px;
    @media screen and (max-width: 550px) {
      position: static;
      grid-template-columns: 1fr;
      left: 0;
      transform: translateX(0);
      padding: 35px;
      width: 90%;
      margin: 0 auto 20px auto;
      grid-gap: 30px;
      border-radius: 30px;
    }
    .item {
      .count {
        font-weight: 800;
        font-size: 58px;
        line-height: 71px;
        background: linear-gradient(180deg, #FF9649 0%, #FF5C00 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        color: #FF9649;
      }
      p {
        text-align: left;
      }
    }
  }
}
.section-footer {
  width: 100%;
  position: absolute;
  bottom: 0;
  z-index: 10;
  @media screen and (max-width: 550px) {
    display: none;
  }
}
</style>