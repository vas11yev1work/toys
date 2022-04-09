import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import getUniversalStorage from '@/assets/js/storage.universal';
import {PiniaPluginContext} from 'pinia';
import {NuxtApp} from 'nuxt3';

export default function ({$pinia, ssrContext}: NuxtApp) {
  $pinia.use(({options}: PiniaPluginContext) => {
    if (options.persist) {
      const storage = getUniversalStorage(ssrContext);
      if (options.persist === true) options.persist = {storage}
      else options.persist = {...options.persist, storage}
    }
  });
  $pinia.use(piniaPluginPersistedstate);
}