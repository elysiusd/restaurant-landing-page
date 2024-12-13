import { FaChartArea } from "react-icons/fa";
import { IoDiamond } from "react-icons/io5";
import { MdOutlineBakeryDining } from "react-icons/md";
import { MdOutlineArrowForward } from "react-icons/md";

function WhyUs() {
    return (
        <div className="w-full py-5 bg-slate-50 mt-5">
            <div className="flex flex-col lg:flex-row px-10 max-w-[1240px] mx-auto gap-6 justify-center items-center">
                <div className="flex flex-row">
                    <div className="bg-green-500 my-5 lg:w-[400px] text-white py-5 px-5 shadow-lg">
                        <h1 className="font-bold text-3xl py-4">Why Choose Name</h1>
                        <p className="py-4"> Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit Asperiores dolores sed et.
                            Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.
                        </p>
                        <div className="flex justify-center">
                        <button className="bg-green-100 text-black py-2 px-6 items-center hover:bg-green-800 hover:text-white rounded-lg">
                               <MdOutlineArrowForward size={20} />
                        </button>

                        </div>
                    </div>
                </div>
                <div className="flex flex-row">
                    <div className="bg-white my-5 lg:w-[200px] h-[300px] text-black py-5 px-5 shadow-lg">
                        <div className="flex justify-center text-green-500">
                            <FaChartArea size={40}/>
                        </div>
                        <h1 className="font-bold text-md  py-4">Corporis voluptates officia eiusmod</h1>
                        <p className="py-4 text-gray-500"> Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip.
                        </p>
                    </div>
                </div>
                <div className="flex flex-row">
                    <div className="bg-white my-5 lg:w-[200px] h-[300px] text-black py-5 px-5 shadow-lg">
                        <div className="flex justify-center text-green-500">
                                <IoDiamond size={40}/>
                        </div>
                        <h1 className="font-bold text-md py-4">Ullamco laboris ladore lore pan</h1>
                        <p className="py-4 text-gray-500">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                        </p>
                        <div className="flex justify-center">
                        </div>
                    </div>
                </div>
                <div className="flex flex-row ">
                    <div className="bg-white my-5 lg:w-[200px] h-[300px] justify-center items-center text-black py-5 px-5 shadow-lg">
                        <div className="flex justify-center text-green-500">
                                        <MdOutlineBakeryDining size={40}/>
                        </div>
                        <h1 className="font-bold text-md py-4">Labore consequatur incidid dolore</h1>
                        <p className="py-4  text-gray-500">Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere </p>
                        <div className="flex justify-center">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhyUs;