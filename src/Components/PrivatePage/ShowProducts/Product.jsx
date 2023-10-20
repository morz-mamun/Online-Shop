import { Link } from "react-router-dom";


const Product = ({ product }) => {
    const { _id, image, name, brand_name, type, price, short_description, rating } = product

    return (
        <div>
            <div className="card shadow-xl">
                <figure className="w-full h-80"><img className="h-[100%] w-full" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name: {name}</h2>
                    <p>Brand Name: {brand_name}</p>
                    <p>Type: {type}</p>
                    <p>Price: {price}</p>
                    <p>Rating: {rating}</p>
                    <div className="card-action space-x-5">
                        <Link to={`/details/${_id}`} >
                        <button className="btn btn-secondary text-black">Show Details</button>
                        </Link>
                        <button className="btn btn-primary">Update</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;