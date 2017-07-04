import React from 'react';
import _ from '_';
import {Localize, Link, i18n, i18nComponent, Asset, assets} from 'dan';
import config from 'config';
import './styles.scss';
import BlockOne from 'components/blocks/blockone';

@i18nComponent
export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }



    render() {
        console.log(this.props)
        return (
            <div className="component home">
             

                <h1>ECHOPEN HOME</h1>
                
            </div>
        );
    }
}