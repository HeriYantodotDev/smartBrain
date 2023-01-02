import React from "react";
// import Tilt from 'react-parallax-tilt';
import './Logo.css';
// import face from './face.png'
import face2 from './face2.jpg';

const Logo = () => {
    return (
        // <Tilt >
            
            <div className="mx-auto Tilt">    
                <img className="img-fluid px-4 py-4" src={face2} alt="Face Logo"></img>
        {/* // </Tilt> */}
            </div>
    )
}

export default Logo;