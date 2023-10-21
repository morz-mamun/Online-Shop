
import PropTypes from 'prop-types';
import login from "../../../assets/login.jpg"
import { Link } from 'react-router-dom';

const AddProducts = () => {

    const handleAddProduct = (e) => {
        e.preventDefault()
        const form = e.target 
        const image = form.image.value
        const name = form.name.value
        const brand_name = form.brand_name.value
        const type = form.type.value
        const price = form.price.value
        const short_description = form.short_description.value
        const rating = form.rating.value

        const product = {image, name, brand_name, type, price, short_description, rating}

        // send data to server site 
        fetch('https://technology-server-site-a5e4zw94v-mamuns-projects.vercel.app/products', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        form.reset()
        
    }
    return (
        <div>
            <div className="hero md:min-h-screen" style={{ backgroundImage: `url(${login})` }}>
                <div className="hero-overlay bg-opacity-80"></div>

                <div className="bg-black bg-opacity-70 rounded-lg py-2 my-5">
                    <div className="hero-content flex-col md:px-20 md:space-y-12">
                        <div className="w-80 md:w-[550px] text-left">

                            <h1 className="text-xl md:text-5xl text-red-600 font-bold ">Add a New Product.</h1>
                        </div>
                        <div className="w-full text-white">

                            <form onSubmit={handleAddProduct}>

                                <div className='flex gap-3 justify-between w-full'>
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="text-white ">Image</span>
                                        </label>
                                        <input type="text"
                                            name="image"
                                            placeholder="Image URL" className="input input-bordered w-full text-black" required />
                                    </div>
                                    <div className="form-control w-full ">
                                        <label className="label">
                                            <span className="text-white ">Name</span>
                                        </label>
                                        <input type="text"
                                            name="name"
                                            placeholder="Name" className="input input-bordered w-full text-black" required />
                                    </div>
                                </div>

                                <div className='flex gap-3 justify-between w-full'>
                                    <div className="form-control w-full ">
                                        <label className="label">
                                            <span className="text-white ">Brand Name</span>
                                        </label>
                                        <input type="text"
                                            name="brand_name"
                                            placeholder="Brand Name" className="input input-bordered w-full text-black" required />
                                    </div>
                                    <div className="form-control w-full ">
                                        <label className="label">
                                            <span className="text-white ">Type</span>
                                        </label>
                                        <input type="option"
                                            name="type"
                                            placeholder="type" className="input input-bordered w-full text-black" required />
                                    </div>
                                </div>


                                <div className='flex gap-3 justify-between w-full'>
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="text-white ">Price</span>
                                        </label>
                                        <input type="text"
                                            name="price"
                                            placeholder="Price" className="input input-bordered w-full text-black" required />
                                    </div>
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="text-white ">Short Description</span>
                                        </label>
                                        <input type="text"
                                            name="short_description"
                                            placeholder="Description" className="input input-bordered text-black" required />
                                    </div>
                                </div>


                                <div className="form-control">
                                    <label className="label">
                                        <span className="text-white ">Rating</span>
                                    </label>
                                    <input type="text"
                                        name="rating"
                                        placeholder="Rating" className="input input-bordered text-black" required />
                                </div>
                                <div className="form-control mt-6">

                                    <button type='submit' className="btn bg-red-600 w-full">Add Product</button>

                                </div>
                                <div className='mb-5 text-right form-control mt-6'>
                                    <p className='text-white '>Already have an account please <Link to="/signin"><span className='text-red-600  underline'>Sing in</span></Link> here.</p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

AddProducts.propTypes = {

};

export default AddProducts;