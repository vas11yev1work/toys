<template>
  <section class="about-us-section">
    <div class="container">
      <div class="section-content">
        <h2>О нас</h2>
        <div class="count-blocks">
          <div v-for="(block, i) in blocks" :key="i" class="count-block">
            <div class="title-wrap">
              <img :src="block.icon" alt="">
              <h3 class="title">{{ block.title }}</h3>
            </div>
            <p class="desc" v-html="block.desc" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import icon1 from '~/assets/images/about-icon1.svg'
import icon2 from '~/assets/images/about-icon2.svg'
import icon3 from '~/assets/images/about-icon3.svg'
import icon4 from '~/assets/images/about-icon4.svg'

export default defineComponent({
  setup() {
    const blocks = [
      {
        icon: icon1,
        title: 'Все',
        desc: 'учителя с <b>высшим, профильным образованием</b>'
      },
      {
        icon: icon2,
        title: '53%',
        desc: 'семей <b>привели своих <br> друзей</b>'
      },
      {
        icon: icon3,
        title: '>1000',
        desc: 'детей <b>от 8 до 17 лет в 30 странах мира</b> с нами'
      },
      {
        icon: icon4,
        title: '92%',
        desc: 'детей <b>остались с нами <br> после первого занятия</b>'
      }
    ]

    return { blocks }
  }
})
</script>

<style lang="scss" scoped>
.about-us-section {
  padding: 150px 0;
  position: relative;
  z-index: 1;
  background-image: url('@/assets/images/c-about-us-line.svg');
  background-size: cover;
  h2 {
    margin-bottom: 60px;
  }
  .section-content {
    .count-blocks {
      display: flex;
      .count-block {
        width: 100%;
        margin-right: 30px;
        border-radius: 30px;
        padding: 30px 26px;
        &:last-child {
          margin-right: 0;
        }
        &:nth-child(2n - 1) {
          background: linear-gradient(180deg, #FF9649 0%, #FF5C00 100%);
          box-shadow: 0 0 22px rgba(255, 107, 0, 0.4);
        }
        &:nth-child(2n) {
          background: linear-gradient(277.57deg, #2E2B88 0.3%, #383585 104.44%, #0B104F 112.2%, #514E9C 139.11%);
        }

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .title-wrap {
          display: flex;
          align-items: center;
          margin-bottom: 14px;
          img {
            margin-right: 20px;
          }
          .title {
            font-weight: 700;
            font-size: 46px;
            line-height: 56px;
            margin: 0;
          }
        }
      }
    }
  }
}
</style>