import {getDocs, collection} from '@firebase/firestore';

const useCollection = (collectionName) => {
  const fetchedCollection = ref([]);
  const db = useState('db').value;
  onMounted(async () => {
    fetchedCollection.value = (await getDocs(collection(db, collectionName))).docs.map(doc => ({id: doc.id, ...doc.data()}))
  });
  return fetchedCollection;
}

export default useCollection;