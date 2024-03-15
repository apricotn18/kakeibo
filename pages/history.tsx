import PricesProviderComp from './components/PricesContext/PricesContext';
import HeaderComp from './components/Header/HeaderComp';
import HistoryComp from './components/History/HistoryComp';
import MessageComp from './components/Message/MessageComp';
import ButtonLinkComp from './components/Button/ButtonLinkComp';
import { getUsers, UsersContext } from './components/UsersContext';

const users = getUsers();

export default function Index() {
	return (
		<div className="wrapper">
			<UsersContext.Provider
				value={users}
			>
				<PricesProviderComp>
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
				</PricesProviderComp>
			</UsersContext.Provider>
		</div>
	);
}
