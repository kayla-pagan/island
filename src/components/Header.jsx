import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header(){
    const activeStyle = {
        color: '#363537',
        backgroundColor: 'whitesmoke',
        borderBottom: '4px solid #8CD867',
    }

    return (
        <header>
            <div className="header-container">
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
                        to='/hotelresorts'
                        style={({isActive}) => isActive ? activeStyle : null}
                    >
                        HOTEL & RESORTS
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
                        THINGS
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}