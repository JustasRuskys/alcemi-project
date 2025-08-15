import React from "react";
import TitleSvg from '../assets/title-line.svg';

const MainHero = () => {
    return (
        <>
        <div className="main-hero">
            <div className="background"></div>
            <div className="container-m">
                <div className="content-block">
                    <div className="title-block">
                        <h1 className="title">
                            Biggest 
                            <span className="title-span">
                                discounts
                                <img className="image-contain" src={TitleSvg} alt="" />
                            </span> <br/>
                            this season
                        </h1>
                    </div>
                    <div className="button-block shop-button">
                        <a href="#" className="button">View sale</a>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default MainHero;