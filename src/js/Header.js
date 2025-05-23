import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
    return (
        <div className="header grid">
            <div className="header-title grid-item-fixed grid">
                <div className="menu-toggle grid-item-fixed lg-show" onClick={() => props.onMenuToggle()}>
                    <span className="middle-bar"></span>
                </div>
                <div className="logo"><a href="/"></a></div>
                
            </div>
            {props.children}
            <button type="" class="buttonToLinks"></button>
        </div>
    );
};

Header.propTypes = {
    onMenuToggle: PropTypes.func.isRequired
};

export default Header;
