import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
    const { _id, name, photo, description, type, price, rating, brand } = product;
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
                    <Link to={`/productdetails/${_id}`}><button className="btn  bg-[#66b2b2] font-medium rounded-lg  border-none">Details</button></Link>
                    <Link><button className="btn  bg-[#66b2b2] font-medium rounded-lg border-none">Update</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;