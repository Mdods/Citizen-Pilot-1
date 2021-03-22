import { combineReducers } from 'redux';
import { user } from './reducers/user';
import {Proposals} from './reducers/currentProposals'


// Combining both reducers
export const reducers = combineReducers({
  user,
  Proposals,

});

export type RootState = ReturnType<typeof reducers>;
