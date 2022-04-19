<template>
  <div class="courses-section">
    <div class="section-content desktop">
      <h2><b>Хочешь овладеть</b> одним <br> из этих навыков?</h2>
      <div class="courses">
        <Flicking :options="{ circular: true }" :plugins="mPlugins">
          <div v-for="(course, i) in coursesList" :key="i" class="course">
            <div class="card">
              <div class="front">
                <Image class="image" :slug="course.largeImage" />
              </div>
              <div class="info">
                <p><b>На занятиях ты освоишь методы шифрования данных</b>, узнаешь основы информационной безопасности и <b>научишься программировать</b> на популярном языке Python.</p>
                <Button href="/courses/it" small>Подробно о курсе&nbsp;&nbsp;&nbsp;›</Button>
              </div>
            </div>
            <span class="name">{{ course.name }}</span>
          </div>
          <template #viewport>
            <div class="container arrows" style="margin-top: 20px;">
              <Button icon rounded class="arrow left flicking-arrow-prev">
                <img src="@/assets/images/c-arrow-left.svg" alt="arrow">
              </Button>
              <Button icon rounded class="arrow right flicking-arrow-next">
                <img src="@/assets/images/c-arrow-right.svg" alt="arrow">
              </Button>
            </div>
          </template>
        </Flicking>
      </div>
    </div>
    <div class="section-content mobile">
      <div class="container">
        <h2><b>Хочешь овладеть</b> одним <br> из  этих навыков?</h2>
        <div class="courses-mobile">
          <Flicking :options="{ circular: true }" :plugins="plugins">
            <div v-for="(course, i) in coursesList" :key="i" class="course">
              <div class="card">
                <div class="front">
                  <Image class="image" :slug="course.largeImage" />
                  <span class="name">{{ course.name }}</span>
                </div>
                <div class="info">
                  <p class="info-text"><b>На занятиях ты освоишь методы шифрования данных</b>, узнаешь основы информационной безопасности и <b>научишься программировать</b> на популярном языке Python.</p>
                  <Button small>Подробно о курсе&nbsp;&nbsp;&nbsp;›</Button>
                </div>
              </div>
            </div>
            <template #viewport>
              <div class="arrows">
                <Button icon rounded small class="arrow left flicking-arrow-prev">
                  <img src="@/assets/images/c-arrow-left.svg" alt="arrow">
                </Button>
                <Button icon rounded small class="arrow right flicking-arrow-next">
                  <img src="@/assets/images/c-arrow-right.svg" alt="arrow">
                </Button>
              </div>
            </template>
          </Flicking>
        </div>
      </div>
    </div>
    <img class="bg" src="@/assets/images/c-courses-bg.svg" alt="bg">
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Flicking from '@egjs/vue3-flicking'
import courses from '~/assets/data/courses.json'
import { Arrow } from '@egjs/flicking-plugins'
import { Course } from '~/types/types'
import Image from '~/components/basic/Image.vue'
import Button from '~/components/basic/Button.vue'

export default defineComponent({
  components: { Button, Flicking, Image },
  setup() {
    const coursesList = ref<Course[]>(courses);
    const plugins = [new Arrow()]
    const mPlugins = [new Arrow()]

    return { coursesList, plugins, mPlugins }
  }
})
</script>

<style lang="scss" scoped>
.courses-section {
  position: relative;
  padding-top: 60px;
  @media screen and (max-width: 550px) {
    padding-top: 20px;
  }
  .bg {
    width: 100%;
    position: absolute;
    top: 0;
    z-index: 1;
    @media screen and (max-width: 550px) {
      display: none;
    }
  }
  .section-content {
    width: 100%;
    position: relative;
    z-index: 5;
    display: flex;
    justify-content: center;
    flex-direction: column;
    &.mobile {
      display: none;
    }
    @media screen and (max-width: 550px) {
      &.desktop {
        display: none;
      }
      &.mobile {
        display: block;
      }
    }

    h2 {
      text-align: center;
      @media screen and (max-width: 550px) {
        text-align: left;
        margin-bottom: 30px;
      }
    }
    .courses {
      padding-top: 60px;
      padding-bottom: 150px;
      position: relative;
      .course {
        text-align: center;
        z-index: 10;
        margin-right: 30px;
        @media screen and (max-width: 1920px) {
          width: 23vw;
        }
        .name {
          font-weight: 600;
          font-size: 20px;
          line-height: 130%;
        }
        .card {
          min-height: 100px;
          margin-bottom: 25px;
          border-radius: 50px;
          overflow: hidden;
          position: relative;
          .front {
            .image {
              width: 100%;
              display: flex;
            }
          }
          .info {
            opacity: 0;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #454369;
            padding: 30px 53px;
            transition: 0.2s;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            text-align: center;
            p {
              line-height: 164.5%;
            }
          }
          &:hover {
            .info {
              opacity: 1;
            }
          }
        }
      }
      .arrows {
        position: absolute;
        display: flex;
        justify-content: space-between;
        width: 100%;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(calc(-50% - 50px));
        margin: 0 auto !important;
        z-index: 10;
        height: 0;
        .left {
          left: -50px;
        }
        .right {
          right: -50px;
        }
      }
    }
    .courses-mobile {
      padding-bottom: 60px;
      width: 100%;
      position: relative;
      .course {
        width: 100%;
        margin-right: 20px;
        img {
          width: 100%;
          border-radius: 30px;
        }
        .name {
          font-size: 20px;
          font-weight: 600;
          margin: 15px 0;
          display: block;
        }
        p {
          margin-bottom: 15px;
        }
      }
      .arrows {
        position: absolute;
        width: 100%;
        display: flex;
        justify-content: space-between;
        top: 20%;
        padding: 0 20px;
      }
    }
    .container {
      width: 100%;
    }
  }
}
</style>