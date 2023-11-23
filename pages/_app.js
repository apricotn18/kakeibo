import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, getDocs } from "firebase/firestore";
import './assets/css/reset.scss';
import './assets/css/common.scss';

const price = [];

// firebase
const firebaseConfig = {
	apiKey: "AIzaSyArlq6WbXEPcDINt-SWqf4wRjGc-TM85Js",
	authDomain: "kakeibo-fb1ed.firebaseapp.com",
	projectId: "kakeibo-fb1ed",
	storageBucket: "kakeibo-fb1ed.appspot.com",
	messagingSenderId: "798220104610",
	appId: "1:798220104610:web:f1211f4d46d05fedef78fb"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const queries = await getDocs(query(collection(db, "price")));
queries.forEach((doc) => {
	price.push(doc.data());
});

export default function MyApp({ Component, pageProps }) {
	return (
		<>
			<Component {...pageProps} price={price} />
		</>
	);
}
