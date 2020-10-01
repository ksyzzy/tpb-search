import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './index.css';
import Header from './components/Header';
import Menu from './components/Menu';
import App from './components/App';
import Footer from './components/Footer';
import History from './components/History';
import Result from './components/Result';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import appReducer from './actions/reducers';

const initialState = {
    input: '',
    connection: 'ajax',
    theme: 'theme1',
    sidemenuOpen: false,
    history: []
};

const store = createStore(appReducer, initialState);

ReactDOM.render(
<Provider store={store}>
  <React.StrictMode>
    <Router>
    <Switch>
        <Route path="/history">
            <Header />
            <Menu />
            <History />
            <Footer />
        </Route>
        <Route path="/result">
            <Header />
            <Menu />
            <Result />
            <Footer />
        </Route>
        <Route path="/">
            <Header />
            <Menu />
            <App />
            <Footer />
        </Route>
    </Switch>
    </Router>
  </React.StrictMode>
</Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
