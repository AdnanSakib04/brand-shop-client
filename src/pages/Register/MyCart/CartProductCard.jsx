import Swal from "sweetalert2";
import { RiDeleteBinLine } from "react-icons/ri";


const CartProductCard = ({ cartProduct, cartProducts, seCartProducts }) => {
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



                fetch(`https://brand-shop-server-mdna9ww38-navids-projects-b76e6fb9.vercel.app/cart/${_id}`, {
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
            <figure><img className="h-[213px] w-full" src={photo} alt="" /></figure>
            <div className="card-body">
                <h2 className="text-[22px] font-bold text-gray-950">Name: {name}</h2>
                <h2 className="text-xl font-medium text-gray-950">Brand: {brand}</h2>
                <h2 className="text-xl font-medium text-gray-950">Type: {type}</h2>
                <h2 className="text-xl font-medium text-gray-950">Rating: {rating}</h2>
                <h2 className="text-xl font-medium text-gray-950">Price: {price}$</h2>
                <div className="flex justify-around">
                    <button onClick={() => handleDelete(_id)} className="btn btn-circle bg-red-600 font-medium text-white  border-none text-xl font-extrabold"><RiDeleteBinLine></RiDeleteBinLine></button>

                </div>
            </div>
        </div>
    );
};

export default CartProductCard;