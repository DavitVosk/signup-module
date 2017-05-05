import React from 'react';
import { Tab } from 'material-ui/Tabs';
import { Field } from 'redux-form';

import Tabs from '../../../common/Tabs';
import renderTextField from '../../../common/renderTextField';
import genderStyles from './Gender_styles';

const genders = ['male', 'female', 'unspecified'];

const Gender = (props) => {
    const { selectedGender, showGenderValidationError, setGenderSubState, change } = props;

    return (
        <div style={{ paddingTop: 30 }}>
            <div style={{ marginBottom: 15 }}>GENDER</div>
            <Tabs >
                {genders.map((gender, i) => {
                    const styles = selectedGender === gender ? genderStyles.selectedStyles
                        : genderStyles.unselectedStyles;
                    return (
                        <Tab
                            label={gender}
                            style={styles}
                            value={gender.toLowerCase()}
                            onActive={({ props }) => {
                                change('gender', gender);
                                setGenderSubState({
                                    selectedGender: gender,
                                    showGenderValidationError: false
                                })
                            }}
                            key={i}
                        />
                    );
                })}
            </Tabs>
            <Field
                type='hidden'
                name='gender'
                component={renderTextField}
                underlineShow={false}
            />
            {showGenderValidationError ?
                <div style={{ fontSize: 16, color: 'red' }}>Please select your gender</div> : null }
        </div>
    );
}

export default Gender;
