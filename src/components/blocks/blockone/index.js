import React from 'react'
import _ from '_'
import {Localize, i18n, i18nComponent} from 'dan'
import config from 'config'
import './styles.scss'


export default class BlockOne extends React.Component {
    constructor(props) {
        super(props);


        onclick = this.onclick.bind(this);
    }

    onclick() {
        console.log('niquetamere')
    }


    render() {

        return (
            <div className="component blockone" onClick={onclick}>
                <h1>{this.props.data}</h1>
            </div>
        );
    }
}