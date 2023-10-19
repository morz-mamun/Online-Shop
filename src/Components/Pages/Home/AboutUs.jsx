import about from '../../../assets/about.jpg'

const AboutUs = () => {
    return (
        <div className="hero my-20">
             <div className="hero-overlay bg-opacity-25"></div>
             <div className='max-w-7xl mx-auto space-y-10'>
             <div className='text-center space-y-5'>
             
             <h1 className='text-5xl font-bold border-b-4 border-yellow-300 w-fit mx-auto py-3' >About Us</h1>
    
                <h1 className='font-bold'>Where Innovation Meets Insight. <br /> Unleashing Tomorrows Tech Today </h1>
             </div>
                <div className='flex flex-col-reverse md:flex-row items-center gap-5 py-5 p-5'>
                   <div className='flex-1'>
                   <p>Welcome to [TechNexa], your ultimate source for all things tech. Our passion for technology and innovation drives us to provide you with the latest news, reviews, and insights into the ever-evolving world of gadgets, software, and beyond. At [Your Technology Website Name], we believe that technology should be accessible to all, and our mission is to empower our readers with knowledge and understanding in this fast-paced digital age. </p>
                <br />
        <p>With a dedicated team of tech enthusiasts, we are committed to delivering comprehensive, accurate, and up-to-date content that helps you make informed decisions about the tech in your life. Whether you are a seasoned tech pro or just dipping your toes into the digital world, we are here to inspire, inform, and guide you on your tech journey. Join us as we explore the latest trends, demystify complex concepts, and discover the possibilities of tomorrows technology, today. Thank you for being a part of our tech community.</p>
                   </div>
            <div className='flex-1 w-full'>
                <img src={about} alt="" />
            </div>
                </div>
             </div>
        </div>
    );
};

export default AboutUs;