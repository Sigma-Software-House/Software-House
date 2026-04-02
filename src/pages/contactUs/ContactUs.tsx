import { useState } from 'react';
import MethodologyCarousel from '../../components/methodologyCarousel/MethodologyCarousel';
import './contactUs.css';

const ContactUs = () => {
    const [selectedNature, setSelectedNature] = useState('Sistemas & Plataformas');
    const [isRecaptchaChecked, setIsRecaptchaChecked] = useState(true);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    const natures = [
        "Sites Institucionais",
        "Sistemas & Plataformas",
        "Aplicativos Mobile",
        "Automação com IA",
        "SEO & Performance",
        "Discovery",
        "Transformação Digital",
        "Outros"
    ];

    return (
        <section className='contactUs'>
            <div className='sectionContactUs'>
                <div className='contentContactUs'>
                    <h2 className='titleContactUs'>Entre em contato</h2>
                    <p className='textContactUs'>Como podemos ajudar você? Selecione abaixo as soluções que você procura. Nossa equipe especializada estará pronta para ajudá-lo.</p>
                </div>
            </div>
            <div className='borderContactUs'>
                <div className='boxContactUs'>
                    {isSubmitted ? (
                        <div className="contactForm successFeedback">
                            <div className="successIcon">
                                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                </svg>
                            </div>
                            <h3 className="successTitle">Mensagem Enviada com Sucesso!</h3>
                            <p className="successText">Agradecemos o seu contato. Nossa equipe especializada recebeu suas informações e retornará para prosseguirmos com seu projeto.</p>
                            <button type="button" className="submitButton" onClick={() => setIsSubmitted(false)} style={{ marginTop: '30px' }}>
                                Enviar nova mensagem
                            </button>
                        </div>
                    ) : (
                        <form className="contactForm" onSubmit={handleSubmit}>
                            <div className="formGroup">
                                <label className="formLabel">NATUREZA DA CONSULTA</label>
                            <div className="naturezaPills">
                                {natures.map(nature => (
                                    <button
                                        key={nature}
                                        type="button"
                                        className={`pillButton ${selectedNature === nature ? 'active' : ''}`}
                                        onClick={() => setSelectedNature(nature)}
                                    >
                                        {nature}
                                    </button>
                                ))}
                            </div>
                            {selectedNature === 'Outros' && (
                                <div style={{ marginTop: '20px', width: '100%', maxWidth: '400px' }}>
                                    <input type="text" className="formInput" placeholder="Especifique o tipo de projeto..." autoFocus />
                                </div>
                            )}
                        </div>

                        <div className="formRow">
                            <div className="formGroup">
                                <label className="formLabel">NOME COMPLETO</label>
                                <input type="text" className="formInput" placeholder="Ex: João Silva" />
                            </div>
                            <div className="formGroup">
                                <label className="formLabel">E-MAIL CORPORATIVO</label>
                                <input type="email" className="formInput" placeholder="nome@empresa.com.br" />
                            </div>
                            <div className="formGroup">
                                <label className="formLabel">TELEFONE</label>
                                <input type="tel" className="formInput" placeholder="+55 (11) 99999-9999" />
                            </div>
                        </div>

                        <div className="formGroup">
                            <label className="formLabel">DETALHES DO PROJETO</label>
                            <textarea className="formTextarea" placeholder="Descreva brevemente sua necessidade..." rows={5}></textarea>
                        </div>

                        <div className="formFooter">
                            <div className="recaptchaNote">
                                <div 
                                    className={`recaptchaIcon ${isRecaptchaChecked ? 'checked' : ''}`} 
                                    onClick={() => setIsRecaptchaChecked(!isRecaptchaChecked)}
                                >
                                    {isRecaptchaChecked && (
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    )}
                                </div>
                                <p>Este site é protegido pelo reCAPTCHA e as <a href="#">Políticas de Privacidade</a> do Google se aplicam.</p>
                            </div>
                            <button type="submit" className="submitButton">
                                Enviar Mensagem
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </button>
                        </div>
                        </form>
                    )}
                </div>
            </div>
            <div className='sd-methodology'>
                <div className="sd-decorative-squares">
                    <span className="sd-square2"></span>
                    <span className="sd-square1"></span>
                    <span className="sd-square2"></span>
                    <span className="sd-square1"></span>
                </div>
                <h2>Metodologia de Alta Performance</h2>
                <p>Nossa fundação ágil com a sua entrega final na ponta.</p>
                <MethodologyCarousel />
            </div>
        </section>
    );
};

export default ContactUs;