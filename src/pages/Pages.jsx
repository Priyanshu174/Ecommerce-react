import React from "react";
import Home from "../components/MainPage/Home";
import FlashDeals from "../components/flashDeals/FlashDeals";
import TopCate from "../components/top/TopCate";
import NewArrivals from "../components/newarrivals/NewArrivals";
import Discount from "../components/discount/Discount";
import Shop from "../components/shops/Shop";
import Annocument from "../components/annocument/Annocument";
import Wrapper from "../components/wrapper/Wrapper";

const Pages = ({ productItems, addToCart, CartItem, shopItems }) => {
  return (
    <>

      <div className="home-section">
        <Home CartItem={CartItem} />
      </div>
      <div className="flash-deal-section">
        <FlashDeals productItems={productItems} addToCart={addToCart} />
      </div>
      <TopCate />
      <div className="new-deal-section">
        <NewArrivals />
      </div>
      <div className="discount-section">
        <Discount />
      </div>
      <Shop shopItems={shopItems} addToCart={addToCart} />
      <Annocument />
      <div className="about-us-section contact-section">
      <Wrapper />
      </div>
    </>
  );
};

export default Pages;
