import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import WelcomePage from './app/components/WelcomePage';

ReactDOM.render(<WelcomePage />, document.getElementById('root'));

serviceWorker.register();
