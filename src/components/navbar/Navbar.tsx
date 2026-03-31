import './navbar.css';
import { Search } from "lucide-react";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className="navbar-header">

            <div className="navbar-left">
                <Link to="/">
                    <img className="navbar-logo" src="/logo-branco.png" alt="Logo" />
                </Link>
            </div>

            <div className="navbar-search-wrapper">
                <Search className="search-icon" size={18} />
                <input
                    type="text"
                    placeholder="Pesquisar"
                    className="navbar-search"
                />
            </div>

            <nav className="navbar-nav">
                <Link to="/solucoes">Soluções</Link>
                <Link to="/showcases">Showcases</Link>
                <a href="/#setores">Setores</a>
                <a href="/#sobre">Sobre</a>
                <a href="/#contato">Contato</a>
            </nav>

        </header>
    );
};

export default Navbar;