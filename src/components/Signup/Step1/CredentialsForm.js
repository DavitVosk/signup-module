import React, { Component } from 'react';
import { Field, reduxForm, } from 'redux-form';
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import renderTextField from '../../common/renderTextField';
import validate from '../../../utils/validate_credentials';

class CredentialsForm extends Component {
    static childContextTypes = {
        muiTheme: React.PropTypes.object
    }

    getChildContext() {
        return {
            muiTheme: getMuiTheme()
        }
    }

    render() {
        const { handleSubmit, fields: {email} } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <div>
                    <Field name='email'
                           component={renderTextField}
                           label='Email'
                           floatingLabelText='EMAIL IS REQUIRED'
                           floatingLabelStyle={{ color: 'red' }}
                    />
                </div>
                <div>
                    <Field name='password'
                           component={renderTextField}
                           label='PASSWORD'
                           floatingLabelText='PASSWORD'
                           type='password'
                    />
                </div>
                <div>
                    <Field name='confirm_password'
                           component={renderTextField}
                           label='CONFIRM PASSWORD'
                           floatingLabelText='CONFIRM PASSWORD'
                           type='password'
                    />
                </div>
            </form>
        )
    }

}

export default reduxForm({
    form: 'CredentialsForm',
    fields: ['email', 'password', 'confirm_password'],
    validate
})(CredentialsForm);