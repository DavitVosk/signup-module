import * as aT from '../../redux/action_types';

const INITIAL_STATE = { email: null, password: null, date_of_birth: null, gender: null, how_did_you_hear: null, };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case aT.SET_CREDENTIALS:
            const { email, password } = action.payload;

            return { ...state, email, password, };
        case aT.SET_METADATA:
            const { date_of_birth, gender, how_did_you_hear, } = action.payload;

            return { ...state, date_of_birth, gender, how_did_you_hear, };
        default:
            return state;
    }
};

