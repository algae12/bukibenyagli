import React from 'react';
import Button from '@react95/core/Button';
import Icon from '@react95/core/Icon';
import './Header.css'

function Header() {
    return  (
        <div className="header">
            <Button className="start-btn">
                <Icon className="icon" name="logo"></Icon>
                <span className="text">Start</span>
            </Button>
            <div className="logo"></div>
        </div>
    )
}

export default Header;