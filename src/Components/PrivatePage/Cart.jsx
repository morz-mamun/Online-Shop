import Swal from "sweetalert2";


const Cart = ({ cart, carts, setCarts }) => {
    const { _id, image, name, price, brand_name, short_description, rating } = cart

    const handleDelete = (id) => {
        console.log(id);

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${_id}`, {
                    method: "DELETE"
                })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount > 0){
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                          )
                          const remainingCarts = carts.filter(cart => cart._id !== _id ) 
                          console.log(remainingCarts);
                          setCarts(remainingCarts)
                    }
                }) 
            }
          })
       
    }
    return (
        <div className='rounded-lg hover:bg-gray-600 rounded-t-md border-2 border-black border-s-fuchsia-300'>
            <div className=" w-full shadow-transparent">
                <div className="">
                    <div className="card-actions justify-end">
                        <button onClick={() => handleDelete({ _id })} className="btn-sm btn-circle bg-white font-bold text-xl hover:bg-red-600">X</button>
                    </div>
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