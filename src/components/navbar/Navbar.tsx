import { useState } from 'react';
import './navbar.css';
import { Menu, X } from "lucide-react";
import { Link, NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const isHomeActive = location.pathname === '/';
    const isSolutionsActive = location.pathname === '/solucoes' || location.pathname.startsWith('/solutions');
    const isSectorsActive = location.pathname === '/setores' || location.pathname.startsWith('/sectors');

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="navbar-header">

            <div className="navbar-left">
                <Link to="/" onClick={closeMenu}>
                    <img className="navbar-logo" src="/logo-branco.png" alt="Logo" fetchPriority="high" decoding="async" />
                </Link>
            </div>

            {/* <div className="navbar-search-wrapper">
                <Search className="search-icon" size={18} />
                <input
                    type="text"
                    placeholder="Pesquisar"
                    className="navbar-search"
                />
            </div> */}

            <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle Menu">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            <nav className={`navbar-nav ${isMenuOpen ? 'open' : ''}`}>
                 <NavLink 
                    to="/" 
                    className={({ isActive }) => isActive || isHomeActive ? 'active' : ''}
                    onClick={closeMenu}
                >
                    Início
                </NavLink>
                <NavLink 
                    to="/solucoes" 
                    className={({ isActive }) => isActive || isSolutionsActive ? 'active' : ''}
                    onClick={closeMenu}
                >
                    Soluções
                </NavLink>
                <NavLink 
                    to="/showcases"
                    className={({ isActive }) => isActive || location.pathname.startsWith('/showcases') ? 'active' : ''}
                    onClick={closeMenu}
                >
                    Showcases
                </NavLink>
                <NavLink 
                    to="/setores"
                    className={({ isActive }) => isActive || isSectorsActive ? 'active' : ''}
                    onClick={closeMenu}
                >
                    Setores
                </NavLink>
                <NavLink to="/sobre" onClick={closeMenu}>Sobre</NavLink>
                <NavLink to="/contato" onClick={closeMenu}>Contato</NavLink>
            </nav>

        </header>
    );
};

export default Navbar;