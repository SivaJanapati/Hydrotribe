import Header from "../Header"
import Footer from "../Footer"
import plant1 from "../../images/plant1.jpg"
import plant2 from "../../images/plant2.jpg"
import plant3 from "../../images/plant3.jpg"
import plant4 from "../../images/plant4.jpg"
import plant5 from "../../images/plant5.jpeg"
import plant6 from "../../images/plant6.jpeg"
import plant7 from "../../images/plant7.jpg"
import plant8 from "../../images/plant8.jpg"
import plant9 from "../../images/plant9.jpg"
import plant10 from "../../images/plant10.jpg"
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";



const Home = ()=>{

    return(
        <div className="home w-full flex flex-col justify-center items-center bg-cream">
            <Header/>
            <div className="flex md:hidden flex-col w-full">
                <div className="flex flex-row justify-between items-center pl-5 ">
                    <div className="w-50 flex flex-col justify-around items-start pr-5">
                        <p className="text-[20px] font-bold pt-2 pb-2 sm:text-[35px] sm:leading-10">
                            Best house
                            plants varieties.
                        </p>
                        <p className="text-[13px] text-bold pt-2 pb-2">
                            Beautiful living greenery
                            homes and offices
                        </p>
                        
                        <button type="button" className="text-white text-sm bg-lime-600 rounded-3xl pl-4 pr-5  h-7 mt-2 mb-2">Shop Now</button>
                        <div className="flex flex-row items-center w-full mt-2">
                            <p className="mr-3 text-bold text-slate-500 text-lg">Bloomberg</p>
                            <p className="ml-3 text-bold text-slate-500 text-lg">Forbes</p>
                        </div>
                    </div>
                    <div className="w-60 1-image-container-sm">
                        <img src={plant1} alt="plant1" className="w-full h-[280px]"/>
                    </div>
                </div>
                <div className="p-5 flex flex-row justify-center items-center mt-4">
                    <div className="w-70 flex justify-center items-center text-center ">
                        <p className="pl-5 pr-5">Each houseplant set is handled quickly and safely before being sent to your destination in specially designed insulated packaging.</p>
                    </div>
                </div>
                <div className="pl-5 pr-5 pt-5 flex flex-col justify-center items-center">
                    <div className="flex justify-center items-center text-center"><p className="font-bold text-lg text-center">Learn how ve take care of your plant at every stage of its journey from our greenhouse to your home.</p></div>
                    <button type="button" className="flex flex-row justify-center items-center mt-3">LEARN MORE <IoArrowForwardCircleSharp className="text-6xl pl-5"/></button>
                </div>
                <div className="p-5">
                    <img src={plant3} alt="plant2" className="w-full"/>
                    <div className="flex flex-row justify-between items-center mt-5">
                        <p className="text-xs font-bold ">STEP 1</p>
                        <p className="text-md font-bold">We put everything together</p>
                        <div className="flex flex-row justify-around items-center">
                            <button type="button" className="mr-2"><IoIosArrowDropleft className="text-2xl"/></button>
                            <button type="button" className="ml-2"><IoIosArrowDropright className="text-2xl"/></button>
                        </div>
                    </div>
                </div>
                <div className="p-5 flex flex-col">
                    <p className="text-xs font-bold">OUR SHOP</p>
                    <div className="flex flex-row justify-between items-center mt-5 mb-5">
                        <p className="text-xl w-60 font-bold">
                            Here are the best seller
                            from our varieties
                        </p>
                        <button className="bg-lime-600 pl-6 pr-6 h-8 rounded-2xl text-white items-end text-[13px]">
                            See All
                        </button>
                    </div>
                    <div className="flex flex-row justify-center items-center gap-3 ">
                        <div className="">
                            <img src={plant2} alt="plant" />
                            <p className="5-desc3">plant1</p>
                        </div>
                        <div className="5-desc-image-box">
                            <img src={plant4} alt="plant" />
                            <p className="5-desc3">plant2</p>
                        </div>
                        <div className="5-desc-image-box">
                            <img src={plant5} alt="plant" />
                            <p className="5-desc3">plant3</p>
                        </div>
                        <div className="5-desc-image-box">
                            <img src={plant6} alt="plant" />
                            <p className="5-desc3">plant4</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="flex flex-col justify-between items-center">
                            <p className="mt-3 font-bold text-md">REVIEWS</p>
                            <p className="mt-10 flex flex-row justify-around items-center gap-2 font-semibold"><FaStar  className="text-yellow-600"/> <FaStar className="text-yellow-600"/> <FaStar className="text-yellow-600"/> <FaStar className="text-yellow-600"/> <FaStar className="text-yellow-600"/> 5/5</p>
                        </div>
                        <p className="mt-5 text-xl font-semibold text-center mb-5">We adore all our friends atBloomey, especially the beauties who have come to live with us! Great advice when needed, beautifully and safely packaged. Highly recommend, it's just the best place for healthy plants and great value!</p>
                        <div className="flex flex-row gap-3">
                            <button type="button" className="text-3xl"><IoIosArrowDropleft/></button>
                            <button type="button" className="text-3xl"><IoIosArrowDropright /></button>
                        </div>
                    </div>
                    <div className="flex flex-row justify-center flex-wrap items-center gap-3 mt-8 ">
                        <img src={plant7} alt="extra1" className="w-[45%] h-55"/>
                        <img src={plant8} alt="extra1" className="w-[45%] h-55"/>
                    </div>
                    <div className="7-img-container-sm mt-5">
                        <img src={plant9} alt="extra2" className="plants2-image-sm"/>
                    </div>
                </div>
            </div>
            <div className="hidden md:flex flex-col justify-center items-center">
                <div className="flex flex-row justify-between items-center mb-8 w-[90%] lg:w-[80%]">
                    <div className="w-50">
                        <p className="font-[600] text-[50px] lg:text-[70px] w-[90%]">
                            Best house
                            plants varieties.
                        </p>
                        <button type="button" className="mt-3 mb-10 bg-lime-600 text-white w-[120px] rounded-full h-[33px] font-[500] text-[14px]">Shop Now</button>
                        <p className="font-[700]  mb-5">
                            Beautiful living greenery for
                            homes and offices
                        </p>
                        <div className="flex flex-row justify-start items-center gap-8">
                            <p className="font-bold text-[25px] text-lime-800">Bloomberg</p>
                            <p className="font-bold text-[25px] text-lime-800">Forbes</p>
                        </div>
                    </div>
                    <div className="w-50">
                        <img src={plant1} alt="plant1" className="w-[350px]"/>
                    </div>
                </div>
                <div className="flex flex-row justify-between items-start w-[90%] lg:w-[80%] mb-10">
                    <div className="font-[350] text-[18px] w-50 pr-10 pt-2">
                        <p className="w-[90%]">Each houseplant set is handled quickly and safely before being sent to your destination in specially designed insulated packaging.</p>
                    </div>
                    <div className="flex flex-col justify-start w-50">
                        <p className="font-[600] text-[22px] mb-4">Learn how ve take care of your plant at every stage of its journey from our greenhouse to your home.</p>
                        <button type="button" className="flex flex-row justify-start items-center mt-2 gap-4 font-[400]">LEARN MORE <IoArrowForwardCircleSharp className="text-[35px]"/></button>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center w-[80%] mt-8 mb-8 bg-white pt-[80px] pb-[80px] shadow-lg rounded-3xl">
                    <img src={plant3} alt="plant3" className="w-[400px] h-[550px]"  />
                    <div className="flex flex-row justify-between items-center w-[90%] lg:w-[80%] pt-8">
                                <p className="text-[15px]">STEP 1</p>
                                <p className="text-[20px] font-bold">We put everything together</p>
                                <div className="flex flex-row justify-between items-center gap-2">
                                <button type="button" className="text-[25px]"><IoIosArrowDropleft /></button>
                                <button type="button" className="text-[25px]"><IoIosArrowDropright /></button>
                                </div>
                    </div>
    
                </div>
                <div className="flex flex-col justify-center items-start w-[90%] lg:w-[80%] pt-16 pb-10">
                    <p className="font-[500] text-[15px]">OUR SHOP</p>
                    <p className="mt-5 font-bold text-[25px] font-serif w-[40%]">
                            Here are the best seller
                            from our varieties
                    </p>
                    <button className="mt-5 mb-5 bg-lime-600 text-white pl-8 pr-8 pt-1 pb-1 rounded-[18px] text-[15px]">
                            See All
                    </button>
                    
                    <div className="flex flex-row justify-center items-center w-full gap-4 mt-6">
                        <div className="flex flex-col">
                            <img src={plant2} alt="plant" className="w-[300px] h-[400px]"/>
                            <p className="font-[400] text-[16px] mt-2">plant1</p>
                        </div>
                        <div className="flex flex-col">
                            <img src={plant4} alt="plant" className="w-[300px] h-[400px]"/>
                            <p className="font-[400] text-[16px] mt-2">plant2</p>
                        </div>
                        <div className="flex flex-col">
                            <img src={plant5} alt="plant" className="w-[300px] h-[400px]"/>
                            <p className="font-[400] text-[16px] mt-2">plant3</p>
                        </div>
                        <div className="flex flex-col">
                            <img src={plant6} alt="plant" className="w-[300px] h-[400px]"/>
                            <p className="font-[400] text-[16px] mt-2">plant4</p>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between items-center mt-14 mb-20">
                        <div className="flex flex-col justify-between items-start gap-4">
                            <p className="font-[500] text-[16px]">REVIEWS</p>
                            <p className="flex flex-row justify-center items-center gap-2 font-[500]"><FaStar  className="text-yellow-600"/> <FaStar className="text-yellow-600"/> <FaStar className="text-yellow-600"/> <FaStar className="text-yellow-600"/> <FaStar className="text-yellow-600"/> 5/5</p>
                        </div>
                        <p className="w-[40%] font-[600] text-[19px] lg:text-[22px]">We adore all our friends atBloomey, especially the beauties who have come to live with us! Great advice when needed, beautifully and safely packaged. Highly recommend, it's just the best place for healthy plants and great value!</p>
                        <div className="flex flex-row gap-3 ">
                            <button type="button" className="font-bold text-[20px]"><IoIosArrowDropleft/></button>
                            <button type="button" className="font-bold text-[20px]"><IoIosArrowDropright /></button>
                        </div>
                    </div>
                    <div className="flex flex-row justify-center items-center w-full gap-5">
                        <img src={plant7} alt="extra1" className="h-[280px] lg:h-[400px] w-[32%]"/>
                        <img src={plant10} alt="extra1" className="h-[280px] lg:h-[400px] w-[32%]"/>
                        <img src={plant8} alt="extra1" className="h-[280px] lg:h-[400px] w-[32%]"/>
                    </div>
                    <div className="mt-10 mb-10">
                        <img src={plant9} alt="extra2" className="plants2-image-md"/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Home