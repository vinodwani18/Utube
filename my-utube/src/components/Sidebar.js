import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const Sidebar = () => {
    const isMenuOpen = useSelector(store => store.app.isMenuOpen);
    
    if(!isMenuOpen) return null;

    return <div className='w-48' data-testid="sidebar">
        <div className='shadow-lg p-5 m-5'>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li>Shorts</li>
                <li>Subscriptions</li>
            </ul>
            <h1 className='font-bold pt-5'>Subscriptions</h1>
            <ul> 
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Music</li>
            </ul>
            <h1 className='font-bold pt-5'>Watch Later</h1>
            <ul> 
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Music</li>
            </ul>
        </div>
    </div>
}

export default Sidebar;