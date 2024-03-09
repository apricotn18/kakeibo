import HeaderComp from './components/Header/HeaderComp';
import SummaryComp from './components/Summary/SummaryComp';
import TabComp from './components/Tab/TabComp';
import PayFormComp from './components/PayForm/PayFormComp';
import BuylistFormComp from './components/BuylistForm/BuylistFormComp';
import { getUsers, UsersContext } from './components/UsersContext';
import { getPrices, PricesContext } from './components/PricesContext';

export default function Index() {
	const users = getUsers();

	return (
		<UsersContext.Provider
			value={users}
		>
		<PricesContext.Provider
			value={getPrices()}
		>
			<HeaderComp />
			<SummaryComp />
			{users && users.length > 0
				? (
					<>
						{/* TODO: props.childrenを使ってタブ切り替えができるようにする */}
						<TabComp />
						<PayFormComp />
						{/* <BuylistFormComp /> */}
					</>
				)
				: <div>ユーザー登録をお願いします</div>
			}
		</PricesContext.Provider>
		</UsersContext.Provider>
	);
}
