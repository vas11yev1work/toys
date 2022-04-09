import Cookies from 'js-cookie';
import cookie from 'cookie';
import {StorageLike} from 'pinia-plugin-persistedstate';

// @ts-ignore
const getUniversalStorage: (context: any) => StorageLike = (context: any) => ({
  getItem: (key: string) => process.server ? cookie.parse(context.req.headers.cookie)[key] : Cookies.get(key),
  setItem: (key: string, value: string) => Cookies.set(key, value, {expires: 365, secure: false}),
  removeItem: (key: string) => Cookies.remove(key),
});

export default getUniversalStorage;