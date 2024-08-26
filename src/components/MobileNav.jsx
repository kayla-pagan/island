import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";

export default function MobileNav(){
    const [openMenu, setOpenMenu] = useState(false)
    const activeStyle = {
        color: '#363537',
        backgroundColor: 'whitesmoke',
        borderBottom: '4px solid #8CD867',
        borderRadius: '2px'
    }

    function toggleMenu() {
        setOpenMenu(prevState => !prevState)
    }

    function closeMenu() {
        setOpenMenu(false)
    }

    return (
        <header>
            <div className="header-container mobile-nav">
                <h1>Discover <span>Taniti</span></h1>

                {openMenu ? 
                    <RxCross1 
                        className={`menu-icon ${openMenu ? '' : 'hidden'}`}
                        size="30px" 
                        onClick={toggleMenu} 
                    /> : 
                    <RxHamburgerMenu 
                        className={`menu-icon ${openMenu ? 'hidden' : ''}`} 
                        size="30px" 
                        onClick={toggleMenu} />}

                {openMenu && 
                    <nav className="mobile-links">
                        <NavLink
                            to='/'
                            style={({isActive}) => isActive ? activeStyle : null}
                            onClick={closeMenu}
                        >
                            HOME
                        </NavLink>

                        <NavLink
                            to='/about'
                            style={({isActive}) => isActive ? activeStyle : null}
                            onClick={closeMenu}
                        >
                            ABOUT
                        </NavLink>

                        <NavLink
                            to='/gettinghere'
                            style={({isActive}) => isActive ? activeStyle : null}
                            onClick={closeMenu}
                        >
                            GETTING HERE
                        </NavLink>

                        <NavLink
                            to='/gettingaround'
                            style={({isActive}) => isActive ? activeStyle : null}
                            onClick={closeMenu}
                        >
                            GETTING AROUND
                        </NavLink>

                        <NavLink
                            to='/hotelsresorts'
                            style={({isActive}) => isActive ? activeStyle : null}
                            onClick={closeMenu}
                        >
                            HOTELS & RESORTS
                        </NavLink>

                        <NavLink
                            to='/restaurants'
                            style={({isActive}) => isActive ? activeStyle : null}
                            onClick={closeMenu}
                        >
                            RESTAURANTS
                        </NavLink>

                        <NavLink
                            to='/things'
                            style={({isActive}) => isActive ? activeStyle : null}
                            onClick={closeMenu}
                        >
                            THINGS TO DO
                        </NavLink>

                        <NavLink
                            to='/contact'
                            style={({isActive}) => isActive ? activeStyle : null}
                            onClick={closeMenu}
                        >
                            CONTACT
                        </NavLink>
                    </nav>
                }
            </div>
        </header>
    )
}