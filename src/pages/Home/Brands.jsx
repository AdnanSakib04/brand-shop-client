import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BrandCard from "./BrandCard";

const Brands = () => {
    const loadedBrands = useLoaderData();
    const [brands, setBrands] = useState(loadedBrands);
    return (
        <div className='m-20'>
        <h1 className='text-6xl text-center my-20 text-purple-600'>Our Brands {brands.length}</h1>
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