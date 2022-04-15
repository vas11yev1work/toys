<template>
  <section class="main-courses-section">
    <div class="container">
      <div class="section-content">
        <img class="girl" src="@/assets/images/courses-girl.png" alt="girl">
        <div class="text-content">
          <div class="benefits">
            <h2 class="section-title"><b>С нами</b> у тебя все получится!</h2>
            <div class="benefit">
              <span class="num">> 1.000</span>
              <span class="text">
                Более <b>тысячи учеников</b>
              </span>
            </div>
            <div class="benefit">
              <span class="num">> 70</span>
              <span class="text">
                <b>Выпускников</b> в месяц
              </span>
            </div>
            <div class="benefit">
              <span class="num">2012 г.</span>
              <span class="text">
                На рынке образования <b>с 2012 года</b>
              </span>
            </div>
          </div>
          <div class="about-us">
            <h2 class="section-title"><b>С нами</b> у тебя все получится!</h2>
            <p class="info">
              <b>Поможем повысить эффективность твоей учебы</b>, развить логику, память и аналитические способности.
            </p>
            <p class="info">
              <b>Учеба будет легкой и веселой</b>, а новые навыки помогут стать ответственным, самодостаточным и образованным человеком!
            </p>
            <Button>Пободрать курс&nbsp;&nbsp;&nbsp;›</Button>
          </div>
        </div>
      </div>
    </div>
    <img class="clouds" src="@/assets/images/c-clouds.svg" alt="clouds">
    <img class="section-footer" src="@/assets/images/courses-info-section-footer.svg" alt="bg">
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
  .section-title {
    text-align: left;
    font-size: 46px;
    margin-bottom: 20px;
  }
  &::before {
    content: '';
    position: absolute;
    width: 327px;
    height: 327px;
    background-image: url('@/assets/images/c-planet.svg');
    background-repeat: no-repeat;
    background-position: center center;
    left: -100px;
    top: -80px;
    z-index: 2;
    @media screen and (max-width: 1880px) {
      display: none;
    }
  }
  &::after {
    content: '';
    position: absolute;
    width: 848px;
    height: 856px;
    background-image: url('@/assets/images/c-rocket.svg');
    background-repeat: no-repeat;
    background-position: center center;
    right: -405px;
    top: -165px;
    z-index: 2;
    @media screen and (max-width: 1880px) {
      display: none;
    }
  }
  .section-content {
    position: relative;
    z-index: 5;
    display: flex;
    @media screen and (max-width: 550px) {
      padding-bottom: 50px;
    }
    .girl {
      position: relative;
      left: -67px;
      z-index: 2;
      @media screen and (max-width: 550px) {
        display: none;
      }
    }
    .text-content {
      padding-top: 84px;
      display: flex;
      @media screen and (max-width: 550px) {
        flex-direction: column;
        padding-top: 0;
      }
      .benefits {
        margin-right: 146px;
        min-width: 211px;
        @media screen and (max-width: 550px) {
          width: 100%;
          margin-right: 0;
        }
        .section-title {
          display: none;
          @media screen and (max-width: 550px) {
            display: block;
            margin-bottom: 50px;
          }
        }
        .benefit {
          margin-bottom: 38px;
          .num {
            display: block;
            margin-bottom: 5px;
            font-size: 58px;
            font-weight: 800;
            background: linear-gradient(180deg, #FF9649 0%, #FF5C00 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            color: #FF9649;
          }
          .text {
            line-height: 164.5%;
            b {
              font-weight: 600;
            }
          }
        }
      }
      .about-us {
        .section-title {
          @media screen and (max-width: 550px) {
            display: none;
          }
        }
        .info {
          line-height: 164.5%;
          margin-bottom: 26px;
          &:last-child {
            margin-bottom: 40px;
          }
          b {
            font-weight: 600;
          }
        }
      }
    }
  }
  .clouds {
    position: absolute;
    top: 0;
    width: 100%;
    @media screen and (max-width: 1880px) {
      display: none;
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