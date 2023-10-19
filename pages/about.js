import React from "react";
import { urlFor } from "../lib/client";
import { HeroBanner } from "../components";
import { client } from "../lib/client";

const about = ({ products, bannerData }) => {
  return (
    <div>
      <h1 className="about-h1">About Us</h1>
      <HeroBanner HeroBanner={bannerData.length && bannerData[1]} />

      <p className="text">We're a fake brand</p>
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
