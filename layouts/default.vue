<template lang="pug">
.main-container
  header
    .container
      Logo
      Navigation
      HeaderContact
  .main
    slot
  footer
    .container
      .top-row
        Logo
        Navigation
      .bottom-row
        div © 2021-2022, ООО «DNK Code»
        div Сайт создан и разработан&#32;
          a(href="https://crazy.studio" target="_blank"): b CrazyStudio
        div: NuxtLink(to="/policy") Политика конфиденциальности
  div(style="display: none")
    HelpModal(id="help")
  Stars
</template>

<script lang="ts">
// @ts-ignore
import Fancybox from '@fancyapps/ui/dist/fancybox.mjs';
import Logo from '@/components/app/Logo.vue';
import Navigation from '@/components/app/Navigation.vue';
import Button from '@/components/basic/Button.vue';
import HelpModal from '@/components/app/modals/HelpModal.vue'
import Stars from '@/components/app/Stars.vue';
import {defineComponent} from 'vue';
import HeaderContact from '~/components/app/HeaderContact.vue'

export default defineComponent({
  components: {
    HeaderContact,
    Logo,
    Navigation,
    Button,
    HelpModal,
    Stars
  },
  watch: {
    $route() {
      window.scrollTo(0, 0);
    },
  },
  created() {
    Fancybox.bind('[data-fancybox]', {
      l10n: {
        CLOSE: 'Закрыть'
      }
    });
  }
});
</script>