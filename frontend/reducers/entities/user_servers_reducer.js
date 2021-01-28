import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../../actions/session_action';
import {RECEIVE_SERVER, REMOVE_SERVER, REMOVE_USER_SERVER} from '../../actions/server_action';

const UserServersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SERVER:
            return Object.assign({}, state, action.payload.userServers)
        case REMOVE_SERVER:
            let c = Object.assign({},state);
            // debugger
            for(const property in c){
                // debugger
                if(c[property].serverId === action.serverId){
                    // debugger
                    delete c[property];
                }
            }
            return c;
        case REMOVE_USER_SERVER:
            let copy = Object.assign({}, state);
            delete copy[action.userServerId];
            return copy;
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, action.payload.userServers)

        case LOGOUT_CURRENT_USER:
            return {}
        default:
            return state;
    }
}

export default UserServersReducer;