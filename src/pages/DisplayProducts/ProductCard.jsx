
const ProductCard = ({ product }) => {
    const { _id, name, photo, description, type, price, rating, brand } = product;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={photo} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">Name: {name}</h2>
                <h2 className="text-xl">Brand: {brand}</h2>
                <h2 className="text-xl">Type: {type}</h2>
                <h2 className="text-xl">Rating: {rating}</h2>
                <h2 className="text-xl">Price: {price}$</h2>
                <div className="card-actions justify-around">
                    <button className="btn btn-primary">Buy Now</button>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;