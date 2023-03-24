import React from 'react'
import {urlFor} from '../lib/client';
import { HeroBanner} from "../components";
import {client} from "../lib/client";


const about = ({products, bannerData}) => {
    return (
        <div>
            <h1 className="contact-h1">Iletisim</h1>
            <HeroBanner HeroBanner={bannerData.length && bannerData[1]}/>
            <p className="text">Bize buradan ulaşabilirsiniz.</p>
            <p className="smallText">Nemo Noktası, Pasifik Okyanusu, 48°52.6′ Güney ve 123°23.6′ Batı</p>
            <p className="smallText">furkankalaycioglu@gmail.com</p>
            <p className="smallText">0532 558 1834 </p>
        </div>
    )
}


//getting all the products
export const getServerSideProps = async () => {
    const query = '*[_type == "product"]';
    const products = await client.fetch(query);

    const bannerQuery = '*[_type == "banner"]';
    const bannerData = await client.fetch(bannerQuery);

    return {
        props: { products, bannerData }
    }

}

export default about
