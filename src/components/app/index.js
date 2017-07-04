import React from 'react';
import ReactDOM from 'react-dom';
import {Localize, Link, router} from 'dan';
import 'gsap';
import './styles.scss';
import Menu from 'components/blocks/menu';

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: 'div',
            params: {}
        };
        this.rand = parseInt(Math.random()*1000);
    }


    componentDidMount() {
        this.el = ReactDOM.findDOMNode(this);
    }

    componentWillUnmout() {
        this.el = null;
    }

    setContent(view, params) {
        params = params || {};
        this.setState({
            content: view,
            params: params
        });
    }

    get content() {
        return this.state.content;
    }

    render() {
        return (
            <div>
                <this.state.content {...this.state.params}/>
            </div>
        );
    }
}

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: 'div'
        }
    }

    componentDidMount() {
        this.el = ReactDOM.findDOMNode(this);
        this.currentIndex = 0;
        this.pages = [
            this.refs.p0,
            this.refs.p1
        ]
    }

    componentWillUnmount() {
        this.el = null;
        this.current = null;
        this.next = null;
    }

    get currentPage() {
        return this.pages[this.currentIndex];
    }

    get nextPage() {
        return this.pages[(this.currentIndex + 1) % this.pages.length];
    }

    /**
     * Set content page
     * @param {React.Component} view
     * @param {Object} [params] URL Parameters
     */
    /**
     * Set content page
     * @param {React.Component} view
     * @param {Object} [params] URL Parameters
     */
    setPage(view, params) {
        this.current = this.currentPage, this.next = this.nextPage;

        var preload = () => {
            document.getElementsByClassName('app')[0].scrollTop = 0;
            if (this.next.component && this.next.component.preload) {
                if (this.firstLoad) {
                    this.firstLoad = false;
                    this.next.component.preload(params).then(() => {
                        changeView();
                        Loader.hide();
                    });
                }
                else {
                    Loader.show().then(() => {
                        this.next.component.preload(params).then(() => {
                            changeView();
                            Loader.hide();
                        });
                    });
                }
            }
            else {
                if (this.firstLoad) {
                    this.firstLoad = false;
                }
                changeView();
                //Loader.hideDirectly();
            }
        };

        var animateOut = () => {
            if (this.current.component && this.current.component.animateOut) {
                this.current.component.animateOut().then(() => {
                    this.next.component.componentWillUnAppear && this.next.component.componentWillUnAppear();
                    preload();
                });
            }
            else {
                this.next && this.next.component && this.next.component.componentWillUnAppear && this.next.component.componentWillUnAppear();
                preload();
            }
        };

        var changeView = () => {
            // Animation
            TweenMax.killTweensOf([
                this.current.el,
                this.next.el
            ]);
            if (this.next.component && this.next.component.animateIn) {
                swap();
                this.next.component.animateIn().then(() => {
                    this.next && this.next.component && this.next.component.componentDidAppear && this.next.component.componentDidAppear();
                });
            }
            else {
                swap();
                this.next && this.next.component && this.next.component.componentDidAppear && this.next.component.componentDidAppear();
            }
        };

        var swap = () => {
            this.current && this.current.setContent('div');
            this.current.el.style.display = 'none';
            this.current.el.style.zIndex = 3;
            this.next.el.style.zIndex = 4;
            this.currentIndex = (this.currentIndex + 1) % this.pages.length;
        };

        this.next && this.next.setContent(view, params);
        this.next.el.style.display = 'block';

        animateOut();

        // this.refs.bar && this.refs.bar.update();
        // this.refs.burgerButton && this.refs.burgerButton.classList.remove("open");
        // this.refs.menu && this.refs.menu.changeState({opened : false});
    }
    shouldComponentUpdate(props, state) {
        return false;
    }

    render() {
        this.pages = [];
        return (
            <div className="component app">
                <Menu ref="menu"/>
                <Page ref="p0"/>
                <Page ref="p1"/>
            </div>
        );
    }
}