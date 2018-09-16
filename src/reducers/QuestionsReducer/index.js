const QuestionsReducer = (state = {
    ageBracket: ''
}, action) => {
    switch(action.type){
        case 'SUBMIT_AGE_BRACKET':
            return Object.assign({}, state, {
                ageBracket: action.ageBracket
        })
        default:
            return state
    }
}

export default QuestionsReducer