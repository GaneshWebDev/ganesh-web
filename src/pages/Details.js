import React from 'react';
import Photo from '../images/Photo.jpg'
import '../App.css'
function Details(){
    return(
        <div className='Details'>
            <img src={Photo}/>
            <div className='Name'>
                <h1>G Siva Ganesh</h1>
                <span>Web Developer</span>
            </div>
        </div>
    )
}
export default Details;