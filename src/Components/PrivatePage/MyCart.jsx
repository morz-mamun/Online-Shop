import { useLoaderData } from "react-router-dom";
import bg from "../../assets/brandbg.jpg"
import Cart from "./Cart";
import { useState } from "react";

const MyCart = () => {
    const loadedCarts = useLoaderData()
    const [carts, setCarts] = useState(loadedCarts)
    console.log(carts);
    return (
        <div className="hero my-20" style={{
            backgroundImage: `url(${bg})`
        }}>
             <div className="hero-overlay bg-opacity-90"></div>
             <div className="max-w-7xl mx-auto space-y-10 mt-5">
             <h1 className='text-5xl text-white font-bold border-b-4 border-yellow-300 w-fit mx-auto py-3' >Your Selected Products</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
                {
                    carts?.map(cart => <Cart 
                        key={cart._id} 
                        cart={cart}
                        carts={carts}
                        setCarts={setCarts}
                        >

                        </Cart>)
                }
            </div>

        </div>
        </div>
    );
};

export default MyCart;