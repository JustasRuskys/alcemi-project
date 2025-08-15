import React from "react";

const Header = () => {
    return (
        <>
        <header>
            <div className="main-header">
                <div className="container-xl">
                    <div className="main-header-container">
                        <div className="logo-container">
                            <p className="logo-text">eshop <br/> logo</p>
                        </div>
                        <div className="menu-container">
                            <div className="menu-button">
                                <div className="line-one"></div>
                                <div className="line-two"></div>
                                <div className="line-three"></div>
                            </div>
                            <ul className="main-menu">
                                <li className="menu-item">
                                    <a href="#">Products</a>
                                </li>
                                <li className="menu-item">
                                    <a href="#">About</a>
                                </li>
                                <li className="menu-item">
                                    <a href="#">FAQ</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        </>
    )
}

export default Header;