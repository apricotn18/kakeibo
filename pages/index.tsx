import { useState } from 'react';
import UsersProviderComp, { useUsers } from './components/UserContext/UsersContext';
import PricesProviderComp from './components/PricesContext/PricesContext';
import HeaderComp from './components/Header/HeaderComp';
import SummaryComp from './components/Summary/SummaryComp';
import TabComp from './components/Tab/TabComp';
import TabItemComp from './components/Tab/TabItem/TabItemComp';
import InputPayComp from './components/InputPay/InputPayComp';
import MessageComp from './components/Message/MessageComp';
import ButtonLinkComp from './components/Button/ButtonLinkComp';

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

export default function Index() {
	const users = useUsers();
	const [currentTab, setCurrentTab] = useState(tabInfo[0].key);

	return (
		<div className="wrapper wrapper--white">
			<UsersProviderComp>
				<PricesProviderComp>
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
										<InputPayComp isAdd={true} />
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
				</PricesProviderComp>
			</UsersProviderComp>
		</div>
	);
}
