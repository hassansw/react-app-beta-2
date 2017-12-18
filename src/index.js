import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Link} from 'react-router-dom';
import './index.css';
import App from './App';
import HomePage from "./components/home/home";
import AboutPage from "./components/about/about";
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import store from './store/configureStore'
import {Provider} from 'react-redux'




ReactDOM.render((
    <Provider store={store}>
        <HashRouter>
            <div>
                <Route exact path='/' component={App} />
                <Route path='/about' component={AboutPage} />
                <Route path='/home' component={HomePage} />
            </div>
        </HashRouter>
    </Provider>
    
), document.getElementById('root'))
registerServiceWorker();
