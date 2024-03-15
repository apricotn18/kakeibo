import { useContext, useEffect, useReducer, useState } from 'react';
import Button from '../Button/ButtonComp';
import { inputsReducer } from './inputsReducer';
import { UsersContext } from '../UsersContext';
import { usePricesDispatch } from '../PricesContext/PricesContext';
import { User, Price } from '../../../src/type/type';
import style from './style.module.scss';

type Props = {
	item?: Price;
}

export default function InputPayComp(props: Props) {
	const users: User[] = useContext(UsersContext);
	const initInput = props.item ? props.item : {
		name: users[0].name,
		allocation: users.map(user => user.name),
	}
	const pricesDispatch = usePricesDispatch();
	const [state, dispatch] = useReducer(inputsReducer, initInput);
	const [isDisable, setIsDisable] = useState(false);

	useEffect(() => {
		const shouldDisabled = state.price > 0 && !!state.subject && state.allocation.length > 0;
		setIsDisable(shouldDisabled);
	}, [state])

	/** 入力値を更新 */
	function handleChangeInput (e: React.ChangeEvent<HTMLInputElement>) {
		dispatch({
			type: 'changed',
			input: {
				[e.currentTarget.name]: e.currentTarget.value,
			},
		});
	};

	/** 立て替え対象を更新 */
	function handleChangeAllocation (e: React.ChangeEvent<HTMLInputElement>) {
		dispatch({
			type: 'changed_allocation',
			input: {
				checked: e.currentTarget.checked,
				value: e.currentTarget.value,
			},
		});
	};

	/** データ送信 */
	const handleSubmit = () => {
		setIsDisable(false);
		pricesDispatch({
			type: 'update',
			item: state,
		});
		alert('更新しました');
	};

	return (
		<div>
			<form className={style.wrapper}>
				{/* 立て替えた人 */}
				<p className={style.subtitle}>立て替えた人</p>
				<fieldset className={style.userWrapper}>
					{!users ? '' : users.map((user, index) =>
						<div key={'name'+index}>
							<input
								type="radio"
								id={'name'+index}
								value={user.name}
								name="name"
								className={style.userRadio}
								defaultChecked={state.name ? user.name === state.name : index === 0}
								onChange={handleChangeInput}
							/>
							<label htmlFor={'name'+index} className={style.userLabel}><span>{user.name}</span></label>
						</div>
					)}
				</fieldset>

				{/* 金額 */}
				<fieldset className={style.priceWrapper}>
					<label className={style.label}>金額</label>
					<input
						type="number"
						name="price"
						value={state.price || ''}
						className={style.input}
						onChange={handleChangeInput}
						placeholder="1200"
					/>
					<span className={style.yen}>円</span>
				</fieldset>

				{/* 件名 */}
				<fieldset className={style.subjectWrapper}>
					<label className={style.label}>件名</label>
					<input
						type="text"
						name="subject"
						value={state.subject || ''}
						className={style.input}
						onChange={handleChangeInput}
						placeholder="ラーメン代"
					/>
				</fieldset>

				{/* 立て替え対象 */}
				<p className={style.subtitleAllocation}>立て替え対象</p>
				<fieldset className={style.allocationWrapper}>
					{!users ? '' : users.map((user, index) =>
						<div key={'allocation'+index}>
							<input
								type="checkbox"
								id={'allocation'+index}
								value={user.name}
								name="allocation"
								className={style.allocationCheckbox}
								defaultChecked={state.allocation.includes(user.name)}
								onChange={handleChangeAllocation}
							/>
							<label htmlFor={'allocation'+index} className={style.allocationLabel}><span>{user.name}</span></label>
						</div>
					)}
				</fieldset>

				{/* 送信ボタン */}
				<fieldset>
					<Button label="登録する" handleClick={handleSubmit} isDisable={isDisable} />
				</fieldset>
			</form>
		</div>
	);
}
