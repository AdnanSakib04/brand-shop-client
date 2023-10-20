import Swal from "sweetalert2";


const CartProductCard = ({cartProduct, cartProducts, seCartProducts}) => {
    const { _id, name, photo, type, price, rating, brand } = cartProduct;

    const handleDelete = _id => {
        console.log(_id);
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



                fetch(`http://localhost:5000/cart/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your product has been deleted.',
                                'success'
                            )
                            const remainingProducts = cartProducts.filter(product => product._id !== _id);
                            seCartProducts(remainingProducts);
                        }
                    })

            }
        })
    }

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
                <button onClick={() => handleDelete(_id)} className="btn  bg-red-600 font-medium rounded-lg  border-none">Delete</button>
                
            </div>
        </div>
    </div>
    );
};

export default CartProductCard;