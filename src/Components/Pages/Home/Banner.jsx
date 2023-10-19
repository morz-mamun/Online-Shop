import banner from '../../../assets/banner2.jpg'

const Banner = () => {
    return (
        <div>
            <div className="hero place-items-start lg:p-20 md:h-[450px] lg:min-h-screen" style={{ backgroundImage: `url(${banner})` }}>
                <div className="hero-overlay bg-opacity-0"></div>
                <div className="hero-content text-neutral-content">
                    <div className="max-w-xs md:max-w-xl">
                        <h1 className="mb-5 text-yellow-300 text-xl md:text-3xl lg:text-5xl font-bold">Hello there</h1>
                        <p className="mb-5 ">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Let Go</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;