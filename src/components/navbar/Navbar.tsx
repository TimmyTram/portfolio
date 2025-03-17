import './styles/navbar.css';

const Navbar = () => {
    return (
        <div className="navbar-container">
            <span className="name-details">Timmy Tram</span>
            <nav className="nav-details">
                <a href='#Home'>Home</a>
                <a href="#about">About</a>
                <a href="#tech-stack">Technologies</a>
                <a href="#projects">Projects</a>
                <a href="#experiences">Experiences</a>
            </nav>
        </div>
    );
}

export default Navbar;