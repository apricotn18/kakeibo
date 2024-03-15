import { createContext, useContext, useEffect, useReducer } from 'react';
import { Price } from '../../../src/type/type';
import { db } from '../../../src/firebase/base';
import { collection, doc, getDocs, updateDoc } from 'firebase/firestore';

type Action = {
	type: 'update' | 'delete';
	item: Price;
}

const initState: Price[] = [];
const docs = await getDocs(collection(db, 'prices'));
docs.forEach((doc) => {
	const data = doc.data();
	if (data) {
		initState.push({
			id: doc.id,
			key: data.key,
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
		case 'update': {
			const nextState = state.map((item) => {
				if (item.id === action.item.id) {
					return action.item;
				}
				return item;
			});

			const ref = doc(db, 'prices', action.item.id);
			updateDoc(ref, action.item);

			return nextState;
		
		}
		case 'delete': {
			return state.filter((item) => {
				return item.id !== action.item.id;
			});
		}
	}
}
