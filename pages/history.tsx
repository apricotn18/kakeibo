import { useState } from 'react';
import Link from 'next/link';
import HeaderComp from './components/Header/HeaderComp';
import HistoryComp from './components/History/HistoryComp';
import TabComp from './components/Tab/TabComp';
import TabItemComp from './components/Tab/TabItem/TabItemComp';
import InputPayComp from './components/InputPay/InputPayComp';
import MessageComp from './components/Message/MessageComp';
import ButtonLinkComp from './components/ButtonLink/ButtonLinkComp';
import { getUsers, UsersContext } from './components/UsersContext';
import { getPrices, PricesContext } from './components/PricesContext';

const tabInfo = [
	{
		key: 'pay',
		label: '支払い入力'
	},
	{
		key: 'buylist',
		label: '買い物リスト入力'
	},
];
const users = getUsers();

export default function Index() {
	const [currentTab, setCurrentTab] = useState(tabInfo[0].key);

	return (
		<UsersContext.Provider
			value={users}
		>
		<PricesContext.Provider
			value={getPrices()}
		>
			<HeaderComp />
			{users && users.length > 0
				? (
					<>
						<HistoryComp />
						<TabComp
							tabs={tabInfo}
							current={currentTab}
							setCurrent={setCurrentTab}
						>
							<TabItemComp isCurrent={currentTab === tabInfo[0].key}>
								<InputPayComp />
							</TabItemComp>
							<TabItemComp isCurrent={currentTab === tabInfo[1].key}>
								ああ
							</TabItemComp>
						</TabComp>
					</>
				) : (
					<MessageComp>
						ユーザー登録をお願いします<br /><br />
						<ButtonLinkComp href="/">ユーザー登録</ButtonLinkComp>
					</MessageComp>
				)
			}
		</PricesContext.Provider>
		</UsersContext.Provider>
	);
}
