import React from 'react'
import { NavLink } from 'react-router-dom'


const Header3 = () => {
    return (
        <nav className="navbar bg-dark justify-content-center" style={{backgroundColor:"grey"}}>

            
            <li className="nav-link ">
                <NavLink to="/Dashboard" className="nav-link" style={({ isActive }) => ({ color: isActive ? 'orange' : 'white' })}>
                    All Profiles
                </NavLink>
            </li>
            <li className="nav-link ">
                <NavLink to="/trending" className="nav-link" style={({ isActive }) => ({ color: isActive ? 'orange' : 'white' })}>
                    Trending
                </NavLink>
            </li>
            <li className="nav-link ">
                <NavLink to="/alumini" className="nav-link" style={({ isActive }) => ({ color: isActive ? 'orange' : 'white' })}>
                    Alumini
                </NavLink>
            </li>
            <li className="nav-link ">
                <NavLink to="/teachers" className="nav-link" style={({ isActive }) => ({ color: isActive ? 'orange' : 'white' })}>
                    Teachers
                </NavLink>
            </li>
            <li className="nav-link">
                <NavLink to="/youtube" className="nav-link" style={({ isActive }) => ({ color: isActive ? 'orange' : 'white' })}>
                    Youtube
                </NavLink>
            </li>
            
            <li className="nav-link">
                <NavLink to="/clubs" className="nav-link" style={({ isActive }) => ({ color: isActive ? 'orange' : 'white' })}>
                    Clubs
                </NavLink>
            </li>

            <li className="nav-link ">
                <NavLink to="/nss" className="nav-link" style={({ isActive }) => ({ color: isActive ? 'orange' : 'white' })}>
                    NSS
                </NavLink>
            </li>
            <li className="nav-link ">
                <NavLink to="/canteen" className="nav-link" style={({ isActive }) => ({ color: isActive ? 'orange' : 'white' })}>
                    Cateen
                </NavLink>
            </li>
            <li className="nav-link">
                <NavLink to="/contact" className="nav-link" style={({ isActive }) => ({ color: isActive ? 'orange' : 'white' })}>
                    contact us
                </NavLink>
            </li>
            <li className="nav-link">
                <NavLink to="/login" onClick={()=>localStorage.clear()} style={({ isActive }) => ({ color: isActive ? 'orange' : 'white' })}>
                    Logout
                </NavLink>
            </li>

        </nav>
    )
}

export default Header3
