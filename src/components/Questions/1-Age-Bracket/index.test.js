import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { AgeBracket } from './index'
// import { getPageRoute } from '../../../helpers/pagehelper'

Enzyme.configure({ adapter: new Adapter() })

function setup(props) {
    return mount(<AgeBracket {...props} />)
}

describe('AgeBracket', () => {
    it('should render itself', () => {
        // Arrange
        const props = {
            questions: {
                ageBracket: ''
            }
        }

        const enzymeWrapper = setup(props)

        // Act

        // Assert
        expect(enzymeWrapper.find('h1').exists()).toBe(true)
    })
})