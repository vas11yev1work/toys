<template>
  <div class="course-page">
    <img src="@/assets/images/c-header-bg.svg" alt="bg" class="bg" />
    <CourseSection />
    <ForWhomSection />
    <SkillsSection />
    <ProgramSection />
    <BenefitsSection />
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
import { defineComponent } from 'vue'
import ExpertsSection from '~/components/courses/ExpertsSection.vue'
import FreeBanner from '~/components/courses/FreeBanner.vue'
import LessonsLevels from '~/components/courses/LessonsLevels.vue'
import ShareSection from '~/components/courses/ShareSection.vue'
import BenefitsSection from '~/components/courses/BenefitsSection.vue'
import ForWhomSection from '~/components/courses/ForWhomSection.vue'
import SkillsSection from '~/components/courses/SkillsSection.vue'
import CourseSection from '~/components/courses/CourseSection.vue'
import ProgramSection from '~/components/courses/ProgramSection.vue'

export default defineComponent({
  components: { ProgramSection, CourseSection, SkillsSection, ForWhomSection, BenefitsSection, ShareSection, LessonsLevels, FreeBanner, ExpertsSection }
})
</script>

<style lang="scss" scoped>
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
</style>