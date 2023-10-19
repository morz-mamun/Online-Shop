
import PropTypes from 'prop-types';
import Banner from './Banner';
import OurBrands from './OurBrands';
import AboutUs from './AboutUs';


const Home = () => {
    return (
        <div>
         <Banner></Banner>
         <AboutUs></AboutUs>
         <OurBrands></OurBrands>
        
        </div>
    );
};

Home.propTypes = {
    
};

export default Home;