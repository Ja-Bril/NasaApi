import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
    return(
        <div className="navbar">
            <ul>
                <Link className='link' to='/'>Back to Earth</Link>
            </ul>
        </div>
    )
}
