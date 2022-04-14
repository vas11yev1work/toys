<template>
  <div class="course-page">
    <ForWhomSection />
    <SkillsSection />
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

export default defineComponent({
  components: { SkillsSection, ForWhomSection, BenefitsSection, ShareSection, LessonsLevels, FreeBanner, ExpertsSection }
})
</script>

<style scoped>

</style>