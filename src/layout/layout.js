import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Layout extends React.Component {
    render() {
        return(
            <div>
                <section className="section section-header">
                    <section className="grid-header container grid-960">
                        <nav className="navbar">
                            <NavLink className="btn btn-link" to="/home">Accueil</NavLink>
                        </nav>
                    </section>
                </section>
                {this.props.children}
            </div>
        )
    }
}