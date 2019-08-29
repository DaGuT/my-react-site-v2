import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route} from 'react-router-dom'; 

import WelcomePage from './app/components/WelcomePage';
import Sidemenu from './app/components/Sidemenu';

ReactDOM.render(
<BrowserRouter> 
    <Route component={(props) => <Sidemenu {...props} />} />
    <Route path="/" component={WelcomePage} />
</BrowserRouter>
, document.getElementById('root'));

serviceWorker.register();
