import { useSearchParams } from "next/navigation";
import HeaderComp from './components/Header/HeaderComp';
import ItemComp from './components/History/HistoryComp';
import InputPayComp from './components/InputPay/InputPayComp';
import { getUsers, UsersContext } from './components/UsersContext';
import { getPrices, PricesContext } from './components/PricesContext';

const users = getUsers();
const prices = getPrices()

export default function Index() {
	const id = useSearchParams().get('id');
	const item = prices.filter(item => item.id === Number(id));
	console.log(item);

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
				</section>
			</PricesContext.Provider>
			</UsersContext.Provider>
		</div>
	);
}
