import React from "react";
import BestSellersImageOne from '../assets/images/best-sellers-image-1.png';
import BestSellersImageTwo from '../assets/images/best-sellers-image-2.png';

const MainSellers = () => {
    return(
        <>
        <div className="main-sellers">
            <div className="container-l">
                <div className="title-block">
                    <h2 className="title">Best Sellers</h2>
                </div>
                <div className="products-block">
                    <div className="single-product">
                        <img className="image-cover" src={BestSellersImageOne} alt="Product name" loading="lazy"/>
                    </div>
                    <div className="single-product">
                        <img className="image-cover" src={BestSellersImageOne} alt="Product name" loading="lazy"/>
                    </div>
                    <div className="single-product">
                        <img className="image-cover" src={BestSellersImageOne} alt="Product name" loading="lazy"/>
                    </div>
                    <div className="single-product">
                        <img className="image-cover" src={BestSellersImageTwo} alt="Product name" loading="lazy"/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default MainSellers;