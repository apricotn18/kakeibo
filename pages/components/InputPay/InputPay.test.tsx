import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import InputPayComp from './InputPayComp';

describe('入力テスト', () => {
	test('ボタン活性パターン', async () => {
		const item = {
			"id": "kQaEHjVrPemj0tEdTn09",
			"name": "ユーザー1",
			"price": "200",
			"subject": "にんじん",
			"allocation": [
				"ユーザー1",
				"ユーザー2"
			],
			"timestamp": {
				"seconds": 1710845043,
			}
		};
		render(<InputPayComp isAdd={true} item={item} />);
		const button = screen.getByRole('button', {name: '追加する'});
		expect(button).not.toHaveAttribute('disabled');
	});
	test('ボタン非活性パターン', async () => {
		const item = {
			"id": "kQaEHjVrPemj0tEdTn09",
			"name": "ユーザー1",
			"price": "200",
			"subject": "にんじん",
			"allocation": [],
			"timestamp": {
				"seconds": 1710845043,
			}
		};
		render(<InputPayComp isAdd={true} item={item} />);
		const button = screen.getByRole('button', {name: '追加する'});
		expect(button).toHaveAttribute('disabled');
	});
});