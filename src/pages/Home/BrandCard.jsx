import { Link } from "react-router-dom";

const BrandCard = ({ singleBrand }) => {
    const { photo, brand } = singleBrand;
    return (
        <Link to={`allproducts/${brand}`}>
            <div >
                <div className="card card-compact w-80 bg-[#b2d8d8] shadow-xl h-[320px]">
                    <div className=" ">
                        <div className="">
                            <figure ><img src={photo} className="h-[240px] p-2" alt="Brands" /></figure>
                        </div>
                        <div className="card-body">
                            <h2 className="text-center text-3xl font-bold text-gray-950">{brand}</h2>

                        </div>
                    </div>
                </div>

            </div>
        </Link>
    );
};

export default BrandCard;