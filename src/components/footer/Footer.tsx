import './footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footerContainer'>

                <div className='footerTop'>
                    <div className='footerBrand'>
                        <Link to="/">
                            <img className='footerLogo' src="/logo-branco-copy.png" alt="Software House Logo" />
                        </Link>
                    </div>

                    <div className='footerContact'>
                        <p>
                            <img className='footerIcon' src="/icons/whatsapp.png" alt="WhatsApp" />
                            +55 (11) 4002-8922
                        </p>
                        <p>
                            <img className='footerIcon' src="/icons/mail.png" alt="Email" />
                            fale@software.house
                        </p>
                        <div className='footerSocialIcons'>
                            <a className='footerSocialLink' href='#' aria-label="LinkedIn">
                                <img src="/icons/linkedin.png" alt="LinkedIn" />
                            </a>
                            <a className='footerSocialLink' href='#' aria-label="Instagram">
                                <img src="/icons/instagram.png" alt="Instagram" />
                            </a>
                            <a className='footerSocialLink' href='#' aria-label="Facebook">
                                <img src="/icons/facebook.png" alt="Facebook" />
                            </a>
                            <a className='footerSocialLink' href='#' aria-label="YouTube">
                                <img src="/icons/youtube.png" alt="YouTube" />
                            </a>
                            <a className='footerSocialLink' href='#' aria-label="TikTok">
                                <img src="/icons/tiktok.png" alt="TikTok" />
                            </a>
                        </div>
                    </div>

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

                <div className='footerBottom'>
                    <div className='footerCopy'>
                        <span>2026</span>
                        <span>SOFTWARE HOUSES ENGENHARIA DE SOFTWARES LTDA. Todos os direitos reservados.</span>
                    </div>
                    <div className='footerLegalLinks'>
                        <a href="#">Política de Cookies</a>
                        <a href="#">Política de Privacidade</a>
                        <a href="#">Manual do Site</a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
