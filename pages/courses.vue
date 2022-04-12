<template>
  <div class="courses-page">
    <img src="@/assets/images/c-header-bg.svg" alt="bg" class="bg" />
    <MainSection />
    <CoursesListSection />
    <div class="container">
      <Banner />
    </div>
    <AboutUsSection />
    <BenefitsSection />
    <EducationalProgramsSection />
    <ExpertsSection />
    <div class="container">
      <FreeBanner />
    </div>
    <div class="container lessons-levels" style="margin-top: 130px;">
      <LessonsLevels />
    </div>
    <ShareSection />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainSection from '~/components/courses/MainSection.vue'
import CoursesListSection from '~/components/courses/CoursesListSection.vue'
import Banner from '~/components/courses/Banner.vue'
import AboutUsSection from '~/components/courses/AboutUsSection.vue'
import EducationalProgramsSection from '~/components/courses/EducationalProgramsSection.vue'
import BenefitsSection from '~/components/courses/BenefitsSection.vue'
import FreeBanner from '~/components/courses/FreeBanner.vue'
import LessonsLevels from '~/components/courses/LessonsLevels.vue'
import ExpertsSection from '~/components/courses/ExpertsSection.vue'
import ShareSection from '~/components/courses/ShareSection.vue'

export default defineComponent({
  components: { ShareSection, ExpertsSection, LessonsLevels, FreeBanner, BenefitsSection, EducationalProgramsSection, AboutUsSection, Banner, CoursesListSection, MainSection }
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
  .lessons-levels {
    display: flex;
    justify-content: center;
  }
}
</style>