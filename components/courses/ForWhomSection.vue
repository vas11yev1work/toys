<template>
  <section class="for-whom-section">
    <div class="container">
      <div class="section-content">
        <h2><b>Кому подойдет</b> этот курс?</h2>
        <div class="steps">
          <div class="step orange">
            <span class="count">01</span>
            <p class="info-text">
              Школьникам, <b>которые <br> любят IT</b> и хотят получить <br> первые знания по <br> <b>программированию</b>
            </p>
          </div>
          <img src="@/assets/images/for-whom1.png" alt="img">
          <div class="step blue">
            <span class="count">02</span>
            <p class="info-text">
              Любителям <br> <b>конструкторов <br> и роботов</b>
            </p>
          </div>
          <img src="@/assets/images/for-whom2.png" alt="img">
          <img src="@/assets/images/for-whom3.png" alt="img">
          <div class="step blue">
            <span class="count">03</span>
            <p class="info-text">
              Тем, кто <b>не выпускает <br> гаджеты из рук</b> и хотят <br> в них разобраться
            </p>
          </div>
          <img src="@/assets/images/for-whom4.png" alt="img">
          <div class="step orange">
            <span class="count">04</span>
            <p class="info-text">
              Ребятам, которые <br> хотят <b>творить и <br> создавать</b>
            </p>
          </div>
        </div>
      </div>
    </div>
    <img class="bg" src="@/assets/images/for-whom-bg.svg" alt="bg">
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({

})
</script>

<style lang="scss" scoped>
.for-whom-section {
  padding: 150px 0;
  position: relative;
  //&::before {
  //  content: '';
  //  position: absolute;
  //  top: 0;
  //  left: 0;
  //  right: 0;
  //  height: 100%;
  //  width: 100%;
  //  background-image: url('@/assets/images/for-whom-bg.svg');
  //}
  .bg {
    position: absolute;
    top: 0; // TODO: -100px
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
  }
  .section-content {
    position: relative;
    z-index: 6;
    h2 {
      margin-bottom: 60px;
    }
    .steps {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      border-radius: 50px;
      overflow: hidden;
      .step {
        padding: 50px;
        color: white;
        &.orange {
          background: linear-gradient(180deg, #FF9649 0%, #FF5C00 100%);
        }
        &.blue {
          background: linear-gradient(277.57deg, #2E2B88 0.3%, #383585 104.44%, #0B104F 112.2%, #514E9C 139.11%);
          .count {
            background: linear-gradient(180deg, #FF9649 0%, #FF5C00 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        }
        .count {
          font-size: 58px;
          font-weight: 800;
          margin-bottom: 20px;
          display: block;
        }
      }
    }
  }
}
</style>