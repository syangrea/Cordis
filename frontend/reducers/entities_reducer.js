import {combineReducers} from 'redux';
import UsersReducer from './entities/users_reducer';

const entitiesReducer = combineReducers({
    users: UsersReducer
})

export default entitiesReducer