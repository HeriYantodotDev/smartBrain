import React from "react";

import './Nav.css'

const Nav = () => {
    return (
        <ul className="nav justify-content-end">
            <li className="nav-item">
                <a className="nav-link active link-warning fs-2" aria-current="page" href="#">Sign Out</a>
            </li>

      </ul>
    )
}

export default Nav;