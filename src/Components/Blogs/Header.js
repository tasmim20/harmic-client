import React from 'react';
import bg from '../../Assets/Images/1-1-1920x373 (1).jpg'

const Header = () => {
    return (
        <div className="hero  bg-base-200 max-h-full" style={{backgroundImage:`url(${bg})`, minHeight:610}}>
            <h2>this is blog</h2>
        </div>
    );
};

export default Header;