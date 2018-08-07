import UsersReducer from './users_reducer';
import {combineReducers} from 'redux';
import benchReducer from './bench_reducer';

const entitiesReducer = combineReducers({
  users: UsersReducer,
  benches: benchReducer
});

export default entitiesReducer;
