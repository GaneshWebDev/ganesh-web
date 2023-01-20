import React from 'react';
import '../App.css';
import { NavLink } from "react-router-dom";
function Header(){
    return(
        <div className='header'>
            <div>
            <img src='https://t4.ftcdn.net/jpg/03/16/32/23/360_F_316322355_m8FC5EDRun5JOAAHD94CvW1uUScY5IFh.jpg'/>
            </div>
            <div className='btn'>
            <NavLink  to='/'>Home</NavLink>
            <NavLink  to='/Qualification'>Qualification</NavLink>
            <NavLink  to='/Skills'>Skills</NavLink>
            <NavLink to='/Certifications'>Certifications</NavLink>
            <NavLink  to='/ContactUs'>Contact</NavLink>
            </div>
        </div>
    )
}
export default Header;