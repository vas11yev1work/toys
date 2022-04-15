<template>
  <section class="program-section">
    <div class="container">
      <div class="section-content">
        <h2><b>Программа</b> курса?</h2>
        <div class="info-card">
          <span class="info-text">
            Ученики выполняют задания, а <b>учитель видит экран каждого ребёнка и оперативно помогает</b>
          </span>
          <span class="info-point">!</span>
        </div>
        <div class="collapse-items">
          <div v-for="(item, i) in items" @click="currentItem = i" :class="{ active: currentItem === i }" class="collapse-item">
            <div class="content">
              <div class="title-wrap">
                <span class="count">{{ i + 1}}.</span>
                <span class="item-title">{{ item.title }}</span>
              </div>
              <p class="info-text" v-html="item.text" />
            </div>
            <div class="button-wrap">
              <Button icon rounded small>
                <img src="@/assets/images/plus.svg" alt="plus">
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Button from '~/components/basic/Button.vue'

export default defineComponent({
  components: { Button },
  setup() {
    const currentItem = ref(null);
    const items = [
      {
        title: 'Настройка среды окружения.',
        text: '<b>Узнаем, что такое блок</b>, как применить к нему стили и как заставить его вести себя так, как нужно. <b>Построим сайт словно дом из блоков-кирпичиков</b>, ставя их друг на друга, заставляя их растекаться деформироваться, а если нужно применим клей и гвозди!'
      },
      {
        title: 'Управляем компьютером.',
        text: '<b>Узнаем, что такое блок</b>, как применить к нему стили и как заставить его вести себя так, как нужно. <b>Построим сайт словно дом из блоков-кирпичиков</b>, ставя их друг на друга, заставляя их растекаться деформироваться, а если нужно применим клей и гвозди!'
      },
      {
        title: 'Таблицы и их применение.',
        text: '<b>Узнаем, что такое блок</b>, как применить к нему стили и как заставить его вести себя так, как нужно. <b>Построим сайт словно дом из блоков-кирпичиков</b>, ставя их друг на друга, заставляя их растекаться деформироваться, а если нужно применим клей и гвозди!'
      },
      {
        title: 'Таблица стилей. Наводим красоту.',
        text: '<b>Узнаем, что такое блок</b>, как применить к нему стили и как заставить его вести себя так, как нужно. <b>Построим сайт словно дом из блоков-кирпичиков</b>, ставя их друг на друга, заставляя их растекаться деформироваться, а если нужно применим клей и гвозди!'
      },
      {
        title: 'Продвинутые селекторы.',
        text: '<b>Узнаем, что такое блок</b>, как применить к нему стили и как заставить его вести себя так, как нужно. <b>Построим сайт словно дом из блоков-кирпичиков</b>, ставя их друг на друга, заставляя их растекаться деформироваться, а если нужно применим клей и гвозди!'
      },
      {
        title: 'Блочная модель. Строим дом.',
        text: '<b>Узнаем, что такое блок</b>, как применить к нему стили и как заставить его вести себя так, как нужно. <b>Построим сайт словно дом из блоков-кирпичиков</b>, ставя их друг на друга, заставляя их растекаться деформироваться, а если нужно применим клей и гвозди!'
      },
      {
        title: 'Практика. Оформление кода.',
        text: '<b>Узнаем, что такое блок</b>, как применить к нему стили и как заставить его вести себя так, как нужно. <b>Построим сайт словно дом из блоков-кирпичиков</b>, ставя их друг на друга, заставляя их растекаться деформироваться, а если нужно применим клей и гвозди!'
      },
      {
        title: 'Продвинутое позиционирование.',
        text: '<b>Узнаем, что такое блок</b>, как применить к нему стили и как заставить его вести себя так, как нужно. <b>Построим сайт словно дом из блоков-кирпичиков</b>, ставя их друг на друга, заставляя их растекаться деформироваться, а если нужно применим клей и гвозди!'
      },
      {
        title: 'JavaScript, основы программирования.',
        text: '<b>Узнаем, что такое блок</b>, как применить к нему стили и как заставить его вести себя так, как нужно. <b>Построим сайт словно дом из блоков-кирпичиков</b>, ставя их друг на друга, заставляя их растекаться деформироваться, а если нужно применим клей и гвозди!'
      },
      {
        title: 'Меню сайта. Как не заблудиться.',
        text: '<b>Узнаем, что такое блок</b>, как применить к нему стили и как заставить его вести себя так, как нужно. <b>Построим сайт словно дом из блоков-кирпичиков</b>, ставя их друг на друга, заставляя их растекаться деформироваться, а если нужно применим клей и гвозди!'
      },
      {
        title: 'Резиновые сайты. Зачем и куда их растягивать.',
        text: '<b>Узнаем, что такое блок</b>, как применить к нему стили и как заставить его вести себя так, как нужно. <b>Построим сайт словно дом из блоков-кирпичиков</b>, ставя их друг на друга, заставляя их растекаться деформироваться, а если нужно применим клей и гвозди!'
      },
      {
        title: 'Практика, верстка по дизайну.',
        text: '<b>Узнаем, что такое блок</b>, как применить к нему стили и как заставить его вести себя так, как нужно. <b>Построим сайт словно дом из блоков-кирпичиков</b>, ставя их друг на друга, заставляя их растекаться деформироваться, а если нужно применим клей и гвозди!'
      },
      {
        title: 'Презентация.',
        text: '<b>Узнаем, что такое блок</b>, как применить к нему стили и как заставить его вести себя так, как нужно. <b>Построим сайт словно дом из блоков-кирпичиков</b>, ставя их друг на друга, заставляя их растекаться деформироваться, а если нужно применим клей и гвозди!'
      },
    ]

    return { items, currentItem }
  }
})
</script>

<style lang="scss" scoped>
.program-section {
  padding-bottom: 150px;
  .section-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2 {
      margin-bottom: 30px;
    }
    .collapse-items {
      width: 100%;
      display: grid;
      grid-column-gap: 30px;
      grid-template-columns: 1fr 1fr;
      @media screen and (max-width: 550px) {
        grid-template-columns: 1fr;
      }
      .collapse-item {
        user-select: none;
        cursor: pointer;
        border-bottom: 1px solid #57557A;
        width: 100%;
        display: flex;
        padding: 26px 0;
        justify-content: space-between;
        &:nth-child(-n + 2) {
          border-top: 1px solid #57557A;
        }
        .button-wrap {
          max-height: 50px;
        }
        .count {
          font-weight: 800;
          font-size: 30px;
          color: #FF9649;
          background: linear-gradient(180deg, #FF9649 0%, #FF5C00 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-right: 10px;
        }
        .title-wrap {
          transform: translateY(6px);
          display: flex;
          align-items: center;
          .item-title {
            font-size: 20px;
          }
        }
        p {
          padding-top: 10px;
          max-height: 0;
          overflow: hidden;
          transition: all .5s ease-in-out;
          opacity: 0;
          visibility: hidden;
        }
        &.active {
          p {
            padding-top: 26px;
            max-height: 500px;
            opacity: 1;
            visibility: visible;
          }
        }
      }
    }
    .info-card {
      background-color: #454568;
      padding: 15px 53px 15px 20px;
      max-width: 530px;
      z-index: 2;
      border-radius: 5px;
      text-align: center;
      position: relative;
      margin-bottom: 60px;
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
    }
  }
}
</style>