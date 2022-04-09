import scrollTo from '@/composables/scrollTo';
import {useUser} from '@/stores/user';
import {useTest} from '@/stores/test';
// @ts-ignore
import Fancybox from '@fancyapps/ui/dist/fancybox.mjs';

const nextStep = (context: any, from: string) => {
  const userStore = useUser();
  const testStore = useTest();
  Fancybox.getInstance()?.close();

  if (!userStore.sex) {
    Fancybox.show([{src: '#sex'}]);
    return false;
  }

  if (!testStore.current || from === 'age') {
    Fancybox.show([{src: '#tests'}]);
    return false;
  }

  context.$nextTick(() => {
    scrollTo('test');
  });
}

export default nextStep;