import React, { Component } from 'react';
import { connect } from 'react-redux';
import { submit } from 'redux-form';
import { push } from 'react-router-redux';
import ProgressBar from '../../common/ProgressBar/ProgressBar';
import MetadataForm from './MetadataForm/index';
import BottomBar from '../../common/BottomBar/BottomBar';
import * as signupActions from '../signup_actions';
import { toTimeStamp } from '../../../utils/date_related';

class Step2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            birthDate: {
                DD: null,
                MM: null,
                YYYY: null,
            },
            gender: {
                selectedGender: undefined,
                showGenderValidationError: false,
            },
            how_did_you_hear: null,
        }
    }

    render() {
        const { submit, setMetadata, setAppState, push } = this.props;
        const { birthDate, gender } = this.state;
        return (
            <div style={{ marginBottom: 20, }}>
                <ProgressBar step={2} title='Signup' />
                <MetadataForm
                    onSubmit={ ({ DD, MM, YYYY, gender, how_did_you_hear }) => {
                        const birthTimestamp = toTimeStamp({ DD, MM, YYYY, });
                        if (! how_did_you_hear) {
                            how_did_you_hear = null;
                        }

                        setMetadata({ date_of_birth: birthTimestamp, gender, how_did_you_hear })
                        setAppState({ loaded: false });
                        // some async things like waiting async action to return
                        setTimeout(() => {
                            setAppState({ loaded: true })

                            //redirect to /step3
                            push('/step3');
                        }, 1000);
                    }}
                    setBirthDateSubState={ (value) => this.setState({ birthDate: { ...birthDate, ...value } }) }
                    setGenderSubState={ (value) => { this.setState({ gender: { ...gender, ...value } }) } }
                    setHowHearSubState={ (value) => this.setState({ how_did_you_hear: value }) }
                    {...this.state}
                />
                <BottomBar onNextClick={() => submit('MetadataForm')} />
            </div>
        );

    }

}

export default connect(null, { submit, ...signupActions, push })(Step2);