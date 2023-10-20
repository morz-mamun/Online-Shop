
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';

const Brand = ({ brand }) => {
    const {brand_name, img} = brand
    const navigate = useNavigate()

   
    return (
        
        <Link to= {`/${brand_name}`}>
            <div className='rounded-lg hover:bg-gray-600 rounded-t-md border-2 border-black border-s-fuchsia-300'>
            <div className=" w-full card-side shadow-transparent">
                <div className="card-body">
                    <h2 className="card-title text-yellow-300 font-bold border-b-4 border-red-600 w-fit uppercase">{brand_name}</h2>
                </div>
                <figure><img className='w-[100%] h-72' src={img} alt="Album" /></figure>
            </div>
        </div>
        </Link>
        
    );
};

Brand.propTypes = {

};

export default Brand;