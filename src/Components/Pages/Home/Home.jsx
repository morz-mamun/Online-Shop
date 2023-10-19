
import PropTypes from 'prop-types';
import Banner from './Banner';
import OurBrands from './OurBrands';
import AboutUs from './AboutUs';
import AvailablePr from './AvailablePr';


const Home = () => {

    return (
        <div className=''>
         <Banner></Banner>
         <OurBrands></OurBrands>
         <AboutUs></AboutUs>
         <AvailablePr></AvailablePr>
        
        </div>
    );
};

Home.propTypes = {
    
};

export default Home;