export type User = {
	name: string;
}

export type Price = {
	id: number;
	name: string;
	price: number | '';
	subject: string;
	allocation: string[];
	timestamp: {
		seconds: number;
	};
}

export type Buylist = {
	name: string;
	date: Date;
}
