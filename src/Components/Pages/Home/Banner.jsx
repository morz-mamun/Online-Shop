import banner from '../../../assets/banner2.jpg'
import { FaHandPointRight } from 'react-icons/fa';
const Banner = () => {
    return (
            <div className="hero place-items-start lg:p-20 md:h-[450px] lg:min-h-screen" style={{ backgroundImage: `url(${banner})` }}>
                <div className="hero-overlay bg-opacity-0"></div>
                <div className="hero-content text-neutral-content">
                    <div className="max-w-xs md:max-w-xl">
                        <h1 className="mb-5 text-yellow-300 text-xl md:text-3xl lg:text-3xl font-bold">Unleashing Tomorrows Tech Today</h1>
                        <p className="mb-5">Welcome to <span className="text-red-600 font-bold">Tech</span>Nexa,  your digital compass in the ever-changing world of technology. We are here to illuminate the latest trends, decode complex concepts, and help you navigate the exciting landscape of innovation.</p>
                        <button className="btn btn-secondary text-black font-bold">Let Go <span><FaHandPointRight></FaHandPointRight></span></button>
                    </div>
                </div>
            </div>
    );
};

export default Banner;