import React from 'react';
import js from '../images/java-script.png';
import md from '../images/mongodb.png';
import node from '../images/node.png';
import html from '../images/Html.png';
import css from '../images/css3.png';
import react from '../images/logo512.png';
import '../App.css'
function Skills(){
    return(
        <div className='Skills'>
            <div className='icon'>
            <img src={html}/>
            <span>HTML</span>
            </div>
            <div className='icon'>
            <img src={css}/>
            <span>CSS</span>
            </div>
            <div className='icon'>
            <img src={js}/>
            <span>Java Script</span>
            </div>
            <div className='icon'>
            <img src={md}/>
            <span>MongoDB</span>
            </div>
            <div className='icon'>
            <img src={node}/>
            <span>Nodejs</span>
            </div>
            <div className='icon'>
            <img src={react}/>
            <span>Reactjs</span>
            </div>
           
        </div>
    )
}
export default Skills;