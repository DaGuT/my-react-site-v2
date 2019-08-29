import React, { PureComponent } from 'react';

import MainBlock from './Blocks/MainScreen';
import './WelcomePage.css';

export default class WelcomePage extends PureComponent {
    render() {
        return (
            <div>
                <MainBlock />
            </div>
        )
    }
}
