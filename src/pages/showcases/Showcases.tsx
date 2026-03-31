import './showcases.css';
import Button from '../../components/button/Button';

const showcasesList = [
    {
        kicker: "Unimais",
        title: "Portal+ - Unimais",
        description: "Aplicativo Educacional (iOS & Android)",
    },
    {
        kicker: "Nome da empresa",
        title: "Site Institucional",
        description: "Nova presença digital com foco em performance, UX e segmentação de públicos.",
    },
    {
        kicker: "Nome da empresa",
        title: "Modernização de Legado",
        description: "Migração estratégica e reengenharia de software para garantir inovação e segurança.",
    },
    {
        kicker: "Nome da empresa",
        title: "Discovery & Assessment",
        description: "Mapeamos e validamos a viabilidade técnica e de negócio de seu projeto digital",
    },
    {
        kicker: "Nome da empresa",
        title: "Site Institucional",
        description: "Nova presença digital com foco em performance, UX e segmentação de públicos.",
    },
    {
        kicker: "Nome da empresa",
        title: "Sistemas & Plataformas",
        description: "Nova presença digital com foco em performance, UX e segmentação de públicos.",
    },
    {
        kicker: "Nome da empresa",
        title: "Modernização de Legado",
        description: "Migração estratégica e reengenharia de software para garantir inovação e segurança.",
    },
    {
        kicker: "Nome da empresa",
        title: "Discovery & Assessment",
        description: "Mapeamos e validamos a viabilidade técnica e de negócio de seu projeto digital",
    }
];

const Showcases = () => {
    return (
        <div id="showcases" className='showcasesWrapper'>
            <section className='showcasesContainer'>

                {/* Header Hero */}
                <div className='showcasesHero'>
                    <div className='showcasesHeroContent'>
                        <h1 className='showcasesTitle'>
                            A Excelência em Soluções Digitais de Alto Padrão.
                        </h1>
                        <p className='showcasesSubtitle'>
                            Explore nossa seleção de projetos que unem visão estratégica e
                            execução técnica rigorosa. De plataformas críticas e ecossistemas
                            mobile a automações inteligentes e modernização de infraestruturas,
                            viabilizamos o ciclo completo da transformação tecnológica. Cada
                            showcase é o resultado de uma parceria dedicada a entregar
                            performance, escalabilidade e valor real à sua operação.
                        </p>
                    </div>
                    <div className='showcasesHeroImage'>
                        {/* Placeholder for Graphic/Illustration */}
                        <div className='placeholderIllustration'></div>
                    </div>
                </div>

                {/* Grid of Showcases */}
                <div className='showcasesGrid'>
                    {showcasesList.map((item, index) => (
                        <div className='showcaseCard' key={index}>
                            <div className='showcaseImagePlaceholder'>
                                {/* Image will go here */}
                            </div>
                            <div className='showcaseInfo'>
                                <span className='showcaseKicker'>{item.kicker}</span>
                                <h3 className='showcaseItemTitle'>{item.title}</h3>
                                <p className='showcaseItemDesc'>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Action Button (e.g. See all or Pagination) */}
                <div className='showcasesActions'>
                    <div className='paginationPlaceholder'>
                        <span className='paginationDot active'></span>
                        <span className='paginationDot'></span>
                    </div>
                </div>

                {/* CTA Banner Section */}
                <div className='ctaBanner'>
                    <div className='ctaContent'>
                        <h2 className='ctaTitle'>
                            Viabilizando a próxima<br /> era digital da sua operação.
                        </h2>
                        <p className='ctaDesc'>
                            Integramos engenharia de alta performance aos seus objetivos
                            de negócio. Somos o suporte técnico especializado para viabilizar e
                            escalar plataformas de missão crítica.
                        </p>
                        <Button
                            view="secundario"
                            width={'auto'}
                            onClick={() => console.log("Fale conosco")}
                        >
                            Fale conosco
                        </Button>
                    </div>
                </div>

                {/* Footer Section (If not globally provided) */}
                <footer className='footerShowcases'>
                    <div className='footerTop'>
                        <div className='footerBrand'>
                            <h2 className='footerLogoText'>Software House</h2>
                        </div>
                        <div className='footerContact'>
                            <p>📞 +55 (11) 4002-8922</p>
                            <p>✉️ fale@software.house</p>
                            <div className='socialIcons'>
                                <span className='socialPlaceholder'>in</span>
                                <span className='socialPlaceholder'>ig</span>
                                <span className='socialPlaceholder'>fb</span>
                                <span className='socialPlaceholder'>yt</span>
                            </div>
                        </div>
                        <div className='footerNav'>
                            <ul>
                                <li>Soluções</li>
                                <li>Showcases</li>
                                <li>Setores</li>
                                <li>Sobre</li>
                                <li>Contato</li>
                            </ul>
                        </div>
                    </div>

                    <div className='footerBottom'>
                        <div className='copy'>
                            <span>2026</span>
                            <span>SOFTWARE HOUSES ENGENHARIA DE SOFTWARES LTDA. Todos os direitos reservados.</span>
                        </div>
                        <div className='legalLinks'>
                            <span>Política de Cookies</span>
                            <span>Política de Privacidade</span>
                            <span>Manual do Site</span>
                        </div>
                    </div>
                </footer>

            </section>
        </div>
    );
};

export default Showcases;
