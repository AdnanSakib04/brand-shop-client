import { BsFuelPump, BsLightningCharge } from "react-icons/bs";
import { AiOutlineSafety } from "react-icons/ai";
import { PiSteeringWheel } from "react-icons/pi";
import { BiLeaf } from "react-icons/bi";
import { GiBattery75 } from "react-icons/gi";
import Marquee from "react-fast-marquee";


const ElectricVehicles = () => {
    return (
        <div className=" bg-gradient-to-r from-[#b2d8d8] to-gray-200 ... shadow-lg border mb-40 rounded-3xl max-w-7xl mx-auto mt-36">
            <h1 className="mt-10 text-5xl font-bold text-center mb-10">We Are Also Selling <br /> Electric Vehicles</h1>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-6 md:p-0  gap-y-6 mb-20 justify-items-center ">
                <div>
                    <div className="flex flex-col md:flex-row  items-center gap-2 p-2">
                        <span className="text-6xl"><BiLeaf></BiLeaf></span>
                        <div className="text-center md:text-start">
                            <h1 className="text-3xl">Eco Friendly</h1>
                            <p> Produce zero tailpipe emissions.</p>
                        </div>
                    </div>

                </div>
                <div>
                    <div className="flex flex-col md:flex-row  items-center gap-2 p-2">
                        <span className="text-6xl"><GiBattery75></GiBattery75></span>
                        <div className="text-center md:text-start">
                            <h1 className="text-3xl">Battery Capacity</h1>
                            <p> High battery capacity.</p>
                        </div>
                    </div>

                </div>
                <div>
                    <div className="flex flex-col md:flex-row  items-center gap-2 p-2 ">
                        <span className="text-6xl"><BsFuelPump></BsFuelPump></span>
                        <div className="text-center md:text-start">
                            <h1 className="text-3xl">Fuel Cost</h1>
                            <p>Save expensive fuels cost</p>
                        </div>
                    </div>

                </div>

                <div>
                    <div className="flex flex-col md:flex-row  items-center gap-2 p-2 ">
                        <span className="text-6xl"><AiOutlineSafety></AiOutlineSafety></span>
                        <div className="text-center md:text-start">
                            <h1 className="text-3xl">Safety</h1>
                            <p>Electric cars are safe and reliable</p>
                        </div>
                    </div>

                </div>
                <div>
                    <div className="flex flex-col md:flex-row  items-center gap-2 p-2 ">
                        <span className="text-6xl"><BsLightningCharge></BsLightningCharge></span>
                        <div className="text-center md:text-start">
                            <h1 className="text-3xl">Charging</h1>
                            <p>Charge your car at low cost</p>
                        </div>
                    </div>

                </div>
                <div>
                    <div className="flex flex-col md:flex-row  items-center gap-2 p-2">
                        <span className="text-6xl"><PiSteeringWheel></PiSteeringWheel></span>
                        <div className="text-center md:text-start">
                            <h1 className="text-3xl">Self-Driving</h1>
                            <p>Built in self-driving feature</p>
                        </div>
                    </div>

                </div>


            </div>

            <div className=" w-3/4 mx-auto mb-7">
            <span className="text-xl text-gray-700 font-bold"><Marquee pauseOnHover="true">
                Get 10% off on buying any electric cars......    
            </Marquee></span>
            </div>
        </div >








    );
};

export default ElectricVehicles;