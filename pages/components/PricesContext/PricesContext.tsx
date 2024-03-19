import { createContext, useContext, useReducer } from 'react';
import { db } from '../../../src/firebase/base';
import { collection, doc, getDocs, addDoc, updateDoc, deleteDoc, serverTimestamp } from 'firebase/firestore';
import { Price } from '../../../src/type/type';

type Action = {
	type: 'add' | 'update' | 'delete';
	item: Price;
	initInput?: any;
}

const initState: Price[] = [];
const docs = await getDocs(collection(db, 'prices'));
docs.forEach((doc) => {
	const data = doc.data();
	if (data) {
		initState.push({
			id: doc.id,
			name: data.name,
			price: data.price,
			subject: data.subject,
			allocation: data.allocation,
			timestamp: data.timestamp,
		});
	}
});

const PricesContext = createContext(initState);
// @ts-ignore
const PricesDispatchContext = createContext<React.Dispatch<Action>>(null);

export default function PricesProviderComp(props: { children: React.ReactNode }) {
	const [state, dispatch] = useReducer(PricesReducer, initState);

	return (
		<PricesContext.Provider value={state}>
			<PricesDispatchContext.Provider value={dispatch}>
				{props.children}
			</PricesDispatchContext.Provider>
		</PricesContext.Provider>
	);
}

export function usePrices() {
	return useContext(PricesContext);
}

export function usePricesDispatch() {
	return useContext(PricesDispatchContext);
}

export function PricesReducer(state: Price[], action: Action) {
	switch (action.type) {
		case 'add': {
			const nextItem = {
				...action.item,
				timestamp: serverTimestamp(),
			}
			addDoc(collection(db, 'prices'), nextItem);

			return [
				...state,
				action.item,
			];
		}
		case 'update': {
			const ref = doc(db, 'prices', action.item.id);
			updateDoc(ref, action.item);

			return state.map((item) => {
				if (item.id === action.item.id) {
					return action.item;
				}
				return item;
			});
		
		}
		case 'delete': {
			const ref = doc(db, 'prices', action.item.id);
			deleteDoc(ref).then(() => location.href = '/history');

			return state.filter((item) => {
				return item.id !== action.item.id;
			});
		}
	}
}
