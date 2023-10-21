import { useLoaderData } from "react-router-dom";
import login from "../../../assets/login.jpg"
import Swal from "sweetalert2";

const UpDate = () => {
    const loadedData = useLoaderData()

    const { _id, image, name, brand_name, type, price, rating } = loadedData

    const handleUpdate = (e) => {
        e.preventDefault()
        const form = e.target
        const image = form.image.value
        const name = form.name.value
        const brand_name = form.brand_name.value
        const type = form.type.value
        const price = form.price.value
        const rating = form.rating.value

        const updateProduct = { image, name, brand_name, type, price, rating }

        Swal.fire({
            title: 'Do you want to update the changes?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Update',
            denyButtonText: `Don't Update`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                // send data to server site 
                fetch(`https://technology-server-site-5mhknvoc1-mamuns-projects.vercel.app/products/${brand_name}/${_id}`, {
                    method: "PUT",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(updateProduct)
                })
                    .then(res => res.json())
                    .then(data => {
                        if(data.modifiedCount > 0){
                            Swal.fire('Updated!', '', 'success')
                        } else if (result.isDenied) {
                            Swal.fire('Changes are not saved', '', 'info')
                        }
                    })
            } 
        })

    }
    return (
        <div>
            <div className="hero md:min-h-screen" style={{ backgroundImage: `url(${login})` }}>
                <div className="hero-overlay bg-opacity-80"></div>

                <div className="bg-black bg-opacity-70 rounded-lg py-2 my-5">
                    <div className="hero-content flex-col md:px-20 md:space-y-12">
                        <div className="w-80 md:w-[550px] text-left">

                            <h1 className="text-xl md:text-5xl text-red-600 font-bold ">Update a Product.</h1>
                        </div>
                        <div className="w-full text-white">

                            <form onSubmit={handleUpdate}>

                                <div className='flex gap-3 justify-between w-full'>
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="text-white ">Image</span>
                                        </label>
                                        <input type="text"
                                            name="image"
                                            defaultValue={image}
                                            placeholder="Image URL" className="input input-bordered w-full text-black" required />
                                    </div>
                                    <div className="form-control w-full ">
                                        <label className="label">
                                            <span className="text-white ">Name</span>
                                        </label>
                                        <input type="text"
                                            name="name"
                                            defaultValue={name}
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
                                            defaultValue={brand_name}
                                            placeholder="Brand Name" className="input input-bordered w-full text-black" required />
                                    </div>
                                    <div className="form-control w-full ">
                                        <label className="label">
                                            <span className="text-white ">Type</span>
                                        </label>
                                        <input type="option"
                                            name="type"
                                            defaultValue={type}
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
                                            defaultValue={price}
                                            placeholder="Price" className="input input-bordered w-full text-black" required />
                                    </div>
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="text-white ">Rating</span>
                                        </label>
                                        <input type="text"
                                            name="rating"
                                            defaultValue={rating}
                                            placeholder="Rating" className="input input-bordered text-black" required />
                                    </div>
                                </div>



                                <div className="form-control mt-6">

                                    <button type='submit' className="btn bg-red-600 w-full">Add Product</button>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpDate;