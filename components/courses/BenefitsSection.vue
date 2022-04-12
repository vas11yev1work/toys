<template>
  <section class="benefits-section">
    <div class="container">
      <div class="section-content">
        <h2>Что даст тебе <b>обучение в Toys</b></h2>
        <div class="content">
          <div class="image-wrap">
            <img class="girl" src="@/assets/images/benefits-girl.png" alt="girl">
          </div>
          <div class="benefits-list">
            <div v-for="(b, i) in benefits" :key="i" class="benefit">
              <img :src="b.icon" alt="icon">
              <h4 class="title">{{ b.name }}</h4>
              <p class="info-text" v-html="b.desc" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import icon1 from '@/assets/images/benefit1.svg';
import icon2 from '@/assets/images/benefit2.svg';
import icon3 from '@/assets/images/benefit3.svg';
import icon4 from '@/assets/images/benefit4.svg';
import icon5 from '@/assets/images/benefit5.svg';

export default defineComponent({
  setup() {
    const benefits = [
      {
        icon: icon1,
        name: 'Свободное мышление',
        desc: 'Дети в Toys <b>не боятся смело мыслить и сами придумывают какие курсы хотят пройти.</b> Наша роль — помочь эти задумки <b>реализовать</b>',
      },
      {
        icon: icon2,
        name: 'Самоопределение',
        desc: 'Дети в Toys <b>не боятся смело мыслить и сами придумывают какие курсы хотят пройти.</b> Наша роль — помочь эти задумки <b>реализовать</b>',
      },
      {
        icon: icon3,
        name: 'Инициативность',
        desc: 'Дети в Toys <b>не боятся смело мыслить и сами придумывают какие курсы хотят пройти.</b> Наша роль — помочь эти задумки <b>реализовать</b>',
      },
      {
        icon: icon4,
        name: 'Погружение в среду',
        desc: 'Дети в Toys <b>не боятся смело мыслить и сами придумывают какие курсы хотят пройти.</b> Наша роль — помочь эти задумки <b>реализовать</b>',
      },
      {
        icon: icon5,
        name: 'Системное мышление',
        desc: 'Дети в Toys <b>не боятся смело мыслить и сами придумывают какие курсы хотят пройти.</b> Наша роль — помочь эти задумки <b>реализовать</b>',
      },
      {
        icon: icon1,
        name: 'Свободное мышление',
        desc: 'Дети в Toys <b>не боятся смело мыслить и сами придумывают какие курсы хотят пройти.</b> Наша роль — помочь эти задумки <b>реализовать</b>',
      },
    ]

    return { benefits }
  }
})
</script>

<style lang="scss" scoped>
.benefits-section {
  padding-bottom: 150px;
}

.section-content {
  h2 {
    margin-bottom: 60px;
  }
  .content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    &::before {
      position: absolute;
      top: 0;
      left: 0;
      content: '';
      width: 105vw;
      height: 100%;
      background-image: url('@/assets/images/c-benefits-bg.svg');
      background-repeat: no-repeat;
      background-position: center center;
      transform: translateY(27px);
      background-size: contain;
      @media screen and (max-width: 1600px) {
        display: none;
      }
    }
    .image-wrap {
      position: relative;
      margin-right: 2px;
      .girl {
        position: relative;
        left: -108px;
        z-index: 2;
      }
    }
    .benefits-list {
      padding-top: 50px;
      display: flex;
      flex-wrap: wrap;
      position: relative;
      .benefit {
        width: 319px;
        margin-right: 155px;
        margin-bottom: 80px;
        &:nth-child(2n) {
          margin-right: 0;
        }
        &:nth-last-child(-n + 2) {
          margin-bottom: 0;
        }
      }
    }
  }
}
</style>