import { combineReducers } from 'redux';

import { leaguesList } from './league.reducer';

const rootReducer = combineReducers({
    leaguesList,
});

export default rootReducer;