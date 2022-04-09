import VueSocialSharing from 'vue-social-sharing';
import {NuxtApp} from 'nuxt3';
// @ts-ignore
import VueTheMask from 'vue-the-mask';

export default function (nuxtApp: NuxtApp) {
  nuxtApp.vueApp.use(VueSocialSharing);
  // @ts-ignore
  nuxtApp.vueApp.use(VueTheMask);
}