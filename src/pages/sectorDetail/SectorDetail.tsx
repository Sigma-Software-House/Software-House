import './sectorDetail.css'
import { useEffect } from 'react';
import { sectorsData } from '../../data/sectorsData';
import { useParams, Navigate, Link } from 'react-router-dom';
import MethodologyCarousel from '../../components/methodologyCarousel/MethodologyCarousel';

const SectorDetail = () => {
    const { slug } = useParams<{ slug: string }>();
        const sector = slug ? sectorsData[slug] : null;
    
        useEffect(() => {
            window.scrollTo(0, 0);
        }, [slug]);
    
        if (!sector) {
            return <Navigate to="/setores" replace />;
        };
    return (
        <section className='sectorDetail'>
            <div className='sd-hero' style={{ backgroundImage: `url(${sector.heroImage})` }}>
                <div className='sd-hero-overlay'></div>
                <div className='sd-breadcrumb'>
                    <Link to="/">Home</Link> &gt; <Link to="/setores">Soluções</Link> &gt; <span>{sector.title}</span>
                </div>
                <div className='sd-hero-content'>
                    <h1 className='sd-title'>{sector.title}</h1>
                    <p className='sd-subtitle'>{sector.heroSubtitle}</p>
                </div>
                <div className='sd-hero-down-arrow'>
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </div>
            </div>
            <div className='sd-section-intro'>
                <div className='sd-intro-text'>
                    <div className="sd-decorative-squares">
                        <span className="sd-square1"></span>
                        <span className="sd-square2"></span>
                        <span className="sd-square1"></span>
                        <span className="sd-square2"></span>
                    </div>
                    <h2>{sector.section1Title}</h2>
                    <p>{sector.section1Text}</p>
                </div>
                <div className='sd-intro-features'>
                    {sector.section1Features.map((feat, index) => {
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

export default SectorDetail;