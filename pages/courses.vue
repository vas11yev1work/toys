<template>
  <div class="courses-page">
    <img src="@/assets/images/c-header-bg.svg" alt="bg" class="bg" />
    <MainSection />
    <CoursesListSection />
    <div class="container">
      <Banner />
    </div>
    <AboutUsSection />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainSection from '~/components/courses/MainSection.vue'
import CoursesListSection from '~/components/courses/CoursesListSection.vue'
import Banner from '~/components/courses/Banner.vue'
import AboutUsSection from '~/components/courses/AboutUsSection.vue'

export default defineComponent({
  components: { AboutUsSection, Banner, CoursesListSection, MainSection }
})
</script>

<style lang="scss" scoped>
.courses-page {
  .bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 1;
    @media screen and (max-width: 1630px) {
      display: none;
    }
  }
}
</style>