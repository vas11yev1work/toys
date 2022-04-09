// Import the functions you need from the SDKs you need
// @ts-ignore
import {defineNuxtPlugin, useState} from '#app'
import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
import {getFirestore} from '@firebase/firestore';
import {getAuth} from '@firebase/auth';
import {NuxtApp} from 'nuxt3';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBN6U6UOxbm_hrHcnNptFrD57Yy3idFk0A',
  authDomain: 'toys-7d67c.firebaseapp.com',
  projectId: 'toys-7d67c',
  storageBucket: 'toys-7d67c.appspot.com',
  messagingSenderId: '1040321425451',
  appId: '1:1040321425451:web:e8d2f4dadff6dc2ab77a6e',
  measurementId: 'G-67G1R8SH2S'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);

export default defineNuxtPlugin((nuxtApp: NuxtApp) => {
  useState('firebaseApp', () => app)
  useState('auth', () => auth)
  useState('db', () => db)
});