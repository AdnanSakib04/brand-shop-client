import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import CartProductCard from "./CartProductCard";
import { AuthContext } from "../../../providers/AuthProvider";
import { useContext } from "react";

const MyCart = () => {
    const { user} = useContext(AuthContext);

    const loadedAllCartProducts = useLoaderData();
    const userCartProducts = loadedAllCartProducts.filter(product => product.email === user.email);

    const [cartProducts, seCartProducts] = useState(userCartProducts);




    return (
        <div className="mb-40  max-w-7xl mx-auto mt-3">
            <h1 className="mt-10 mb-10 text-5xl font-bold text-center  max-w-max mx-auto p-3 rounded-lg">My Cart</h1>
            {cartProducts.length === 0 && (
                    <h1 className="text-4xl font-bold text-center mt-40  text-red-500 mx-auto">Cart is Empty </h1>
                ) }
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-6 md:p-0  gap-y-6 mb-20 justify-items-center'>
              
          {
            cartProducts.length ==0 ? ( <h1 className="text-3xl font-bold text-center my-20 text-red-500 mx-auto"></h1>)
            :(
            cartProducts.map(cartProduct => <CartProductCard
                key={cartProduct._id}
                cartProduct={cartProduct}
                cartProducts={cartProducts}
                seCartProducts={seCartProducts}>

            </CartProductCard>))
          }
        </div>




        </div>
    );
};

export default MyCart;