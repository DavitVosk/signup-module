import React from 'react';
import TextField from 'material-ui/TextField';

export default (props) => {
    const { meta: { touched, error }, input, label,  } = props;
    return (
        <div>
            <TextField hintText={label}
                       errorText={touched && error}
                       style={{ width: '100%', }}
                       {...input}
                       {...props}
            />
        </div>
    );

};
