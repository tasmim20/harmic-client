import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../../Assets/Images/blog-bg.jpg'

const Header = () => {
    return (
        <div className="hero  bg-base-200 max-h-full" style={{backgroundImage:`url(${bg})`, minHeight:450}}>
            <h2 className='text-xl font-semibold'> Blogs</h2>
           
        </div>
    );
};

export default Header;