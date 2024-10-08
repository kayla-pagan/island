import React from "react";
import { NavLink } from "react-router-dom";

export default function DesktopNav(){
    const activeStyle = {
        color: '#363537',
        backgroundColor: 'whitesmoke',
        borderBottom: '4px solid #8CD867',
        borderRadius: '2px'
    }

    return (
        <header>
            <div className="header-container desktop-nav">
                <h1>Discover <span>Taniti</span></h1>

                <nav>
                    <NavLink
                        to='/'
                        style={({isActive}) => isActive ? activeStyle : null}
                    >
                        HOME
                    </NavLink>

                    <NavLink
                        to='/about'
                        style={({isActive}) => isActive ? activeStyle : null}
                    >
                        ABOUT
                    </NavLink>

                    <NavLink
                        to='/gettinghere'
                        style={({isActive}) => isActive ? activeStyle : null}
                    >
                        GETTING HERE
                    </NavLink>

                    <NavLink
                        to='/gettingaround'
                        style={({isActive}) => isActive ? activeStyle : null}
                    >
                        GETTING AROUND
                    </NavLink>

                    <NavLink
                        to='/hotelsresorts'
                        style={({isActive}) => isActive ? activeStyle : null}
                    >
                        HOTELS & RESORTS
                    </NavLink>

                    <NavLink
                        to='/restaurants'
                        style={({isActive}) => isActive ? activeStyle : null}
                    >
                        RESTAURANTS
                    </NavLink>

                    <NavLink
                        to='/things'
                        style={({isActive}) => isActive ? activeStyle : null}
                    >
                        THINGS TO DO
                    </NavLink>

                    <NavLink
                        to='/contact'
                        style={({isActive}) => isActive ? activeStyle : null}
                    >
                        CONTACT
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}
