const Navbar = () => {
    return (
        <nav className="
        sticky top-0 z-50 w-full backdrop-blur flex 
        justify-between items-center 
        bg-navbar border-b-4 p-6 text-white"
        >
            <p className="font-bold text-xl">Timmy Tram</p>

            <div>
                <ul className="flex space-x-4">
                    <li className="hover:text-blue-300 cursor-pointer">Home</li>
                    <li className="hover:text-blue-300 cursor-pointer">About</li>
                    <li className="hover:text-blue-300 cursor-pointer">Contact</li>
                    <li className="hover:text-blue-300 cursor-pointer">Education</li>
                    <li className="hover:text-blue-300 cursor-pointer">Technologies</li>
                    <li className="hover:text-blue-300 cursor-pointer">Projects</li>
                    <li className="hover:text-blue-300 cursor-pointer">Experiences</li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;