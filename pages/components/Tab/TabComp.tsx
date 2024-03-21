import style from './style.module.scss';

type Tabs = {
	key: string;
	label: string;
};

type Props = {
	children: React.ReactNode;
	tabs: Tabs[];
	current: string;
	setCurrent: React.Dispatch<React.SetStateAction<string>>;
}

export default function TabComp(props: Props) {
	/** タブclick */
	function handleTabClick (e: React.MouseEvent<HTMLButtonElement>) {
		const key = e.currentTarget.dataset.key;
		if (key) {
			props.setCurrent(key);
		}
	};

	return (
		<>
			<div className={style.wrapper}>
				{!props.tabs ? '' : props.tabs.map((item, index) =>
					<div key={index} className={style.item}>
						<button
							type="button"
							className={props.current === item.key ? style.bodyActive : style.body}
							data-key={item.key}
							onClick={handleTabClick}
						>
							{item.label}
						</button>
					</div>
				)}
			</div>
			{props.children}
		</>
	);
}
