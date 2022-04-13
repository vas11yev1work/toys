<template>
  <div class="banner">
    <img src="@/assets/images/banner-yes.svg" alt="banner">
    <h2><b>Если твой ответ «ДА»,</b> <br>наши курсы помогут тебе</h2>
    <p><b>Мы создали проект “Toys” для себя и для таких же современных родителей и детей.</b> Сейчас это международный проект, в котором занимаются тысячи детей, нам удалось сохранить семейный подход и <b>теплоту на каждом уроке курса.</b></p>
    <Button sp class="banner-btn" style="margin-right: 30px;">Подобрать курс&nbsp;&nbsp;&nbsp;›</Button>
    <Button sp class="banner-btn" style="color: white" outlined>Наши эксперты</Button>
  </div>
</template>

<script>
import Button from '~/components/basic/Button';
export default {
  components: { Button }
}
</script>

<style lang="scss" scoped>
.banner {
  position: relative;
  z-index: 11;
  background: linear-gradient(275.31deg, #514E9C -3.51%, #0B104F 48.21%, #383585 98.45%, #2E2B88 144.83%);
  padding: 73px 60px;
  border-radius: 50px;
  @media screen and (max-width: 550px) {
    background: linear-gradient(102.36deg, #514E9C 2.75%, #0B104F 94.15%);
    padding: 40px;
    border-radius: 30px;
  }
  img {
    position: absolute;
    top: -73px;
    right: 0;
    @media screen and (max-width: 550px) {
      display: none;
    }
  }
  h2 {
    font-size: 36px;
    line-height: 120%;
    margin-bottom: 20px;
    @media screen and (max-width: 550px) {
      font-size: 24px;
    }
  }
  p {
    max-width: 428px;
    font-size: 16px;
    line-height: 165%;
    margin-bottom: 30px;
    b {
      font-weight: 600;
    }
  }
  .banner-btn {
    @media screen and (max-width: 550px) {
      margin-bottom: 20px;
      width: 100%;
      display: flex;
      justify-content: center;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>