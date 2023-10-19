import React from "react";
import { urlFor } from "../lib/client";
import { HeroBanner } from "../components";
import { client } from "../lib/client";
import { Product } from "../components";

const about = ({ products, bannerData }) => {
  return (
    <div className="new">
      <h1 className="all-products">All Products</h1>
      <div className="products-container">
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
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

export default about;
