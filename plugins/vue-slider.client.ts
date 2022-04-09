import {NuxtApp} from 'nuxt3';
// @ts-ignore
import VueTheMask from 'vue-the-mask';
import VueSlider from 'vue-slider-component';
import 'vue-slider-component/theme/antd.css';

export default function (nuxtApp: NuxtApp) {
  nuxtApp.vueApp.component('VueSlider', VueSlider);
}