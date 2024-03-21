import { createContext, useContext } from 'react';
import { db } from '../../../src/firebase/base';
import { collection, getDocs } from 'firebase/firestore';
import { User } from '../../../src/type/type';

const initState: User[] = [];
const docs = await getDocs(collection(db, 'users'));
docs.forEach((doc) => {
	const data = doc.data();
	if (data) {
		initState.push({
			name: data.name,
		});
	}
});

const UsersContext = createContext(initState);

export default function UsersProviderComp(props: { children: React.ReactNode }) {
	return (
		<UsersContext.Provider value={initState}>
			{props.children}
		</UsersContext.Provider>
	);
}

export function useUsers() {
	return useContext(UsersContext);
}
