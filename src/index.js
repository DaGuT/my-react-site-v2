import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route} from 'react-router-dom'; 

import WelcomePage from './app/components/WelcomePage';

ReactDOM.render(
<BrowserRouter> 
    <Route path="/" component={WelcomePage} />
</BrowserRouter>
, document.getElementById('root'));

serviceWorker.register();
