import React from 'react';
import Header from './component/header/Header';
import Summary from './component/summary/Summary';

export default function Index() {
	return (
		<>
			<Header />
			<Summary />
			<ul>
				<li>ゆうじに追加</li>
				<li>きょうこ</li>
			</ul>
		</>
	);
}
