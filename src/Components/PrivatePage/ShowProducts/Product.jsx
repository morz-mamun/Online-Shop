import { Link } from "react-router-dom";


const Product = ({ product }) => {
    const { _id, image, name, brand_name, type, price, short_description, rating } = product

    return (

        <div className='rounded-lg hover:bg-gray-600 rounded-t-md border-2 border-black border-s-fuchsia-300'>
        <div className=" w-full shadow-transparent">
        <figure><img className='w-[100%] h-72 md:h-96' src={image} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title text-yellow-300 font-bold border-b-4 border-red-600 w-fit uppercase">{brand_name}</h2>
                <h1 className="text-white">Name: {name}</h1>
                <h1 className="text-white">Type: {type}</h1>
                <h1 className="text-white">Rating: {rating}</h1>
                <h1 className="text-white text-lg">Price: <span className=" font-bold text-red-600">{price}</span>  </h1>
            </div>
            <div className="card-action space-x-5 p-3">
                        <Link to={`/${brand_name}/${_id}`} >
                         <button className="btn btn-secondary text-black">Show Details</button>
                        </Link>
                        <Link to={`/update/${brand_name}/${_id}`} >
                         <button className="btn btn-primary text-black">Update</button>
                        </Link>
                       
            </div>
            
        
        </div>
    </div>

    );
};

export default Product;