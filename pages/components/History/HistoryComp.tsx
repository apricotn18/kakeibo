import style from './style.module.scss';

export default function BuylistComp(props: Props) {
	return (
		<div className={style.wrapper}>
			<h1>買い物リスト</h1>
			<ul className={style.list}>
				{/* {!list ? '' : list.map((item, index) =>
					<li key={index} className={style.item}>
						<div className={style.date}>{new Date(item.date).toLocaleDateString()}</div>
						<div className={style.name}>{item.name}</div>
					</li>
				)} */}
			</ul>
		</div>
	);
}
