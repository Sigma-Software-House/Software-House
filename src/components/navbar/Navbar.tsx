import './navbar.css';
import { Search } from "lucide-react";

const Navbar = () => {
    return (
        <header className="navbar-header">

            <div className="navbar-left">
                <img className="navbar-logo" src="/logo-branco.png" alt="Logo" />
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
                <a href="#solucoes">Soluções</a>
                <a href="#showcases">Showcases</a>
                <a href="#setores">Setores</a>
                <a href="#sobre">Sobre</a>
                <a href="#contato">Contato</a>
            </nav>

        </header>
    );
};

export default Navbar;