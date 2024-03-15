import { Price } from '../../../src/type/type';

type Action = {
	type: 'added' | 'changed' | 'changed_allocation' | 'submit';
	input: any;
}

export function inputsReducer(state: Price, action: Action) {
	switch (action.type) {
		case 'added': {
			// return [
			// 	...state,
			// 	{
			// 		name: action.name,
			// 		price: action.price,
			// 		subject: action.subject,
			// 		allocation: action.allocation,
			// 	}
			// ]
		}
		case 'changed': {
			return {
				...state,
				...action.input,
			}
		}
		case 'changed_allocation': {
			if (action.input.checked) {
				return {
					...state,
					'allocation': [
						...state.allocation,
						action.input.value
					],
				}
			} else {
				return {
					...state,
					'allocation': state.allocation.filter(item => item !== action.input.value),
				}
			}
		}
	}
};