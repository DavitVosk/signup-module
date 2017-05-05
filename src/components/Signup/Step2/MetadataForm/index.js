import React, { Component } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { reduxForm } from 'redux-form';
import { validateMetadata as validate } from '../../../../utils/validate_metadata';
import HowDidYouHear from './HowDidYouHear';
import Gender from './Gender';
import BirthDate from './BirthDate';

class Metadata extends Component {
    static childContextTypes = {
        muiTheme: React.PropTypes.object
    }

    getChildContext() {
        return {
            muiTheme: getMuiTheme()
        }
    }

    render() {
        const {
            birthDate: { DD, MM, YYYY },
            gender: { selectedGender, showGenderValidationError },
            how_did_you_hear,
            setBirthDateSubState, setGenderSubState, setHowHearSubState,
            handleSubmit, change
        } = this.props;

        return (
            <div style={{ marginTop: 35 }}>
                <div>
                    <div style={{ marginBottom: 15 }}>DATE OF BIRTH</div>
                    <form onSubmit={handleSubmit}>
                        <BirthDate {...{ DD, MM, YYYY, setBirthDateSubState }}/>
                        <Gender {...{ selectedGender, showGenderValidationError, setGenderSubState, change }} />
                        <HowDidYouHear {...{ how_did_you_hear, setHowHearSubState }} />
                    </form>
                </div>
            </div>
        )
    }
}

export default reduxForm({
    form: 'MetadataForm',
    fields: ['DD', 'MM', 'YYYY', 'gender', 'how_did_you_hear'],
    validate
})(Metadata);