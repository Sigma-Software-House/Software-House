import './footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footerContainer'>

                <div className='footerTop'>
                    <div className='footerBrandColumn'>
                        <Link to="/" className='footerLogoLink'>
                            <img className='footerLogo' src="/logo-branco-copy.png" alt="Software House Logo" loading="lazy" decoding="async" />
                        </Link>
                        <p className='footerBrandDescription'>
                            Transformando ideias em soluções digitais inovadoras, criando o futuro da tecnologia com excelência.
                        </p>
                    </div>

                    <div className='footerNavColumn'>
                        <h4 className='footerColumnTitle'>Links Rápidos</h4>
                        <nav className='footerNav'>
                            <ul>
                                <li><a href="/#solucoes">Soluções</a></li>
                                <li><Link to="/showcases">Showcases</Link></li>
                                <li><a href="/#setores">Setores</a></li>
                                <li><a href="/#sobre">Sobre</a></li>
                                <li><a href="/#contato">Contato</a></li>
                            </ul>
                        </nav>
                    </div>

                    <div className='footerContactColumn'>
                        <h4 className='footerColumnTitle'>Contato</h4>
                        <div className='footerContactList'>
                            <a href="https://wa.me/5511943131835" className='footerContactItem' target="_blank" rel="noopener noreferrer">
                                <img className='footerIcon' src="/icons/whatsapp.png" alt="WhatsApp" loading="lazy" decoding="async" />
                                +55 (11) 94313-1835
                            </a>
                            <a href="mailto:softwarehouse.sigma@gmail.com" className='footerContactItem'>
                                <img className='footerIcon' src="/icons/mail.png" alt="Email" loading="lazy" decoding="async" />
                                softwarehouse.sigma@gmail.com
                            </a>
                            <a href="https://www.instagram.com/softwarehouse.sigma" className='footerContactItem' target="_blank" rel="noopener noreferrer">
                                <img className='footerIcon' src="/icons/instagram.png" alt="Instagram" loading="lazy" decoding="async" />
                                Instagram
                            </a>
                        </div>
                    </div>
                </div>

                <div className='footerBottom'>
                    <div className='footerCopy'>
                        <span>© {new Date().getFullYear()} Software House.</span>
                        <span className='footerRights'>Todos os direitos reservados.</span>
                    </div>
                    <div className='footerLegalLinks'>
                        <a href="#">Política de Privacidade</a>
                        <a href="#">Termos de Uso</a>
                        <a href="#">Política de Cookies</a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
