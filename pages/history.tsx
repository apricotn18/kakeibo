import HeaderComp from './components/Header/HeaderComp';
import HistoryComp from './components/History/HistoryComp';
import MessageComp from './components/Message/MessageComp';
import ButtonLinkComp from './components/ButtonLink/ButtonLinkComp';
import { getUsers, UsersContext } from './components/UsersContext';
import { getPrices, PricesContext } from './components/PricesContext';

const users = getUsers();
const prices = getPrices()

export default function Index() {
	return (
		<div className="wrapper">
			<UsersContext.Provider
				value={users}
			>
			<PricesContext.Provider
				value={prices}
			>
				<HeaderComp />
				<section>
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
				</section>
			</PricesContext.Provider>
			</UsersContext.Provider>
		</div>
	);
}
