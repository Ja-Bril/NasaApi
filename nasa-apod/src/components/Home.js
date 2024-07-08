import React from "react";
import { Link } from 'react-router-dom';


export default function Home() {
    return(
        <>
        <div className="home">
            <Link className='home-link' to='/nasaphoto'>Nasa Photo of the Day</Link>
        </div>
        
        <div className='search'>
            <Link className='home-search' to='/search'>Search for the Photo of the Day of a different date</Link>
        </div>
        </>
    )
}

