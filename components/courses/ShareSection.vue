<template>
  <section class="share-section">
    <div class="container">
      <div class="section-content">
        <div class="text-content">
          <h3 class="title"><b>Поделись курсами</b><br> с своими друзьями</h3>
          <div class="networks">
            <a class="network" href="#">
              <img src="@/assets/images/share-ig.svg" alt="share">
            </a>
            <a class="network" href="#">
              <img src="@/assets/images/share-vk.svg" alt="share">
            </a>
            <a class="network" href="#">
              <img src="@/assets/images/share-tg.svg" alt="share">
            </a>
            <a class="network" href="#">
              <img src="@/assets/images/share-vi.svg" alt="share">
            </a>
          </div>
          <Button class="share-btn" style="margin-top: 40px;">Скопировать ссылку&nbsp;&nbsp;&nbsp;›</Button>
        </div>
        <img class="girl" src="@/assets/images/share-section-girl.png" alt="girl">
      </div>
    </div>
    <img class="clouds" src="@/assets/images/share-clouds.svg" alt="clouds">
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Button from '~/components/basic/Button.vue'

export default defineComponent({
  components: { Button }
})
</script>

<style lang="scss" scoped>
.share-section {
  margin-top: 150px;
  position: relative;
  @media screen and (max-width: 550px) {
    margin-bottom: 40px;
    margin-top: 40px;
  }
  .share-btn {
    @media screen and (max-width: 550px) {
      padding: 25px 30px;
    }
  }
  .clouds {
    position: absolute;
    bottom: -50px;
    z-index: 1;
    width: 100%;
    @media screen and (max-width: 550px) {
      display: none;
    }
  }
  &::before {
    content: '';
    position: absolute;
    bottom: -30px;
    left: 0;
    background-image: url('@/assets/images/share-s-p1.svg');
    height: 100%;
    width: 100%;
    background-repeat: no-repeat;
    z-index: 4;
    @media screen and (max-width: 550px) {
      display: none;
    }
  }
  &::after {
    content: '';
    position: absolute;
    bottom: -100px;
    right: 0;
    background-image: url('@/assets/images/share-s-p2.svg');
    height: 100%;
    width: 100%;
    background-repeat: no-repeat;
    background-position: right;
    z-index: 4;
    @media screen and (max-width: 550px) {
      height: 400px;
      width: 400px;
      background-size: contain;
      bottom: -150px;
    }
  }
  .girl {
    @media screen and (max-width: 550px) {
      display: none;
    }
  }
  .section-content {
    z-index: 5;
    display: flex;
    position: relative;
    .title {
      font-size: 46px;
      margin-bottom: 20px;
      font-weight: 600;
      b {
        font-weight: 700;
      }
    }
    .networks {
      display: flex;
      .network {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 56px;
        height: 56px;
        border: 2px solid white;
        border-radius: 50%;
        background: linear-gradient(171.5deg, #323056 -6.18%, #302D5C 93.5%), #FFFFFF;
        margin-right: 20px;
      }
    }
  }
}
</style>