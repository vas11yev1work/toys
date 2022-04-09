import {addDoc, collection} from 'firebase/firestore';
import config from '@/config';

const getTextForEmail = ({labels, data}: any) => {
  return Object.keys(labels).reduce((acc, key) => {
    acc += `${labels[key]}: ${data[key]}\n`;
    return acc;
  }, '');
}

const getHTMLForEmail = ({labels, data}: any) => {
  return Object.keys(labels).reduce((acc, key) => {
    acc += `<b>${labels[key]}:</b> ${data[key]}<br/>`;
    return acc;
  }, '');
}

const addToCollection = async (collectionName: string, data: any) => {
  if (collectionName === 'mail') {
    data = {
      to: data.to || config.email,
      message: {
        subject: data.subject,
        text: getTextForEmail(data),
        html: getHTMLForEmail(data)
      }
    }
  }
  const db = useState('db').value;
  // @ts-ignore
  return await addDoc(collection(db, collectionName), data);
}
export default addToCollection;