module.exports = {
	preset: 'ts-jest',
	transform: {
		'^.+\\.(ts|tsx)$': 'ts-jest',
		'^.+\\.(js|jsx)$': ['babel-jest', { presets: ['next/babel'] }],
		'^.+\\.(css|scss)$': 'jest-transform-stub',
	},
	globals: {
		'ts-jest': {
			tsconfig: {
				jsx: 'react-jsx',
			},
		},
	},
	testEnvironment: 'jsdom',
};