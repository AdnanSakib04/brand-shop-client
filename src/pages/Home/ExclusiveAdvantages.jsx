import { BsFillPeopleFill } from "react-icons/bs";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { RiCustomerServiceFill } from "react-icons/ri";
import { BiSolidTShirt } from "react-icons/bi";
import { GiTrade } from "react-icons/gi";
import { IoMdSettings } from "react-icons/io";

const ExclusiveAdvantages = () => {
    return (
        <div className=" bg-white shadow-lg border mb-40 rounded-3xl max-w-7xl mx-auto mt-36">
        <h1 className="mt-10 text-5xl font-bold text-center mb-10">Exclusive Advantages</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-6 md:p-0  gap-y-6 mb-20 justify-items-center">
            <div>
               <div className="flex flex-col  items-center">
                <span className=" text-[100px]"><BsFillPeopleFill></BsFillPeopleFill></span>
                <h1 className="text-3xl">Expert Staff</h1>
                </div> 
            </div>
            <div>
               <div className="flex flex-col  items-center">
                <span className=" text-[100px]"><AiOutlineDollarCircle></AiOutlineDollarCircle></span>
                <h1 className="text-3xl">Competitive Pricing</h1>
                </div> 
            </div>
            <div>
               <div className="flex flex-col  items-center">
                <span className=" text-[100px]"><RiCustomerServiceFill></RiCustomerServiceFill></span>
                <h1 className="text-3xl">Exceptional Service</h1>
                </div> 
            </div>
            <div>
               <div className="flex flex-col  items-center">
                <span className=" text-[100px]"><GiTrade></GiTrade></span>
                <h1 className="text-3xl">Trade Old Vehicles</h1>
                </div> 
            </div>
            <div>
               <div className="flex flex-col  items-center">
                <span className=" text-[100px]"><BiSolidTShirt></BiSolidTShirt></span>
                <h1 className="text-3xl">Free Merchandise</h1>
                </div> 
            </div>
            <div>
               <div className="flex flex-col  items-center">
                <span className=" text-[100px]"><IoMdSettings></IoMdSettings></span>
                <h1 className="text-3xl">Spare Parts</h1>
                </div> 
            </div>

        </div>


        
    </div>
    );
};

export default ExclusiveAdvantages;