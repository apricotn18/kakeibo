import { useState } from 'react';
import HeaderComp from './components/Header/HeaderComp';
import SummaryComp from './components/Summary/SummaryComp';
import TabComp from './components/Tab/TabComp';
import TabItemComp from './components/Tab/TabItem/TabItemComp';
import InputPayComp from './components/InputPay/InputPayComp';
import MessageComp from './components/Message/MessageComp';
import ButtonLinkComp from './components/Button/ButtonLinkComp';
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
const prices = getPrices()

export default function Index() {
	const [currentTab, setCurrentTab] = useState(tabInfo[0].key);

	return (
		<div className="wrapper wrapper--white">
			<UsersContext.Provider
				value={users}
			>
			<PricesContext.Provider
				value={prices}
			>
				<HeaderComp />
				{users && users.length > 0
					? (
						<>
							<SummaryComp />
							<TabComp
								tabs={tabInfo}
								current={currentTab}
								setCurrent={setCurrentTab}
							>
								<TabItemComp isCurrent={currentTab === tabInfo[0].key}>
									<InputPayComp />
								</TabItemComp>
								<TabItemComp isCurrent={currentTab === tabInfo[1].key}>
									TODO: これから実装
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
		</div>
	);
}
