import Marquee from "react-fast-marquee";
import bg from "../../../assets/brandbg.jpg"

const AvailablePr = () => {
    return (

        <div className="hero  mt-20 text-white" style={{
            backgroundImage: `url(${bg})`
        }}>
            <div className="hero-overlay bg-opacity-90"></div>
            <div className='max-w-7xl mx-auto space-y-10'>
                <div className='text-center space-y-5'>

                    <h1 className='text-5xl font-bold border-b-4 border-yellow-300 w-fit mx-auto py-3' >Why Us</h1>

                    <h1 className='font-bold'>Where Innovation Meets Insight. <br /> Unleashing Tomorrows Tech Today </h1>
                </div>
                <Marquee pauseOnHover className="border-2 h-32 border-t-fuchsia-300
                border-b-fuchsia-300 font-bold text-3xl">
                    HOW WE DO IT
                    Shown one to been and because would train were their advised the with the tell day classes to up room, and big with in arrives of been to company him the working able rationale
                </Marquee>
            </div>
        </div>
    );
};

export default AvailablePr;