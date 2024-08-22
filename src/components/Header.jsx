import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header(){
    const activeStyle = {
        color: '#363537',
        backgroundColor: 'whitesmoke',
        borderBottom: '4px solid #8CD867'
    }

    return (
        <header>
            <div class="header-container">
                <h1>Discover <span>Taniti</span></h1>

                <nav>
                    <NavLink
                        to='/'
                        style={({isActive}) => isActive ? activeStyle : ""}
                    >
                        HOME
                    </NavLink>
                    <NavLink>ABOUT</NavLink>
                    <NavLink>GETTING HERE</NavLink>
                    <NavLink>GETTING AROUND</NavLink>
                    <NavLink>HOTEL & RESORTS</NavLink>
                    <NavLink>RESTAURANTS</NavLink>
                    <NavLink>THINGS</NavLink>
                </nav>
            </div>
        </header>
    )
}