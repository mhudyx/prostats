import {
    LEAGUES_GET_REQUEST, LEAGUES_GET_SUCCESS, LEAGUES_GET_FAILURE
} from '../constans/league.const';

import axios from 'axios';

export const listLeagues = () => async (dispatch) => {
    try {
        dispatch({ type: LEAGUES_GET_REQUEST });
        const { data } = await axios.get("/api/leagues");
        dispatch({ type: LEAGUES_GET_SUCCESS, payload: data });
    }
    catch (error) {
        dispatch({ type: LEAGUES_GET_FAILURE, payload: error.message });
    }
}