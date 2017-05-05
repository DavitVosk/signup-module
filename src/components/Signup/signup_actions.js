import * as aT from '../../redux/action_types';

export const setCredentials = (credentials) => {

    return { type: aT.SET_CREDENTIALS, payload: credentials };
};

export const setMetadata = (metadata) => {
    return { type: aT.SET_METADATA, payload: metadata };
};
