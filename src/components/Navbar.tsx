import { useState } from "react";
import { resources } from "../constants/constants";
import { FiMenu } from "react-icons/fi";
import { IoIosCloseCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <nav className="
            sticky top-0 z-50 w-full backdrop-blur flex 
            justify-between items-center 
            bg-navbar border-b-4 border-royal-gold-solid p-6 text-white"
        >
            <p className="font-bold text-xl cursor-pointer hover:text-royal-gold-solid-hover" onClick={() => navigate(`/`)}>Timmy Tram</p>

            {/* Desktop Links */}
            <ul className="hidden md:flex space-x-4">
                {resources.map((resource: string, index: number) => (
                    <li key={index} className="font-bold hover:text-gray-300 cursor-pointer">
                        {resource}
                    </li>
                ))}
            </ul>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
                <button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <IoIosCloseCircle size={24} /> : <FiMenu size={24} />}
                </button>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div className="absolute top-full left-0 w-full bg-black border-t border-white md:hidden">
                    <ul className="flex flex-col items-start p-2 rounded-lg space-y-2">
                        {resources.map((resource: string, index: number) => (
                            <div className="w-full hover:bg-royal-blue p-4 cursor-pointer" key={index}>
                                <li className="font-bold">
                                    {resource}
                                </li>
                            </div>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
