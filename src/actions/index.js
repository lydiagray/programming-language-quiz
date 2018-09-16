import { push } from 'react-router-redux'

export const submitPageAction = (data, callback) => {
    return(dispatch, getState) => {
        const state = getState()

        let nextPage = callback(state)

        data.forEach((action) => {
            dispatch(
                action
            )
        })

        dispatch(
            push(nextPage)
        )
    }
}