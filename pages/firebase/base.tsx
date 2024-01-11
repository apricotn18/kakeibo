import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyArlq6WbXEPcDINt-SWqf4wRjGc-TM85Js',
	authDomain: 'kakeibo-fb1ed.firebaseapp.com',
	projectId: 'kakeibo-fb1ed',
	storageBucket: 'kakeibo-fb1ed.appspot.com',
	messagingSenderId: '798220104610',
	appId: '1:798220104610:web:f1211f4d46d05fedef78fb'
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);