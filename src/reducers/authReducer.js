import {
    AUTHENTICATE_USER
} from '../actions/types';

const INITIAL_STATE = {
    authenticated: false,
    user: [],
}
export default function(state = [], action) {
    switch (action.type) {
        case AUTHENTICATE_USER:
        const { user } = action.payload;
            return {
                ...state,
                user
            }

        default: return state;
    }
}