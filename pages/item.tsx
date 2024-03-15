import { useSearchParams } from 'next/navigation';
import PricesProviderComp, { usePrices } from './components/PricesContext/PricesContext';
import HeaderComp from './components/Header/HeaderComp';
import LinkComp from './components/Button/LinkComp';
import InputPayComp from './components/InputPay/InputPayComp';
import { getUsers, UsersContext } from './components/UsersContext';

const users = getUsers();

export default function Index() {
	const key = useSearchParams().get('key');
	const prices = usePrices();
	const item = prices.filter(item => item.key === Number(key));

	return (
		<div className="wrapper wrapper--white">
			<UsersContext.Provider
				value={users}
			>
				<PricesProviderComp>
					<HeaderComp />
					<section>
						<InputPayComp item={item[0]} />
						<LinkComp href="/history" marginTop={30}>立て替え履歴一覧へ戻る</LinkComp>
					</section>
				</PricesProviderComp>
			</UsersContext.Provider>
		</div>
	);
}
