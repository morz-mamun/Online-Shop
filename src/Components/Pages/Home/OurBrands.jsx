import { useLoaderData } from "react-router-dom";
import Brand from "./Brand";
import bg from "../../../assets/brandbg.jpg"


const OurBrands = () => {
    const allBrand = useLoaderData()

    return (
        <div className="hero my-20" style={{
            backgroundImage: `url(${bg})`
        }}>
             <div className="hero-overlay bg-opacity-90"></div>
             <div className="max-w-7xl mx-auto ">
            <h1>Brands</h1>
            <div className="grid grid-cols-3 gap-5">
                {
                    allBrand?.map(brand => <Brand key={brand.id} brand={brand}></Brand>)
                }
            </div>

        </div>
        </div>
    );
};

export default OurBrands;