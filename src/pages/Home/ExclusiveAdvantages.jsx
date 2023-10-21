import { BsFillPeopleFill } from "react-icons/bs";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { RiCustomerServiceFill } from "react-icons/ri";
import { BiSolidTShirt } from "react-icons/bi";
import { GiTrade } from "react-icons/gi";
import { IoMdSettings } from "react-icons/io";

const ExclusiveAdvantages = () => {
    return (
        
        <div>
            
            <div className=" bg-[#b2d8d8] shadow-lg border mb-40 rounded-3xl max-w-7xl mx-auto mt-3 text-gray-950">
            <h1 className="mt-10 text-5xl font-bold text-center  max-w-max mx-auto p-3 rounded-lg">Exclusive Advantages</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-6 md:p-0  gap-y-6 mb-20 mt-10 justify-items-center">
            <div>
               <div className="flex flex-col  items-center">
                <span className=" text-[100px] text-yellow-300"><BsFillPeopleFill></BsFillPeopleFill></span>
                <h1 className="text-3xl">Expert Staff</h1>
                </div> 
            </div>
            <div>
               <div className="flex flex-col  items-center">
                <span className=" text-[100px] text-green-600"><AiOutlineDollarCircle></AiOutlineDollarCircle></span>
                <h1 className="text-3xl">Competitive Pricing</h1>
                </div> 
            </div>
            <div>
               <div className="flex flex-col  items-center">
                <span className=" text-[100px] text-blue-600"><RiCustomerServiceFill></RiCustomerServiceFill></span>
                <h1 className="text-3xl">Exceptional Service</h1>
                </div> 
            </div>
            <div>
               <div className="flex flex-col  items-center">
                <span className=" text-[100px] "><GiTrade></GiTrade></span>
                <h1 className="text-3xl">Trade Old Vehicles</h1>
                </div> 
            </div>
            <div>
               <div className="flex flex-col  items-center">
                <span className=" text-[100px] text-orange-700"><BiSolidTShirt></BiSolidTShirt></span>
                <h1 className="text-3xl">Free Merchandise</h1>
                </div> 
            </div>
            <div>
               <div className="flex flex-col  items-center">
                <span className=" text-[100px] text-gray-500"><IoMdSettings></IoMdSettings></span>
                <h1 className="text-3xl">Spare Parts</h1>
                </div> 
            </div>

        </div>


        
    </div>
        </div>
    );
};

export default ExclusiveAdvantages;