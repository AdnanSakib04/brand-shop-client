
const BrandCard = ({ singleBrand }) => {
    const { photo, brand } = singleBrand;
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={photo} className="max-h-[240px] p-2" alt="Brands" /></figure>
                <div className="card-body">
                    <h2 className="text-center text-3xl font-bold">{brand}</h2>
                    
                </div>
            </div>

        </div>
    );
};

export default BrandCard;