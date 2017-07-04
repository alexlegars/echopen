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

             
            </div>
        );
    }
}