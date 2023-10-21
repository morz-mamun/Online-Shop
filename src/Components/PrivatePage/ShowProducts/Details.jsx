import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'

const Details = () => {
    const product = useLoaderData()
    console.log(product)

    const handleAddCart = () => {
        Swal.fire({
            title: 'Do you want to save to my cart?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Save',
            denyButtonText: `Don't save`,
          }).then((result) => {
            if (result.isConfirmed) {
                fetch('https://technology-server-site-5mhknvoc1-mamuns-projects.vercel.app/carts', {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(product)
                })
                .then(res => res.json())
                .then(data => {
                    if(data.acknowledged){
                        Swal.fire('Saved!', '', 'success')
                    } else if (result.isDenied) {
                        Swal.fire('Changes are not saved', '', 'info')
                      }
                })
            } 
          })

        

          
            
    }

    return (
        <div className="max-w-7xl mx-auto">
            <div className="card card-side bg-base-100 shadow-xl md:h-[550px] md:my-16">
                <figure className="h-full flex-1"><img className="h-full" src={product.image} alt="Movie" /></figure>
                <div className=" p-5 flex-1 space-y-5">
                    <h2 className="card-title">Name: {product.name}</h2>
                    <p>Price: {product.price}</p>
                    <p>Rating: {product.rating}</p>
                    <p>Description: {product.short_description}</p>
                   
                    <div className="my-5">
                        <button onClick={handleAddCart} className="btn bg-red-600 font-bold">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;