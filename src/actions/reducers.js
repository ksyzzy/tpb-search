import { combineReducers } from 'redux';
import { TOGGLE_THEME, SET_AJAX_REQUEST, SET_IMDB_REQUEST, SET_NODE_REQUEST, UPDATE_INPUT, TOGGLE_SIDEMENU, UPDATE_HISTORY, REQUEST, UPDATE_RESULT } from './actions';

function theme(state = 'theme1', action) {
    switch(action.type) {
        case TOGGLE_THEME:
            return action.theme;
        default:
            return state;
    }
};

function connection(state = 'ajax', action) {
    switch(action.type) {
        case SET_AJAX_REQUEST:
            return action.connection;
        case SET_IMDB_REQUEST:
            return action.connection;
        case SET_NODE_REQUEST:
            return action.connection;
        default:
            return state;
    }
};

function input(state = '', action) {
    switch(action.type) {
        case UPDATE_INPUT:
            return action.input;
        default:
            return state;
    }
};

function sidemenuOpen(state = 'false', action) {
    switch(action.type) {
        case TOGGLE_SIDEMENU:
            return action.sidemenuOpen;
        default:
            return state;
    }
};

function history(state = [], action) {
    switch(action.type) {
        case UPDATE_HISTORY:
            return [...state, {item: action.item.title, connection: action.item.connection, result: action.item.result}];
        default:
            return state;
    }
};

function gotResult(state = false, action) {
    switch(action.type) {
        case REQUEST:
            return action.gotResult;
        default:
            return state;
    }
};

function result(state = null, action) {
    switch(action.type) {
        case UPDATE_RESULT:
            return action.result;
        default:
            return state;
    }
};

const appReducer = combineReducers({input, connection, theme, sidemenuOpen, history, gotResult, result});

export default appReducer;
