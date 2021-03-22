import { combineReducers } from 'redux';
import { user } from './reducers/user';
import { currentProposals} from './reducers/currentProposals'


// Combining both reducers
const reducers = combineReducers({
  user,
  currentProposals,

});

export default reducers;
