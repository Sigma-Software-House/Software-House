import './showcases.css';
import Button from '../../components/button/Button';

const showcasesList = [
    {
        kicker: "Saúde & Bem-estar",
        title: "Portal Telemedicina",
        description: "Plataforma de consultas online integrando vídeo e prontuário eletrônico seguro.",
    },
    {
        kicker: "Finanças",
        title: "BankPay App",
        description: "Aplicativo financeiro com dashboard interativo e transações em tempo real.",
    },
    {
        kicker: "Logística",
        title: "Track & Trace System",
        description: "Sistema interno para monitoramento global de frotas e controle de estoque.",
    },
    {
        kicker: "E-commerce",
        title: "StoreFront B2B",
        description: "Plataforma de vendas robusta projetada para suportar alto volume de tráfego.",
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
                </div>

                {/* Featured Project */}
                <div className='featuredProject'>
                    <div className='fp-images'>
                        <img src="/images/showcases/danger-home.png" alt="Danger Kiss Cover Home" className="fp-main-img" loading="lazy" decoding="async" />
                        <div className="fp-thumbnails">
                            <img src="/images/showcases/danger-full.png" alt="Danger Kiss Cover Preview" loading="lazy" decoding="async" />
                        </div>
                    </div>
                    <div className='fp-info'>
                        <span className='fp-kicker'>Case de Sucesso</span>
                        <h2 className='fp-title'>Danger Kiss Cover</h2>
                        <div className='fp-tags'>
                            <span className="fp-tag">React + Vite</span>
                            <span className="fp-tag">Firebase</span>
                            <span className="fp-tag">Prototipação</span>
                        </div>
                        <p className='fp-desc'>
                            Desenvolvimento completo da presença digital oficial da banda Danger Kiss Cover.
                            O projeto abrangeu desde a prototipação inicial e validação de usabilidade até o
                            desenvolvimento em <strong>React + Vite</strong> com hospedagem ágil via <strong>Firebase</strong>. 
                            Provemos suporte integral durante todo o ciclo de desenvolvimento e mantemos suporte constante pós-publicação, garantindo estabilidade, segurança e uma navegação imersiva para o público.
                        </p>
                        
                        <div className='fp-testimonial'>
                            <p className='fp-quote'>"A equipe captou exatamente a essência da banda! Desde a prototipação até o lançamento, o atendimento foi impecável. Ter esse suporte constante pós-lançamento nos dá muita segurança de que o site sempre funcionará perfeitamente para nossos fãs."</p>
                            <span className='fp-author'> Rodrigo José Soares - Fundador da Banda, Danger Kiss Cover</span>
                        </div>

                        <Button view="primario" onClick={() => window.open('https://danger-kiss-cover.web.app/', '_blank')}>
                            Acessar o Projeto Completo
                        </Button>
                    </div>
                </div>

                {/* Grid of Showcases */}
                {/* <div className='showcasesGridTitle'>
                    <h2>Outros Projetos</h2>
                </div> */}
                {/* <div className='showcasesGrid'>
                    {showcasesList.map((item, index) => (
                        <div className='showcaseCard' key={index}>
                            <div className='showcaseImagePlaceholder'> */}
                                {/* Image will go here */}
                            {/* </div>
                            <div className='showcaseInfo'>
                                <span className='showcaseKicker'>{item.kicker}</span>
                                <h3 className='showcaseItemTitle'>{item.title}</h3>
                                <p className='showcaseItemDesc'>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div> */}

                {/* CTA Banner Section */}
                {/* <div className='ctaBanner'>
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
                            onClick={() => window.location.href = '/#contato'}
                        >
                            Fale conosco
                        </Button>
                    </div>
                </div> */}

            </section>
        </div>
    );
};

export default Showcases;
