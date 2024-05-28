import {Link} from "react-router-dom"
import {useState} from "react"
import { BsSearch } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { IoCartOutline, IoReorderTwoSharp,IoCloseSharp } from "react-icons/io5";

const Header=()=>{
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return(
        <div className="flex flex-row justify-center items-center bg-lime-900 p-5 w-full">
            <div className="flex md:hidden flex-row justify-between items-center w-full">
                <div className="logo-container-sm">
                    <h1 className="font-bold text-white"><Link to="/">H</Link></h1>
                </div>
                <div className="flex flex-row justify-between w-40 icons-container-sm">
                    <button type="button" className="text-white"><BsSearch className="font-bold"/></button>
                    <button type="button" className="text-white"><CgProfile className="font-bold"/></button>
                    <button type="button" className="text-white"><IoCartOutline className="font-bold"/></button>
                    <button type="button" className="text-white" onClick={toggleMenu}><IoReorderTwoSharp className="font-bold"/></button>
                </div>
                {isMenuOpen && (
                    <div className="absolute top-0 left-0 w-full h-full bg-lime-950 bg-opacity-90 text-white flex flex-col items-center justify-center" style={{ height: '100vh' }}>
                        <button
                        type="button"
                        className="absolute top-4 right-4 text-white"
                        onClick={() => setIsMenuOpen(false)}
                        >
                        <IoCloseSharp className="font-bold" size={24} />
                        </button>
                        <div className="flex flex-col absolute items-start p-4 mt-14 space-y-4 top-6 left-6">
                            <button type="button" className="py-2"><Link to="/plants">Plants</Link></button>
                            <button type="button" className="py-2" onClick={() => setIsMenuOpen(false)}>For Offices</button>
                            <button type="button" className="py-2" onClick={() => setIsMenuOpen(false)}>Plants Care</button>
                            <button type="button" className="py-2" onClick={() => setIsMenuOpen(false)}>About Us</button>
                        </div>
                    </div>
                )}
            </div>
            <div className="hidden md:flex flex-row justify-between items-center w-[90%] lg:w-[80%]">
                <div className="logo-container-md">
                    <h1 className="logo-md text-white font-bold text-[25px]"><Link to="/">H</Link></h1>
                </div>
                <ul className="flex flex-row justify-between align-middle w-[45%] text-white font-[400] text-[17px]">
                    <li className="feature-item-md"><Link to="/plants">Plants</Link></li>
                    <li className="feature-item-md">For Offices</li>
                    <li className="feature-item-md">Plants Care</li>
                    <li className="feature-item-md">About Us</li>
                </ul>
                <div className="flex flex-row justify-between align-middle w-[10%] icons-container-md text-white font-bold text-[17px]">
                    <button type="button" className="icon-button-md"><BsSearch /></button>
                    <button type="button" className="icon-button-md"><CgProfile /></button>
                    <button type="button" className="icon-button-md"><IoCartOutline /></button>
                </div>
            </div>
        </div>
    )
}

export default Header