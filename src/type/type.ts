export type User = {
	name: string;
}

export type Price = {
	id: string;
	name: string;
	price: string;
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
