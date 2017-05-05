import React from 'react';
import TabsField from './TabsField';
import { Field } from 'redux-form';

export default (props) => (
    <Field component={TabsField} {...props}>
        {props.children}
    </Field>
);
