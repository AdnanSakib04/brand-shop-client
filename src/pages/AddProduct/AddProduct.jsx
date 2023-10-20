import Swal from "sweetalert2";

const AddProduct = () => {
    const handleAddProduct = event => {
        event.preventDefault();

        const form = event.target;

        const photo = form.photo.value;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const description = form.description.value;
       

        const newProduct = { photo, name, brand, type, price, rating, description }

        console.log(newProduct);

        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                      })
                }
            })
    }
    return (
        <div className='max-w-7xl mx-auto mb-40'>

            <div className="  p-4 mt-8 rounded-3xl ">

                <form onSubmit={handleAddProduct} className="md:w-1/2 mx-auto card-body bg-[#b2d8d8] rounded-3xl">
                    <h1 className="text-4xl font-bold lg:text-5xl mt-8 text-center">Add Product</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-medium text-[18px]">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered " required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-medium text-[18px]">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Name" className="input input-bordered " required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-medium text-[18px]">Brand Name</span>
                        </label>
                        <input type="text" name="brand" placeholder="Brand Name" className="input input-bordered " required />
                    </div>
                    
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-medium text-[18px]">Type</span>
                        </label>
                        <input type="text" placeholder="Type" name="type" className="input input-bordered " required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-medium text-[18px]">Price</span>
                        </label>
                        <input type="text" placeholder="Price" name="price" className="input input-bordered " required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-medium text-[18px]">Rating</span>
                        </label>
                        <input type="text" placeholder="rating" name="rating" className="input input-bordered " required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-medium text-[18px]">Short Description</span>
                        </label>
                        <input type="text" placeholder="Description" name="description" className="input input-bordered " required />
                    </div>
                    
                    <div className="form-control mt-6">
                    <input  type="submit" className="btn bg-[#66b2b2] border-none font-bold text-xl" value="Add Product"  />
                    </div>
                   
                   
                </form>

            </div>
        </div>
    );
};

export default AddProduct;