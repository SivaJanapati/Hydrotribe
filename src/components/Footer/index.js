import { FaFacebookF, FaTwitter, FaInstagram  } from "react-icons/fa";

const Footer = ()=>{

    return(
        <div className="bg-lime-900 flex justify-center items-center w-full">
            <div className="p-5 flex md:hidden flex-col justify-between items-center">
                <div className='p-2 bg-tranparent w-full ml-1 mr-1 flex justify-between items-center border-b-2'>
                    <input type="email" className='bg-transparent border-none outline-none text-white '  placeholder="your Mail"/>
                    <button type="button" className='bg-white border-none outline-none p-1 pl-4 pr-4 rounded-full text-lime-900 text-md'>Subscribe</button>
                </div>
                <ul className='mt-10 pb-3 flex flex-col justify-center items-center'>
                    <li className='text-white mt-1 mb-1'>Help</li>
                    <li className='text-white mt-1 mb-1'>Contact Us</li>
                    <li className='text-white mt-1 mb-1'>Privacy & Terms</li>
                </ul>
                <div className='mt-4 mb-3  flex flex-row justify-around items-center w-60'>
                    <button type="button" className='text-white'><FaFacebookF/></button>
                    <button type="button" className='text-white'><FaTwitter /></button>
                    <button type="button" className='text-white'><FaInstagram/></button>
                </div>
            </div>
            <div className="hidden md:flex flex-col pt-16 pb-16 w-[90%] lg:w-[80%]">
                <div className="flex flex-row justify-between w-full items-center mb-3">
                    <p className="md:w-64 text-white lg:w-[50%] font-bold text-md lg:text-[30px] xl:text-[35px]">
                        Stay update with special offers,
                        plant parenting tips, and more.
                    </p>
                    <div className='p-2 bg-tranparent font-400 w-auto ml-1 mr-1 flex justify-between items-center border-b-2 lg:w-90'>
                        <input type="email" className='bg-transparent border-none outline-none text-white text-lg' placeholder="Your Mail"/>
                        <button type="button" className='bg-white border-none outline-none p-1 pl-4 pr-4 rounded-full text-lime-900 text-md'>Subscribe</button>
                    </div>
                </div>
                <div className="w-full flex flex-row justify-between items-center mt-10 text-bold text-lg ">
                    <ul className='flex list-none flex-row justify-around items-center text-white'>
                        <li className='mr-5'>Help</li>
                        <li className='ml-5 mr-5'>Contact Us</li>
                        <li className='ml-5 mr-5'>Privacy & Terms</li>
                    </ul>
                    <div className='footer-social-md text-white '>
                        <button type="button" className='ml-5 mr-5'><FaFacebookF/></button>
                        <button type="button" className='ml-5 mr-5'><FaTwitter /></button>
                        <button type="button" className='ml-5'><FaInstagram/></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer