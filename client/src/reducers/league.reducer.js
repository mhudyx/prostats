import {
    LEAGUES_GET_REQUEST,
    LEAGUES_GET_SUCCESS,
    LEAGUES_GET_FAILURE,
} from '../constans';

const initialState = {
    loading: {},
    leaguesList: {}
}

function leaguesList(state = initialState, action) {

    switch(action.type) {
        case LEAGUES_GET_REQUEST:
            return { loading: true };

        case LEAGUES_GET_SUCCESS: 
            return { loading: false, leaguesList: action.payload };

        case LEAGUES_GET_FAILURE:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
}

export { leaguesList };