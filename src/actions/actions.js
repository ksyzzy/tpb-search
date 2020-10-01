export const TOGGLE_THEME = 'TOGGLE_THEME';
export const SET_AJAX_REQUEST = 'SET_AJAX_REQUEST';
export const SET_IMDB_REQUEST = 'SET_IMDB_REQUEST';
export const SET_NODE_REQUEST = 'SET_NODE_REQUEST';
export const UPDATE_INPUT = 'UPDATE_INPUT';
export const TOGGLE_SIDEMENU = 'TOGGLE_SIDEMENU';
export const UPDATE_HISTORY = 'UPDATE_HISTORY';

export function toggleLightTheme() {
    return { type: TOGGLE_THEME, theme: 'theme1' };
};

export function toggleDarkTheme() {
    return { type: TOGGLE_THEME, theme: 'theme2' };
};

export function setAjaxRequest() {
    return { type: SET_AJAX_REQUEST, connection: 'ajax' };
};

export function setImdbRequest() {
    return { type: SET_IMDB_REQUEST, connection: 'imdb' };
};

export function setNodeRequest() {
    return { type: SET_NODE_REQUEST, connection: 'node' };
};

export function updateInput(text) {
    return { type: UPDATE_INPUT, input: text };
};

export function openSidemenu() {
    return { type: TOGGLE_SIDEMENU, sidemenuOpen: true };
};

export function closeSidemenu() {
    return { type: TOGGLE_SIDEMENU, sidemenuOpen: false };
};

export function appendToHistory(title, connection, result) {
    return { type: UPDATE_HISTORY, item: {title, connection, result} };
};
