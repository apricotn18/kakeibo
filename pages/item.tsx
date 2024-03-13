import { useSearchParams } from "next/navigation";
import HeaderComp from './components/Header/HeaderComp';
import ItemComp from './components/History/HistoryComp';
import LinkComp from './components/Button/LinkComp';
import InputPayComp from './components/InputPay/InputPayComp';
import { getUsers, UsersContext } from './components/UsersContext';
import { getPrices, PricesContext } from './components/PricesContext';

const users = getUsers();
const prices = getPrices()

export default function Index() {
	const id = useSearchParams().get('id');
	const item = prices.filter(item => item.id === Number(id));

	return (
		<div className="wrapper wrapper--white">
			<UsersContext.Provider
				value={users}
			>
			<PricesContext.Provider
				value={prices}
			>
				<HeaderComp />
				<section>
					<InputPayComp item={item[0]} />
					<LinkComp href="/history" marginTop={30}>立て替え履歴一覧へ戻る</LinkComp>
				</section>
			</PricesContext.Provider>
			</UsersContext.Provider>
		</div>
	);
}
