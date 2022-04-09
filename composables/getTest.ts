import {useTest} from '@/stores/test';
import testsAll from '@/assets/data/tests.json';

const getTest = async () => {
  const testStore = useTest();
  if (!testStore.current) return {};
  return {
    ...testsAll.find(({code}) => code === testStore.current),
    ...(await import(`../assets/data/tests/${testStore.current}.json`)).default
  }
};

export default getTest;