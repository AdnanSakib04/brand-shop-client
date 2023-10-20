
const BrandCard = ({ singleBrand }) => {
    const { photo, brand } = singleBrand;
    return (
        <div>
            <div className="card card-compact w-80 bg-base-100 shadow-xl h-[320px]">
               <div className=" ">
                <div className="">
                <figure ><img src={photo} className="h-[240px] p-2" alt="Brands" /></figure>

                </div>
                <div className="card-body">
                    <h2 className="text-center text-3xl font-bold">{brand}</h2>
                    
                </div>
               </div>
            </div>

        </div>
    );
};

export default BrandCard;