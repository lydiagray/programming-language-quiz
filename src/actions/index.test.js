import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { submitPageAction } from './index'

const middleware = [thunk]
const mockStore = configureMockStore(middleware)

describe('submitPageAction()', () => {
	it('should dispatch to the reducer', () => {
		// Arrange
		const store = mockStore({})
		const data = [{
			'type': 'test'
		}]
		const callback = jest.fn() 

		// Act
		store.dispatch(submitPageAction(data, callback))

		// Assert
		expect(store.getActions()).toContainEqual(data[0])
	})

	it('should dispatch to the next page', () => {
		// Arrange
		const store = mockStore({})
		const data = [{
			'type': 'test'
		}]
		const callback = () => {
			return '/test'
		}

		const expectedDispatch = {'payload': {'args': ['/test'], 'method': 'push'}, 'type': '@@router/CALL_HISTORY_METHOD'}
		// Act
		store.dispatch(submitPageAction(data, callback))

		// Assert
		expect(store.getActions()).toContainEqual(expectedDispatch)
	})
})