<template>
  <div class="courses-section">
    <div class="container">
      <div class="content">
        <h2>Хочешь научиться учиться?</h2>
        <div class="info-card">
          <span class="info-text">
            <b>Мы научим тебя практическим навыкам</b>, которые будут полезны в будущем. Занятия проходят онлайн, <b>а вместо скучных контрольных</b>  ты создашь реальные проекты
          </span>
          <span class="info-point">!</span>
        </div>
        <div class="courses">
          <div class="image">
            <img src="@/assets/images/courses.svg" alt="courses">
          </div>
          <div class="courses-wrap desktop">
            <Flicking :options="{ bound: true, circular: true }" :plugins="dPlugins">
              <div v-for="(courses, n) in desktopCourses" :key="n"  class="courses-content" style="margin-right: 30px;">
                <div v-for="(course, i) in courses" :key="`${n}-${i}`" class="course">
                  <div class="image-wrap">
                    <!-- TODO: change to <img> when will the backend appear -->
                    <Image :slug="course.image" />
                  </div>
                  <span class="name">{{ course.name }}</span>
                </div>
              </div>
              <template #viewport>
                <div class="actions">
                  <div class="arrows">
                    <Button icon rounded class="arrow flicking-arrow-prev">
                      <img src="@/assets/images/c-arrow-left.svg" alt="arrow">
                    </Button>
                    <Button icon rounded class="flicking-arrow-next">
                      <img src="@/assets/images/c-arrow-right.svg" alt="arrow">
                    </Button>
                  </div>
                  <div class="read-more">
                    <Button href="#">Подробнее о курсах&nbsp;&nbsp;&nbsp;›</Button>
                  </div>
                </div>
              </template>
            </Flicking>
          </div>
          <div class="courses-wrap mobile">
            <Flicking :options="{ bound: true, circular: true }" :plugins="plugins">
              <div v-for="(course, i) in coursesList" :key="i" class="course">
                <div class="image-wrap">
                  <!-- TODO: change to <img> when will the backend appear -->
                  <Image :slug="course.image" />
                </div>
                <span class="name">{{ course.name }}</span>
              </div>
              <template #viewport>
                <div class="arrows" style="margin-top: 20px;">
                  <Button icon rounded class="arrow flicking-arrow-prev">
                    <img src="@/assets/images/c-arrow-left.svg" alt="arrow">
                  </Button>
                  <Button icon rounded class="flicking-arrow-next">
                    <img src="@/assets/images/c-arrow-right.svg" alt="arrow">
                  </Button>
                </div>
              </template>
            </Flicking>
            <div class="read-more" style="margin-top: 20px;">
              <Button href="#">Подробнее о курсах&nbsp;&nbsp;&nbsp;›</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import courses from '@/assets/data/courses.json';
import Image from '~/components/basic/Image.vue'
import Button from '~/components/basic/Button.vue'
import Flicking from '@egjs/vue3-flicking';
import { Arrow } from '@egjs/flicking-plugins'
import { Course } from '~/types/types'

export default defineComponent({
  components: { Image, Button, Flicking },
  setup() {
    // TODO: move to store maybe? (because we have courses page)
    const coursesList = ref<Course[]>(courses);
    const plugins = [new Arrow()]
    const dPlugins = [new Arrow()]

    const desktopCourses = computed(() => {
      return unflat(coursesList.value, 4);
    })

    function unflat(src: any[], count: number) {
      const result = [];
      for (let s = 0, e = count; s < src.length; s += count, e += count)
        result.push(src.slice(s, e));
      return result;
    }

    return { coursesList, plugins, desktopCourses, dPlugins }
  }
})
</script>

<style scoped>
.courses-section {
  padding: 180px 0;
  position: relative;
}
h2 {
  text-align: center;
  margin-bottom: 30px;
}
.courses-section .content {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.info-card {
  background-color: #454568;
  padding: 15px 53px 15px 20px;
  max-width: 802px;
  z-index: 2;
  border-radius: 5px;
  text-align: center;
  position: relative;
}
.info-text {
  font-size: 16px;
  line-height: 164.5%;
}
.info-point {
  position: absolute;
  top: 0;
  right: 20px;
  font-weight: 700;
  font-size: 62px;
  line-height: 76px;
}
.courses {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.courses .image {
  height: 730px;
  min-width: 694px;
  position: relative;
}
.courses .image img {
  height: 100%;
  width: 100%;
  position: absolute;
  animation: float 4s ease-in-out infinite;
  left: -80px;
  z-index: 2;
}
.courses {
  width: 100%;
  padding-top: 100px;
}
.courses-content {
  width: 684px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  margin-bottom: 50px;
}
.courses-content .course {
  display: flex;
  flex-direction: column;
  text-align: center;
}
.course .name {
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
}
.course .image-wrap {
  height: 222px;
  width: 327px;
  margin-bottom: 15px;
}
.actions {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
}
.read-more {
  display: flex;
  justify-content: center;
}
.arrows {
  display: flex;
  justify-content: center;
}
.arrows .arrow {
  margin-right: 30px;
}
.mobile {
  display: none;
}
.courses-wrap {
  max-width: 684px;
}
@media screen and (max-width: 550px) {
  .courses-section {
    padding: 100px 0 50px 0;
  }
  .courses {
    flex-direction: column;
    padding-top: 50px;
  }
  .courses .image {
    min-width: auto;
    width: 100%;
    height: auto;
    margin-bottom: 50px;
  }
  .courses .image img {
    left: 0;
    position: static;
  }
  .desktop {
    display: none;
  }
  .mobile {
    display: block;
    width: 100%;
  }
  .mobile .course {
    width: 100%;
    text-align: center;
    margin-right: 15px;
  }
  .mobile .course .image-wrap {
    width: 100%;
    height: auto;
  }
  .mobile .course .image-wrap img {
    width: 100%;
    height: 100%;
  }
}
</style>