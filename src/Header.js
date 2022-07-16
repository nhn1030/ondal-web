import React from 'react';
import "./Header.css"
import logoUrl from './assets/img1.png'
import NavigationIcon from '@material-ui/icons/Navigation';

function Header() {
    return (
        <div className='header'>
            <img className ='header_logo' src= {logoUrl} alt="logo" />

            <div className='header_nav'>

            <NavigationIcon className="header_nav_icon"/>

                <div className='header_option'>

                    <span className='header_lineOne'>About us</span>
                    <span className='header_lineTwo'>Visit</span>

                </div>

                <div className='header_option'>

                    <span className='header_lineOne'>Shop</span>
                    <span className='header_lineTwo'>Contact</span>

                </div>

                <div className='header_option'>

                    <span className='header_lineOne'>로그인</span>
                    <span className='header_lineTwo'>마이페이지</span>

                </div>


            </div>

        </div>
    );
}

export default Header;