import React, { PureComponent } from 'react'

import TextScrambler from '../TextScramble';

export default class WelcomePage extends PureComponent {
    render() {
        return (
            <div>
                <TextScramble phrases={['Hi','lol']} phraseTime={800} />
            </div>
        )
    }
}
