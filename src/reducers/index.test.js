import rootReducer from './index.js'

describe('rootReducer', () => {
	it('should return a function', () => {
		// Arrange

		// Act
		const result = rootReducer

		// Assert
		expect(typeof result).toEqual('function')
	})
})