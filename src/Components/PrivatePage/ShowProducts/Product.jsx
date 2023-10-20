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
                        <button className="btn btn-primary">Update</button>
            </div>
            
        
        </div>
    </div>



        // <div>
        //     <div className="card shadow-xl">
        //         <figure className="w-full h-80"><img className="h-[100%] w-full" src={image} alt="Shoes" /></figure>
        //         <div className="card-body">
        //             <h2 className="card-title">Name: {name}</h2>
        //             <p>Brand Name: {brand_name}</p>
        //             <p>Type: {type}</p>
        //             <p>Price: {price}</p>
        //             <p>Rating: {rating}</p>
        //             <div className="card-action space-x-5">
        //                 <Link to={`/${brand_name}/${_id}`} >
        //                 <button className="btn btn-secondary text-black">Show Details</button>
        //                 </Link>
        //                 <button className="btn btn-primary">Update</button>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
};

export default Product;