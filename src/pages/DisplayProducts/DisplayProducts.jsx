import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";
import Slider from "./Slider";

const DisplayProducts = () => {
    const products = useLoaderData();
    console.log(products);
    return (
       <div>
       
         <div className="max-w-7xl mx-auto">
         <Slider></Slider>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-6 md:p-0  gap-y-6 mb-20 justify-items-center'>
            {products.length === 0 ? (
                    <h1 className="text-3xl font-bold text-center my-40 text-red-700 mx-auto">No products available</h1>
                ) : (
                    products.map(product => (
                        <ProductCard key={product._id}
                         product={product} />
                    ))
                )}
        </div>
        </div>
       </div>
    );
};

export default DisplayProducts;