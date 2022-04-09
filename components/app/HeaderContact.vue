<template>
  <div class="header-contact">
    <a class="phone" href="tel:+79273454566">+7 (927) 345 - 45 - 66</a>
    <div class="actions">
      <Button data-fancybox href="#help" outlined>Заказать звонок</Button>
      <Button class="user" icon>
        <img src="@/assets/images/user-avatar.svg" alt="user">
      </Button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Button from '~/components/basic/Button.vue'

export default defineComponent({
  components: { Button },
})
</script>

<style scoped>
.header-contact {
  display: flex;
  align-items: center;
}
.actions {
  display: flex;
}
.phone {
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  padding: 0 44px;
  white-space: nowrap;
}
.user {
  margin-left: 44px;
}
@media screen and (max-width: 550px) {
  .header-contact {
    flex-direction: column;
    align-items: flex-start;
  }
  .phone {
    padding: 0;
  }
  .actions {
    margin-top: 20px;
  }
  .user {
    margin-left: 20px;
  }
}
</style>