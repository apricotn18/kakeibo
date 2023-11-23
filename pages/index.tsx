import React, { useState } from 'react';
import Header from './component/header/Header';
import Summary from './component/summary/Summary';
import Form from './component/form/Form';
import { Price } from './assets/js/type'

type Props = {
	price: Price[];
}

export default function Index(props: Props) {
	return (
		<>
			<Header />
			<Summary />
			<Form price={props.price} />
		</>
	);
}
