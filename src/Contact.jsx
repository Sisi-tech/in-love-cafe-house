import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';


export default function Contact() {
    return (
        <div className="flex flex-col items-center justify-center bg-orange-100 pt-10 pb-20">
            <video autoPlay loop muted className="w-3/5 rounded-md">
                <source src="src/assets/cafeHouse.mp4" type="video/mp4" />
            </video>
            <div className="border border-orange-950 w-4/5 m-10"></div>
            <div>
                <div>
                    <ul className='flex gap-16 mb-16'>
                        <li className='w-[50px] h-[50px] rounded-lg flex justify-center items-center bg-[#2b2be4] text-white text-4xl shadow-md shadow-gray-400 hover:scale-110'>
                            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                <FaFacebook />
                            </a>
                        </li>
                        <li className='w-[50px] h-[50px] rounded-lg flex justify-center items-center bg-[#E1306C] text-white text-4xl shadow-md shadow-gray-400 hover:scale-110'>
                            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                                <FaInstagram />
                            </a>
                        </li>
                        <li className='w-[50px] h-[50px] rounded-lg flex justify-center items-center bg-[#0077B5] text-white text-4xl shadow-md shadow-gray-400 hover:scale-110'>
                            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin />
                            </a>
                        </li>
                        <li className='w-[50px] h-[50px] rounded-lg flex justify-center items-center bg-[#0074e4] text-white text-4xl shadow-md shadow-gray-400 hover:scale-110'>
                            <a href="mailto:InLoveCafe@gmail.com" target="_blank" rel="noopener noreferrer">
                                <HiOutlineMail />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="grid sm:grid-cols-1 lg:grid-cols-3 justify-between lg:gap-14 sm:gap-6">
                <div>
                    <h2 className="text-2xl pb-6">Location</h2>
                    <a
                        href="https://www.google.com/maps/place/136-17+39th+Ave+Flushing,+NY+11354"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                    >
                        <p>136-17 39th Ave</p> 
                        <p>Flushing, NY 11354</p>
                    </a>
                </div>
                <div>
                    <h2 className="text-2xl pb-6">Contact</h2>
                    <div className="pb-2">
                        <a href="mailto:InLoveCafe@gmail.com" className="hover:underline">InLoveCafe@gmail.com</a>
                    </div>
                    <div>
                        <a href="tel:888-888-888" className="hover:underline">888-888-888</a>
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl pb-6">Hours</h2>
                    <p>Monday - Friday</p>
                    <p>10am -- 10pm</p>
                    <p>Saturday -- Sunday</p>
                    <p>11am -- 11pm</p>
                </div>
            </div>
        </div>
    )
};

