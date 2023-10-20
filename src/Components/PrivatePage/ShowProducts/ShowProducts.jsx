
import PropTypes from 'prop-types';
import { useLoaderData } from 'react-router-dom';
import Product from './Product';
import img from "../../../assets/brandbg.jpg"


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";



const ShowProducts = () => {


    const products = useLoaderData()

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };


    return (
      
        
         <div className='max-w-7xl mx-auto'>
            <Slider className=' bg-black' {...settings}>
                <div className='h-60 ml-3'>
                    <img className='h-full w-full' src="https://i.ibb.co/BnXLFZK/ad4.jpg" alt="" />
                </div>
                <div className='h-60' >
                    <img className='h-full w-full' src="https://i.ibb.co/MSgp38d/ad2.jpg" alt="" />
                </div>
                <div className='h-60'>
                    <img className='h-full w-full' src="https://i.ibb.co/pWvRqxD/ad1.jpg" alt="" />
                </div>
                <div className='h-60'>
                    <img className='h-full w-full' src="https://i.ibb.co/Lvzv2vw/ad3.jpg" alt="" />
                </div >
                <div className='h-60'>
                    <img className='h-full w-full' src="https://i.ibb.co/BnXLFZK/ad4.jpg" alt="" />
                </div>
                <div className='h-60'>
                    <img className='h-full w-full' src="https://i.ibb.co/pWvRqxD/ad1.jpg" alt="" />
                </div>
            </Slider>

            <div className='my-10 text-xl text-center font-bold border-b-4 border-yellow-300 w-fit mx-auto uppercase'>
                <h1>Our Available Products</h1>
            </div>
            
                <div className = ' grid md:grid-cols-2 gap-5 py-5'>
                    {
                        products.map(product => <Product
                            key={product._id} product={product}>
                        </Product>)
                    }
                </div>
            </div>
        
    );
};

ShowProducts.propTypes = {

};

export default ShowProducts;
