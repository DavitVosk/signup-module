import React from 'react';
import SelectField from 'material-ui/SelectField';

export default ({ input, label, meta: { touched, error }, children, ...theRest }) => (
    <SelectField
        floatingLabelText={label}
        errorText={touched && error}
        children={children}
        {...input}
        onChange={(event, index, value) => input.onChange(value)}
        {...theRest} />
);