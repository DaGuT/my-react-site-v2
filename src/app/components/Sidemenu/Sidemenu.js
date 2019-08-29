import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import "./Sidemenu.scss"

export default class Sidemenu extends Component {

    constructor() {
        super();

        this.state= {
            underlineWidth:0,
            underlineOffset:0
        }

        //binding events to this
        this.moveUnderlineToActive = this.moveUnderlineToActive.bind(this);
        this.handleMenuChange = this.handleMenuChange.bind(this);

        //ref so that I can directly check properties of our underline href
        this.sidemenuUnderlineHr = React.createRef();
    }

    moveUnderlineToActive() {
        let el = document.querySelector('#Sidemenu .sidemenu-list .sidemenu-item.active');
        this.setState({underlineWidth:el.offsetWidth, underlineOffset: el.offsetLeft});
    }

    handleMenuChange(e) {
        this.setState({underlineWidth:e.target.offsetWidth, underlineOffset: e.target.offsetLeft});
    }

    //upon mounting component we need to place our href
    componentDidMount() {
        this.moveUnderlineToActive();
    }

    render() {

        //this links can be easily replaced with property links, but I dont need it
        let links = [
            {link:"/", name:'Home'},
            {link:"/portfolio", name: "Portfolio"},
            {link:"/about-me",name:"About me"}
        ]

        return (
            <div id="Sidemenu">
                <ul className="sidemenu-list">
                    {links.map((link,i) => 
                        <li onMouseOver={this.handleMenuChange} onMouseLeave={this.moveUnderlineToActive} key={`menuitem-${i}`} className={`sidemenu-item ${this.props.location.pathname===link.link ? 'active' : ''}`}><Link to={link.link}>{link.name}</Link></li>
                    )}
                    <hr ref={this.sidemenuUnderlineHr} style={{width:`${this.state.underlineWidth}px`, marginLeft:`${this.state.underlineOffset}px`}}/>
                </ul>
            </div>
        )
    }
}
