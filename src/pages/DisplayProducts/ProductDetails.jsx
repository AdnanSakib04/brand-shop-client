import { Link, useLoaderData, useParams } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";

const ProductDetails = () => {
    const productData = useLoaderData();
    console.log(productData);
    const { id } = useParams();
    //const idInt = parseInt(id);
    console.log(id);
    const product = productData.find(product => product._id === id);
    return (
        <div className="max-w-7xl p-4 mx-auto mb-40 mt-8">
            <div className="   bg-[#b2d8d8] rounded-lg  p-3">
                <img className="w-full lg:h-[700px]" src={product.photo} alt="" />
                <h2 className=" text-3xl md:text-4xl lg:text-5xl font-bold text-center mt-5 mb-5 ">{product.name}</h2>
                <div className="flex flex-col md:flex-row justify-evenly mb-4">
                    <h2 className="text-base md:text-2xl font-bold ">Rating: {product.rating}</h2>
                    <h3 className="text-base md:text-2xl font-bold "> Price: {product.price}<span className="">$</span></h3>

                    <h2 className="text-base md:text-2xl font-bold ">Brand: {product.brand}</h2>
                </div>

                <p className=" text-xl text-justify mb-10 font-semibold">{product.description}</p>
                <div className="flex justify-center">
                    <Link><button className="btn bg-[#66b2b2] border-none text-xl"> <FaCartShopping></FaCartShopping>Add to Cart</button></Link>
                </div>

            </div>
        </div>





    );
};

export default ProductDetails;