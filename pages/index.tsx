import React, { useState, useCallback } from 'react';
import Header from './component/header/Header';
import Summary from './component/summary/Summary';
import Form from './component/form/Form';
import { User, Price } from './assets/js/type';

type Props = {
	users: User[];
	price: Price[]|undefined;
}

export default function Index(props: Props) {
	const [total, setTotal] = useState<number>(!props.price ? 0 : props.price.reduce((acc, item) => {
		return acc + item.price;
	}, 0));

	const handleChangePrice = useCallback((e: React.MouseEvent<HTMLInputElement>) => {
		setTotal(Number.parseInt(e.currentTarget.value));
	}, []);

	return (
		<>
			<Header />
			{props.users.length > 0
				? (
					<>
						<Summary total={total} />
						<Form users={props.users} />
					</>
				)
				: <div>ユーザー登録をお願いします</div>
			}
		</>
	);
}
