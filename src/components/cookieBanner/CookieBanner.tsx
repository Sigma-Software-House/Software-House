import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../pages/legal/legalPages.css';

const COOKIE_CONSENT_KEY = 'sh_cookie_consent';

const CookieBanner = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
        if (!consent) {
            const timer = setTimeout(() => setIsVisible(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted');
        setIsVisible(false);
    };

    const handleReject = () => {
        localStorage.setItem(COOKIE_CONSENT_KEY, 'rejected');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="cookie-banner" role="dialog" aria-label="Consentimento de cookies">
            <div className="cookie-banner-inner">
                <div className="cookie-banner-text">
                    <p>
                        Utilizamos apenas cookies essenciais para registrar sua preferência de consentimento.
                        Não usamos cookies de rastreamento ou publicidade. Saiba mais na nossa{' '}
                        <Link to="/politica-de-cookies">Política de Cookies</Link>.
                    </p>
                </div>
                <div className="cookie-banner-actions">
                    <button className="cookie-btn cookie-btn-accept" onClick={handleAccept}>
                        Aceitar
                    </button>
                    <button className="cookie-btn cookie-btn-reject" onClick={handleReject}>
                        Recusar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CookieBanner;
