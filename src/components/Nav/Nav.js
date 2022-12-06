import React from "react";
import './Nav.css'

const Nav = ({onChangeRoute, resetImageUrl}) => {
    return (
        <ul className="nav justify-content-end">
            <li className="nav-item">
                <p onClick={()=> {
                    onChangeRoute('signin');
                    resetImageUrl();
                }} className="pointer nav-link active link-warning fs-2" aria-current="page" >Sign Out</p>
            </li>

      </ul>
    )
}

export default Nav;