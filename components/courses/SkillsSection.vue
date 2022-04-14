<template>
  <section class="skill-section">
    <div class="container">
      <div class="section-content">
        <div class="description">
          <div class="text-wrap">
            <h3>Чему научится ребенок на курсе</h3>
            <p class="desc"><b>На занятиях ребенок познакомиться с клавиатурой</b>, получить навык свободного владению мышью, повысит скорость печати. <b>Будет развивать пространственное мышление, повышать знания по математике и логике.</b></p>
          </div>
          <div class="blocks">
            <div class="block orange">
              <div class="block-title">
                <img class="icon" src="@/assets/images/skills-icon-blue.svg" alt="icon">
                <h4>Гибкие навыки</h4>
              </div>
              <p class="info-text"><b>Дети разовьют креативность</b>, навык работы в команде, а также проектное и логическое мышление. <b>Эти навыки пригодятся в учебе, жизни и будущей профессии.</b></p>
            </div>
            <div class="block blue">
              <div class="block-title">
                <img class="icon" src="@/assets/images/skills-icon-orange.svg" alt="icon">
                <h4>Гибкие навыки</h4>
              </div>
              <p class="info-text"><b>Дети разовьют креативность</b>, навык работы в команде, а также проектное и логическое мышление. <b>Эти навыки пригодятся в учебе, жизни и будущей профессии.</b></p>
            </div>
            <div class="block blue">
              <div class="block-title">
                <img class="icon" src="@/assets/images/skills-icon-orange.svg" alt="icon">
                <h4>Гибкие навыки</h4>
              </div>
              <p class="info-text"><b>Дети разовьют креативность</b>, навык работы в команде, а также проектное и логическое мышление. <b>Эти навыки пригодятся в учебе, жизни и будущей профессии.</b></p>
            </div>
            <div class="block orange">
              <div class="block-title">
                <img class="icon" src="@/assets/images/skills-icon-blue.svg" alt="icon">
                <h4>Гибкие навыки</h4>
              </div>
              <p class="info-text"><b>Дети разовьют креативность</b>, навык работы в команде, а также проектное и логическое мышление. <b>Эти навыки пригодятся в учебе, жизни и будущей профессии.</b></p>
            </div>
          </div>
        </div>
        <div class="image">
          <img src="@/assets/images/skills-boy.png" alt="boy">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.skill-section {
  padding-bottom: 150px;
  .section-content {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 30px;
    .description {
      h3 {
        font-size: 46px;
        padding-bottom: 20px;
        margin: 0;
      }
      .desc {
        text-align: left;
        margin-bottom: 30px;
      }
      .blocks {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 30px;
        .block {
          border-radius: 30px;
          padding: 35px;
          .block-title {
            display: flex;
            align-items: center;
            margin-bottom: 15px;
            h4 {
              margin: 0;
              padding-left: 20px;
              font-size: 24px;
            }
          }
          &.orange {
            background: linear-gradient(180deg, #FF9649 0%, #FF5C00 100%);
          }
          &.blue {
            background: linear-gradient(277.57deg, #2E2B88 0.3%, #383585 104.44%, #0B104F 112.2%, #514E9C 139.11%);
          }
        }
      }
    }
    .image {
      img {
        border-radius: 50px;
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>