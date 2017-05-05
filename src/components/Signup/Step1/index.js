import React, { Component } from 'react';
import { connect } from 'react-redux';
import { submit } from 'redux-form';
import { push } from 'react-router-redux';
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import ProgressBar from '../../common/ProgressBar/ProgressBar';
import CredentialsForm from './CredentialsForm';
import BottomBar from '../../common/BottomBar/BottomBar';
import * as signupActions from '../signup_actions';

class Step1 extends Component {
    static childContextTypes = {
        muiTheme: React.PropTypes.object
    }

    getChildContext() {
        return {
            muiTheme: getMuiTheme()
        }
    }

    render() {
        const { submit, setCredentials, setAppState, push } = this.props;
        return (
            <div>
                <ProgressBar step={1} title='Signup' />
                <CredentialsForm onSubmit={ (values) => {
                    setCredentials(values)
                    setAppState({ loaded: false });
                    // some async things like waiting async action to return
                    setTimeout(() => {
                        setAppState({ loaded: true });

                        //redirect to /step3
                        push('/step2');
                    }, 1000);
                } } />
                <BottomBar withoutBack onNextClick={() => submit('CredentialsForm')} />
            </div>
        );

    }

}

export default connect(null, { submit, ...signupActions, push })(Step1);