import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route} from 'react-router-dom'; 

//styling
import './index.scss'

//components/pages
import WelcomePage from './app/components/WelcomePage';
import Sidemenu from './app/components/Sidemenu';
import Portfolio from './app/components/Portfolio';
import AboutMe from './app/components/AboutMe';

ReactDOM.render(
<BrowserRouter> 
    <Route component={(props) => <Sidemenu {...props} />} />
    <Route path="/" exact component={WelcomePage} />
    <Route path="/portfolio" component={Portfolio} />
    <Route path="/about-me" component={AboutMe} />
</BrowserRouter>
, document.getElementById('root'));

serviceWorker.register();
