import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BrandCard from "./BrandCard";

const Brands = () => {
    const loadedBrands = useLoaderData();
    const [brands, setBrands] = useState(loadedBrands);
    return (
        <div className='m-20'>
        <h1 className='text-6xl text-center my-20 text-purple-600'>Our Brands {brands.length}</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {
            brands.map(singleBrand => <BrandCard
                key={singleBrand._id}
                singleBrand={singleBrand}
                brands={brands}>
            </BrandCard>)
          }
        </div>
      </div>
    );
};

export default Brands;