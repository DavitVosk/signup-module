import React from 'react';
import SelectField from './SelectField';
import { Field } from 'redux-form';

export default (props) => (
    <Field component={SelectField} {...props}>
        {props.children}
    </Field>
);
