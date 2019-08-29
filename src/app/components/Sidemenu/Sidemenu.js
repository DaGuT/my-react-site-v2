import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import "./Sidemenu.scss"

export default class Sidemenu extends Component {
    render() {

        let links = [
            {link:"/", name:'Home'},
            {link:"/portfolio", name: "Portfolio"},
            {link:"/about-me",name:"About me"}
        ]

        return (
            <div id="Sidemenu">
                <ul class="sidemenu-list">
                    {links.map((link,i) => 
                        <li key={`menuitem-${i}`} className={`sidemenu-item item-${i+1} ${this.props.location.pathname===link.link ? 'active' : ''}`}><Link to={link.link}>{link.name}</Link></li>
                    )}
                    <hr />
                </ul>
            </div>
        )
    }
}
