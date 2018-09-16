import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

export class AgeBracket extends Component {
    constructor(props) {
        super(props)

        this.state = {
            ageBracket: {
                value: this.props.questions.ageBracket || '',
                isValid: this.props.questions.ageBracket ? true : false
            }
        }
    }

    render() {
        return(
            <Fragment>
                <h1>What programming language are you?</h1>
            </Fragment>
        )
    }
}

AgeBracket.propTypes = {
    history: PropTypes.object,
    dispatch: PropTypes.func,
    questions: PropTypes.object
}

const mapPropsToState = /* istanbul ignore next */ state => {
    return {
        questions: state.questions
    }
}

export default connect(mapPropsToState)(AgeBracket)