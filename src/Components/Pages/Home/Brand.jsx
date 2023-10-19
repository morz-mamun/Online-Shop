
import PropTypes from 'prop-types';

const Brand = ({ brand }) => {
    const {brand_name, img} = brand
    return (
        <div className='rounded-lg hover:bg-gray-600 rounded-t-md'>
            <div className=" w-full card-side shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-yellow-300 font-bold border-b-4 border-red-600 w-fit">{brand_name}</h2>
                </div>
                <figure><img className='w-[100%] h-72' src={img} alt="Album" /></figure>
            </div>
        </div>
    );
};

Brand.propTypes = {

};

export default Brand;