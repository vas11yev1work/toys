<template>
  <section class="educational-program-section">
    <div class="container">
      <div class="section-content">
        <h2>Образовательные направления</h2>
        <div class="programs">
          <div v-for="(p, i) in programsList" :key="i" class="program">
            <Image class="bg" :slug="p.bg" />
            <div class="program-info">
              <h4 class="program-name">{{ p.name }}</h4>
              <p class="program-info info-text" v-html="p.info" />
              <div class="duration-wrap">
                <span class="duration-text">Продолжительность урока:</span>
                <span class="duration">{{ p.duration }} <b>мин.</b></span>
              </div>
              <Button class="ed-button" sp style="margin-right: 30px;">Перейти к курсу&nbsp;&nbsp;&nbsp;›</Button>
              <Button outlined sp style="color: white;">Пробный урок</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import programs from '@/assets/data/programs.json';
import { EducationalProgram } from '~/types/types'
import Image from '~/components/basic/Image.vue'
import Button from '~/components/basic/Button.vue'

export default defineComponent({
  components: { Button, Image },
  setup() {
    const programsList = ref<EducationalProgram[]>(programs)

    return { programsList }
  }
})
</script>

<style lang="scss" scoped>
.section-content {
  margin-bottom: 150px;
  @media screen and (max-width: 550px) {
    margin-bottom: 50px;
  }
  h2 {
    margin-bottom: 60px;
  }
  .programs {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    .program {
      z-index: 5;
      padding: 35px;
      position: relative;
      overflow: hidden;
      width: 100%;
      max-width: 685px;
      margin-bottom: 30px;
      border-radius: 30px;
      margin-right: 30px;
      &:nth-child(2n) {
        margin-right: 0;
      }
      .bg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateY(-50%) translateX(-50%);
        @media screen and (max-width: 550px) {
          display: none;
        }
      }
      @media screen and (max-width: 550px) {
        background-color: #323056;
        margin: 0 0 20px 0 !important;
      }
      .ed-button {
        @media screen and (max-width: 550px) {
          margin-bottom: 20px;
        }
      }
      .program-info {
        position: relative;
        h4 {
          font-weight: 700;
          font-size: 24px;
          line-height: 29px;
          margin-top: 0;
          margin-bottom: 15px;
        }
        .program-info {
          margin-bottom: 20px;
          max-width: 368px;
        }
        .duration-wrap {
          margin-bottom: 30px;
          display: flex;
          flex-direction: column;
          .duration-text {
            font-weight: 600;
            font-size: 18px;
            line-height: 22px;
            margin-bottom: 5px;
          }
          .duration {
            font-size: 16px;
            line-height: 20px;
            b {
              font-weight: 600;
            }
          }
        }
      }
    }
  }
}
</style>