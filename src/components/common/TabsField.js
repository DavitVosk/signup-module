import React from 'react';
import { Tabs } from 'material-ui/Tabs';

export default ({ input, label, children, ...theRest }) => (
    <Tabs
        {...input}
        {...theRest}
        children={children}
    />
);