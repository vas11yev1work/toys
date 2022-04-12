<template>
  <section class="expert-sections">
    <div class="section-content">
      <h2><b>Эксперты</b> наших курсов</h2>
      <div class="experts">
        <Flicking :options="{ circular: true }" :plugins="plugins" @changed="changeIndex">
          <div v-for="(expert, i) in experts" :key="i" class="expert" :class="{ active: i === currentIndex }">
            <Image :slug="expert.avatar" />
            <div class="expert-content">
              <h3 class="name">{{ expert.name }}</h3>
              <span class="duration-work">Работает с детьми: <b>{{ expert.workDuration }} лет</b></span>
              <span class="info-text" style="margin-bottom: 20px;">{{ expert.workType }}</span>
              <span class="info-text quote">
                «{{ expert.quote }}»
              </span>
              <div class="expert-actions">
                <Button sp style="margin-right: 30px;">Перейти к курсу&nbsp;&nbsp;&nbsp;›</Button>
                <Button sp outlined style="color: white;">Пробный урок</Button>
              </div>
            </div>
          </div>
          <template #viewport>
            <div class="arrows">
              <Button icon rounded class="arrow flicking-arrow-prev">
                <img src="@/assets/images/c-arrow-left.svg" alt="arrow">
              </Button>
              <Button icon rounded class="flicking-arrow-next">
                <img src="@/assets/images/c-arrow-right.svg" alt="arrow">
              </Button>
            </div>
          </template>
        </Flicking>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import Flicking from '@egjs/vue3-flicking'
import { Expert } from '~/types/types'
import ex from '~/assets/data/experts.json'
import Image from '~/components/basic/Image.vue'
import Button from '~/components/basic/Button.vue'
import { Arrow } from '@egjs/flicking-plugins'

export default defineComponent({
  components: { Button, Image, Flicking },
  setup() {
    const experts = ref<Expert[]>(ex)
    const currentIndex = ref(0)
    const plugins = [new Arrow()]

    function changeIndex(x: { index: number }) {
      currentIndex.value = x.index
    }

    return { experts, changeIndex, currentIndex, plugins }
  }
})
</script>

<style lang="scss" scoped>
.expert-sections {
  padding-bottom: 90px;
  .section-content {
    h2 {
      margin-bottom: 60px;
    }
    .experts {
      position: relative;
      .expert {
        max-width: 450px;
        width: 100%;
        transition: all 0.3s;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-right: 50px;
        .expert-content {
          transition: all 0.3s;
          margin-top: 25px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          .name {
            font-size: 30px;
            font-weight: 600;
            margin-bottom: 10px;
          }
          .duration-work {
            background-color: #454568;
            padding: 5px 15px;
            border-radius: 5px;
            margin-bottom: 5px;
            b {
              font-weight: 600;
            }
          }
          .quote {
            max-width: 590px;
            width: 100%;
          }
          .expert-actions {
            display: flex;
            margin-top: 30px;
          }
        }
        &:not(.active) {
          transform: scale(0.73) translateY(-60px);
          .expert-content {
            opacity: 0;
            visibility: hidden;
          }
        }
      }
      .arrows {
        z-index: 6;
        max-width: 630px;
        position: absolute;
        top: 190px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        justify-content: space-between;
        width: 100%;
      }
    }
  }
}
</style>