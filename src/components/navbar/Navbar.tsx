import './navbar.css';
import { Search } from "lucide-react";
import { Link, NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();

    // Funções auxiliares para manter ativos os links caso estejamos em uma sub-página
    const isSolutionsActive = location.pathname === '/solucoes' || location.pathname.startsWith('/solutions');
    const isSectorsActive = location.pathname === '/setores' || location.pathname.startsWith('/sectors');

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
                <NavLink 
                    to="/solucoes" 
                    className={({ isActive }) => isActive || isSolutionsActive ? 'active' : ''}
                >
                    Soluções
                </NavLink>
                {/* <NavLink to="/showcases">Showcases</NavLink> */}
                <NavLink 
                    to="/setores"
                    className={({ isActive }) => isActive || isSectorsActive ? 'active' : ''}
                >
                    Setores
                </NavLink>
                <NavLink to="/sobre">Sobre</NavLink>
                <NavLink to="/contato">Contato</NavLink>
            </nav>

        </header>
    );
};

export default Navbar;