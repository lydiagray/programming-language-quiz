import QuestionsReducer from './index'

describe('QuestionsReducer', () => {
    it('should return initial state', () => {
        expect(QuestionsReducer(undefined, {})).toEqual({
            ageBracket: ''
        })
    })

    it('should handle SUBMIT_AGE_BRACKET', () => {
        expect(QuestionsReducer([], {
            type: 'SUBMIT_AGE_BRACKET',
            ageBracket: '18-25'
        })).toEqual(expect.objectContaining({
            ageBracket: '18-25'
        }))
    })
})