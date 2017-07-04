import React from 'react';
import config from 'config';
import ReactDOM from 'react-dom';
import {Link, Localize, i18n, i18nComponent, router, Is} from 'dan';
import './styles.scss';

@i18nComponent

export default class LocaleSelector extends React.Component {
    constructor(props) {
        super(props);
        this.DOM = {};
 

    }

    componentDidMount() {
        this.DOM.selector = ReactDOM.findDOMNode(this.refs.selector);
    }



    componentWillUnmount() {
    }

    onClick(bool, e) {
        if (bool) {
            e.preventDefault();
            return false;
        }
        this.props.close();
    }

    render() {
        var content;
        content = <ul className="selector" ref="selector" >
            {
                config.locales.map(locale => {
                    return <li key={locale} className={"lang "+(i18n.locale === locale?"focus":"")}>
                        <Link {...(router.ctx && router.ctx.params)}
                            route={router.route}
                            onClick={this.onClick.bind(this, i18n.locale === locale)}
                            locale={locale}
                            key={locale} className={"lang "+(i18n.locale === locale?"focus":"")} >{locale}</Link>
                    </li>
                })
            }
        </ul>;

        return (
            <div className="component localeSelector-ui">
                {content}
            </div>
        );
    }
}