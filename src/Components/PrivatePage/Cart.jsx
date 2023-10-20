

const Cart = ({cart}) => {
    const {image, name,price, brand_name, short_description, rating} = cart
    return (
        <div className='rounded-lg hover:bg-gray-600 rounded-t-md border-2 border-black border-s-fuchsia-300'>
            <div className=" w-full shadow-transparent">
                <div className="card-body">
                    <h2 className="card-title text-yellow-300 font-bold border-b-4 border-red-600 w-fit uppercase">{brand_name}</h2>
                    <h1 className="text-white">Name: {name}</h1>
                    <h1 className="text-white text-lg">Price: <span className=" font-bold text-red-600">{price}</span>  </h1>
                    
                </div>
                <figure><img className='w-[100%] h-72' src={image} alt="Album" /></figure>
            <div className="p-2 space-y-2">
                <p className="text-white"> <span className="text-lg font-bold text-red-600">Description:</span> {short_description}</p>
                <h1 className="text-white text-lg"> Rating: <span className=" font-bold text-red-600">{rating}</span></h1>
            </div>
            </div>
        </div>
    );
};

export default Cart;