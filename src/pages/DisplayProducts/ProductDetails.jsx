import { Link, useLoaderData, useParams } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const ProductDetails = () => {
    const productData = useLoaderData();
    //console.log(productData);
    const { id } = useParams();
    //const idInt = parseInt(id);
    //console.log(id);
    const product = productData.find(product => product._id === id);
    const { user} = useContext(AuthContext);


        const handleAddToCart = () => {
    
            const cartProduct = { productID:id, email:user.email, photo:product.photo, rating: product.rating, price: product.price, type:product.type, name: product.name, brand: product.brand, description: product.description }
    
            console.log(cartProduct);
    
            fetch('http://localhost:5000/cart', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartProduct)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if(data.insertedId){
                        Swal.fire({
                            title: 'Success!',
                            text: 'Product Added to Cart Successfully',
                            icon: 'success',
                            confirmButtonText: 'OK'
                          })
                    }
                })
        }
    return (
        <div className="max-w-7xl p-4 mx-auto mb-40 mt-8 text-gray-950">
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
                    <button onClick={handleAddToCart} className="btn bg-[#66b2b2] border-none text-xl text-gray-950"> <FaCartShopping></FaCartShopping>Add to Cart</button>
                </div>

            </div>
        </div>





    );
};

export default ProductDetails;