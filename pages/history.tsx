import { useSearchParams } from 'next/navigation';
import PricesProviderComp, { usePrices } from './components/PricesContext/PricesContext';
import HeaderComp from './components/Header/HeaderComp';
import HistoryComp from './components/History/HistoryComp';
import MessageComp from './components/Message/MessageComp';
import ButtonLinkComp from './components/Button/ButtonLinkComp';
import LinkComp from './components/Button/LinkComp';
import InputPayComp from './components/InputPay/InputPayComp';
import { getUsers, UsersContext } from './components/UsersContext';

const users = getUsers();

export default function Index() {
	const prices = usePrices();
	const id = useSearchParams().get('id');
	let Content = null;

	if (!!id) {
		const item = prices.filter(item => item.id === id);
		Content = (
			<>
				<InputPayComp isAdd={false} item={item[0]} />
				<LinkComp href="/history" marginTop={30}>立て替え履歴一覧へ戻る</LinkComp>
			</>
		);
	} else {
		Content = (
			<>
				<h1>立て替え履歴</h1>
				{users && users.length > 0
					? (
						<>
							<HistoryComp />
						</>
					) : (
						<MessageComp>
							ユーザー登録をお願いします<br /><br />
							<ButtonLinkComp href="/">ユーザー登録</ButtonLinkComp>
						</MessageComp>
					)
				}
			</>
		);
	}

	return (
		<div className={!!id ? 'wrapper wrapper--white' : 'wrapper'}>
			<UsersContext.Provider
				value={users}
			>
				<PricesProviderComp>
					<HeaderComp />
					<section>
						{Content}
					</section>
				</PricesProviderComp>
			</UsersContext.Provider>
		</div>
	);
}
