
import PropTypes from 'prop-types';
import { useLoaderData } from 'react-router-dom';
import Product from './Product';
import bg from "../../../assets/brandbg.jpg"


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
                <div className='h-20 md:h-60'>
                    <img className='h-full w-full' src="https://i.ibb.co/BnXLFZK/ad4.jpg" alt="" />
                </div>
                <div className= 'h-20 md:h-60' >
                    <img className='h-full w-full' src="https://i.ibb.co/MSgp38d/ad2.jpg" alt="" />
                </div>
                <div className='h-20 md:h-60'>
                    <img className='h-full w-full' src="https://i.ibb.co/pWvRqxD/ad1.jpg" alt="" />
                </div>
                <div className='h-20 md:h-60'>
                    <img className='h-full w-full' src="https://i.ibb.co/Lvzv2vw/ad3.jpg" alt="" />
                </div >
                <div className='h-20 md:h-60'>
                    <img className='h-full w-full' src="https://i.ibb.co/BnXLFZK/ad4.jpg" alt="" />
                </div>
                <div className='h-20 md:h-60'>
                    <img className='h-full w-full' src="https://i.ibb.co/pWvRqxD/ad1.jpg" alt="" />
                </div>
            </Slider>


            <div className="hero " style={{
            backgroundImage: `url(${bg})`
        }}>
             <div className="hero-overlay bg-opacity-90"></div>
             <div className="max-w-7xl mx-auto space-y-10 mt-5">
             <h1 className='text-2xl md:text-5xl text-white font-bold border-b-4 border-yellow-300 w-fit mx-auto py-3' >Our Available Products</h1>
            <div className="grid md:grid-cols-2 gap-5 p-5">
                {
                    products?.map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>

        </div>
        </div>

            {/* <div className='my-10 text-xl text-center font-bold border-b-4 border-yellow-300 w-fit mx-auto uppercase'>
                <h1>Our Available Products</h1>
            </div> */}
            
                {/* <div className = ' grid md:grid-cols-2 gap-5 py-5'>
                    {
                        products.map(product => <Product
                            key={product._id} product={product}>
                        </Product>)
                    }
                </div> */}

                

            </div>
        
    );
};

ShowProducts.propTypes = {

};

export default ShowProducts;
