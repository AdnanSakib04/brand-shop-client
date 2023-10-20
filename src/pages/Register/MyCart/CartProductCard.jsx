import { Link } from "react-router-dom";


const CartProductCard = ({cartProduct}) => {
    const { _id, name, photo, type, price, rating, brand } = cartProduct;

    return (
        <div className="card w-96 bg-[#b2d8d8] shadow-xl">
        <figure><img src={photo} alt="" /></figure>
        <div className="card-body">
            <h2 className="card-title">Name: {name}</h2>
            <h2 className="text-xl">Brand: {brand}</h2>
            <h2 className="text-xl">Type: {type}</h2>
            <h2 className="text-xl">Rating: {rating}</h2>
            <h2 className="text-xl">Price: {price}$</h2>
            <div className="flex justify-around">
                <Link ><button className="btn  bg-red-600 font-medium rounded-lg  border-none">Delete</button></Link>
                
            </div>
        </div>
    </div>
    );
};

export default CartProductCard;