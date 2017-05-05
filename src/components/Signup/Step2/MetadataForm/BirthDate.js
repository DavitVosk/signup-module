import React from 'react';
import { Field } from 'redux-form';

import renderTextField from '../../../common/renderTextField';
import { commonFieldStyles } from './BirthDate_styles';

export const commonProps = {
    hintStyle: { right: 0, left: 0, fontSize: 23 },
    underlineShow: false,
    inputStyle: { width: 30, fontSize: 20 }
};

const BirthDate = (props) => {
    const { DD, MM, YYYY, setBirthDateSubState } = props;

    return (
        <div style={{ display: 'flex', flex: 1, }}>
            <div style={{ ...commonFieldStyles, }}>
                <Field name='DD'
                       component={renderTextField}
                       label='DD'
                       maxLength={2}
                       className='input'
                       value={DD}
                       onChange={(e, newValue) => setBirthDateSubState({ DD: newValue })}
                       {...commonProps}
                />
            </div>
            <div style={{ ...commonFieldStyles }}>
                <Field name='MM'
                       component={renderTextField}
                       label='MM'
                       maxLength={2}
                       className='input'
                       value={MM}
                       onChange={(e, newValue) => setBirthDateSubState({ MM: newValue })}
                       {...commonProps}
                />
            </div>
            <div style={{ ...commonFieldStyles }}>
                <Field name='YYYY'
                       component={renderTextField}
                       label='YYYY'
                       maxLength={4}
                       className='input'
                       value={YYYY}
                       onChange={(e, newValue) => setBirthDateSubState({ YYYY: newValue })}
                       {...{ ...commonProps, inputStyle: { width: 48, fontSize: 20 } }}
                />
            </div>
        </div>
    );
}

export default BirthDate;
