import banner from '../../../assets/banner2.jpg'

const Banner = () => {
    return (
            <div className="hero place-items-start lg:p-20 md:h-[450px] lg:min-h-screen" style={{ backgroundImage: `url(${banner})` }}>
                <div className="hero-overlay bg-opacity-0"></div>
                <div className="hero-content text-neutral-content">
                    <div className="max-w-xs md:max-w-xl">
                        <h1 className="mb-5 text-yellow-300 text-xl md:text-3xl lg:text-5xl font-bold">Hello ...</h1>
                        <p className="mb-5 ">Welcome to [TechNexa], your digital compass in the ever-changing world of technology. We are here to illuminate the latest trends, decode complex concepts, and help you navigate the exciting landscape of innovation. From gadgets to software, coding to connectivity, join us on a journey that celebrates the fusion of human creativity and technology boundless possibilities. Discover, learn, and stay ahead in the tech universe with us.</p>
                        <button className="btn btn-primary">Let Go</button>
                    </div>
                </div>
            </div>
    );
};

export default Banner;