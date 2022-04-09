<template lang="pug">
.test-card
  Present
  .main-block
    TestIntro(v-if="testStore.step === Step.NOT_STARTED")
    TestProcess(v-if="testStore.step === Step.IN_PROGRESS")
    TestStopper(v-if="testStore.step === Step.PAUSE")
    TestFinish(v-if="testStore.step === Step.FINISHED")
  TestHelp
</template>

<script lang="ts">
import Present from '@/components/test/Present.vue';
import TestHelp from '@/components/test/TestHelp.vue';
import TestIntro from '@/components/test/TestIntro.vue';
import TestStopper from '@/components/test/TestStopper.vue';
import TestProcess from '@/components/test/TestProcess.vue';
import TestFinish from '@/components/test/TestFinish.vue';
import {useTest, Step} from '@/stores/test';

export default defineComponent({
  name: 'TestCard',
  data: () => ({
    testStore: useTest(),
    Step
  }),
  components: {
    Present,
    TestHelp,
    TestIntro,
    TestProcess,
    TestFinish,
    TestStopper,
  }
});
</script>

<style scoped>
.test-card {
  display: flex;
  background: #fff;
  border-radius: 55px;
  max-width: 1272px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

.main-block {
  flex: 1;
  padding: 31px 33px 50px 33px;
}

@media screen and (max-width: 550px) {
  .test-card {
    flex-direction: column;
    background-color: transparent;
  }

  .main-block {
    background-color: #fff;
    box-shadow: 0 0 22px rgb(28 25 88 / 6%);
    border-radius: 37px;
    /*margin-left: -15px;*/
    /*margin-right: -15px;*/
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 10px;
    order: 3;
    margin-left: -20px;
    margin-right: -20px;
    padding-bottom: 30px;
  }
}
</style>