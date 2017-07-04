import React from 'react';
import _ from '_';
import {Localize, Link, i18n, i18nComponent, Asset, assets} from 'dan';
import config from 'config';
import css from './styles.scss';

@i18nComponent
export default class About extends React.Component {
    constructor(props) {
        super(props);
    }



    render() {
        return (
            <div className={css.component}>
               
                <h1>About</h1>

                <h2><Localize>Commands</Localize></h2>

                <ul>
                    <li><code>gulp</code> <Localize>to launch your project with livereload</Localize></li>
                    <li><code>gulp build</code> <Localize>shit</Localize></li>
                    <li><code>gulp build:server</code> <Localize>to build your project & launch a test server</Localize></li>
                    <li><code>gulp deploy</code> <Localize>to deploy your project</Localize></li>
                    <li><code>gulp build:deploy</code> <Localize>to build & deploy your project</Localize></li>
                    <li><code>gulp backup</code> <Localize>to backup the server dist folder on local</Localize></li>
                </ul>

                <h2><Localize>Options</Localize></h2>
                <ul>
                    <li><code>--debug</code> <Localize>to enable debug mode</Localize></li>
                    <li><code>--path=pathname</code> <Localize>to specify the project path</Localize></li>
                    <li><code>--remote=env</code> <Localize>to force the deploy or backup environment</Localize></li>
                </ul>

                <h2><Localize>Documentations</Localize></h2>

                <ul>
                    <li><code>templates</code> <span className="path">docs/templates/</span></li>
                    <li><code>Framework</code> <span className="path">docs/danFw/</span></li>
                </ul>

                <h2><Localize>Features</Localize></h2>
                <ul>
                    <li><code>ES6</code></li>
                    <li><code>Webpack</code> <span className="path">docs/danFw/modules.md</span></li>
                    <li><code>React</code></li>
                    <li><code>Flux</code> <span className="path">docs/danFw/flux.md</span></li>
                    <li><code>I18n</code> <span className="path">docs/danFw/i18n.md</span></li>
                    <li><code>Router</code> <span className="path">docs/danFw/router.md</span></li>
                    <li>
                        <code>Assets</code> <span className="path">docs/danFw/loader.md</span>
                        <Asset name="icon" src={config.path+'img/loading.gif'} alt="logo"/>
                    </li>
                </ul>

                <h2><Localize>Links</Localize></h2>
                <ul>
                    <li><Link href="https://www.npmjs.com/package/generator-dan" target="_blank">npm generator-dan</Link></li>
                </ul>
            </div>
        );
    }
}