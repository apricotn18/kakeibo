import React from 'react';
import Header from './component/header/Header';
import Summary from './component/summary/Summary';
import Form from './component/form/Form';
import { User, Price } from './assets/js/type';

type Props = {
	users: User[];
	price: Price[];
}

export default function Index(props: Props) {
	return (
		<>
			<Header />
			{props.users.length > 0
				? (
					<>
						<Summary />
						<Form users={props.users} price={props.price} />
					</>
				)
				: <div>ユーザー登録をお願いします</div>
			}
		</>
	);
}
