import { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { solutionsData } from '../../data/solutionsData';
import Button from '../../components/button/Button';
import MethodologyCarousel from '../../components/methodologyCarousel/MethodologyCarousel';
import './solutionDetail.css';

const SolutionDetail = () => {
    const { slug } = useParams<{ slug: string }>();
    const solution = slug ? solutionsData[slug] : null;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!solution) {
        return <Navigate to="/solucoes" replace />;
    }

    return (
        <section className='sd-page'>
            {/* Hero Section */}
            <div className='sd-hero' style={{ backgroundImage: `url(${solution.heroImage})` }}>
                <div className='sd-hero-overlay'></div>
                <div className='sd-breadcrumb'>
                    <Link to="/">Home</Link> &gt; <Link to="/solucoes">Soluções</Link> &gt; <span>{solution.title}</span>
                </div>
                <div className='sd-hero-content'>
                    <h1 className='sd-title'>{solution.title}</h1>
                    <p className='sd-subtitle'>{solution.heroSubtitle}</p>
                </div>
                <div className='sd-hero-down-arrow'>
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </div>
            </div>

            {/* Section 1: Intro & Features */}
            <div className='sd-section-intro'>
                <div className='sd-intro-text'>
                    <div className="sd-decorative-squares">
                        <span className="sd-square"></span>
                        <span className="sd-square"></span>
                        <span className="sd-square"></span>
                        <span className="sd-square"></span>
                    </div>
                    <h2>{solution.section1Title}</h2>
                    <p>{solution.section1Text}</p>
                    {solution.section1Text2 && <p>{solution.section1Text2}</p>}
                </div>
                <div className='sd-intro-features'>
                    {solution.section1Features.map((feat, index) => {
                        const Icon = feat.icon;
                        return (
                            <div key={index} className='sd-feature-item'>
                                <Icon size={40} strokeWidth={1.5} className='sd-feature-icon' />
                                <div className='sd-feature-content'>
                                    <h4>{feat.title}</h4>
                                    <p>{feat.text}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Section 2: Banner Line */}
            <div className='sd-banner'>
                <h2>{solution.section2Title}</h2>
                {solution.section2Subtitle && <p className='sd-banner-subtitle'>{solution.section2Subtitle}</p>}
            </div>

            {/* Section 3: Cards Grid */}
            <div className='sd-cards-grid'>
                {solution.section3Cards.map((card, index) => {
                    const Icon = card.icon;

                    if (card.isActionCard) {
                        return (
                            <div key={index} className='sd-card sd-card-action' onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}>
                                <img src="/icons/sigma.png" alt="Sigma Logo" className="sd-card-logo" />
                                <div className="sd-card-action-bottom">
                                    <h3>{card.title}</h3>
                                    <button className='sd-card-arrow-btn' aria-label="Fale conosco">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="9 18 15 12 9 6"></polyline>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        );
                    }

                    return (
                        <div key={index} className='sd-card'>
                            <Icon size={40} className='sd-card-icon' />
                            <h3>{card.title}</h3>
                            <p>{card.text}</p>
                        </div>
                    );
                })}
            </div>

            {/* Section 4: Metodologia */}
            <div className='sd-methodology'>
                <div className="sd-decorative-squares">
                    <span className="sd-square"></span>
                    <span className="sd-square"></span>
                    <span className="sd-square"></span>
                    <span className="sd-square"></span>
                </div>
                <h2>Metodologia de Alta Performance</h2>
                <p>Nossa fundação ágil com a sua entrega final na ponta.</p>
                <MethodologyCarousel />
            </div>

            {/* Optional Section 5: Contact Card Extra */}
            {solution.hasContactCard && (
                <div className='sd-extra-contact'>
                    <div className='sd-ec-content'>
                        <h3>{solution.contactCardTitle}</h3>
                        <p>Entre em contato com a equipe de engenharia para análise do seu projeto e elevação estratégica.</p>
                    </div>
                    <Button view="primario" width="250px" onClick={() => window.location.href = '/#contato'}>Fale com Especialista</Button>
                </div>
            )}
        </section>
    );
};

export default SolutionDetail;
