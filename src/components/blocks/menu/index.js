import React from 'react';
import config from 'config';
import ReactDOM from 'react-dom';
import {Link, Localize, i18n, i18nComponent, Is} from 'dan';
import './styles.scss';
import LocaleSelector from 'components/blocks/localeSelector';

@i18nComponent
export default class Menu extends React.Component {
    constructor(props) {
        super(props);

        this.closed = true;
        this.position = Menu.POSITION.LEFT;
    }

    componentDidMount() {
     
    }



    componentWillUnmount() {
    }

    onClickTab() {
        this.closed = !this.closed;

        this.changeState({
            closed : this.closed
        });
        console.log(this.closed)
    }




    render() {
     

        return (
            <div className="component menu">
                Menu
                <LocaleSelector close={this.onClickTab.bind(this)}/>
            </div>
        );
    }
}

Menu.POSITION = {
    LEFT : 0,
    RIGHT : 1
};