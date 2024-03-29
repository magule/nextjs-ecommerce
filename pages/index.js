import React from "react";
import { client } from "../lib/client";
import { Product, FooterBanner, HeroBanner } from "../components";
import { AiOutlineArrowDown } from "react-icons/ai";

//getserversideprops used to fetch data in nextjs
const Home = ({ products, bannerData }) => {
  return (
    <div>
      <HeroBanner HeroBanner={bannerData.length && bannerData[0]} />

      <div className="products-heading">
        <h2>Our Products</h2>
        <p>Best Ones</p>
        <p className="icons">
          <AiOutlineArrowDown />
        </p>
      </div>

      <div className="maylike-products-wrapper">
        <div className="marquee">
          <div className="maylike-products-container track">
            {products.map((item) => (
              <Product key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>

      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </div>
  );
};
//getting all the products
export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};

export default Home;
