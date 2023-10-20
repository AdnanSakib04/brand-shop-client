import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BrandCard from "./BrandCard";

const Brands = () => {
    const loadedBrands = useLoaderData();
    const [brands, setBrands] = useState(loadedBrands);
    return (
        <div className='m-20'>
        <h1 className="mt-10 text-5xl font-bold text-center mb-14  max-w-max mx-auto p-3 rounded-lg">Our Brands</h1>
        <div className="max-w-7xl mx-auto">
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-6 md:p-0  gap-y-6 mb-20 justify-items-center'>
          {
            brands.map(singleBrand => <BrandCard
                key={singleBrand._id}
                singleBrand={singleBrand}
                brands={brands}>
            </BrandCard>)
          }
        </div>
        </div>
       
      </div>
    );
};

export default Brands;