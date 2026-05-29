import './showcases.css';
import Button from '../../components/button/Button';
import { useNavigate } from 'react-router-dom';
import { Store, PawPrint, Dumbbell } from 'lucide-react';

const Showcases = () => {
    const navigate = useNavigate();

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

                {/* Rodrigo Soares Advogado Project */}
                <div className='featuredProject'>
                    <div className='fp-images'>
                        {/* <img src="/images/showcases/rodrigo-home.png" alt="Rodrigo Soares Advogado Home" className="fp-main-img" loading="lazy" decoding="async" /> */}
                        <div className="fp-thumbnails">
                            <img src="/images/showcases/rodrigo-full.png" alt="Rodrigo Soares Advogado Preview" loading="lazy" decoding="async" />
                        </div>
                    </div>
                    <div className='fp-info'>
                        <span className='fp-kicker'>Novo Projeto</span>
                        <h2 className='fp-title'>Rodrigo Soares Advogado</h2>
                        <div className='fp-tags'>
                            <span className="fp-tag">React + Vite</span>
                            <span className="fp-tag">Web Design</span>
                            <span className="fp-tag">Institucional</span>
                            <span className="fp-tag">Performance</span>
                        </div>
                        <p className='fp-desc'>
                            Desenvolvimento completo da presença digital do conceituado escritório de advocacia Rodrigo Soares.
                            Este projeto foi desenhado estrategicamente para transmitir excelência, credibilidade e modernidade,
                            facilitando a prospecção e o contato direto com clientes de alto nível.
                            Desenvolvido com <strong>React + Vite</strong>, garantimos uma interface ultrarrápida, fluida e totalmente responsiva. 
                            O foco em otimização de performance, aliado a um design premium, proporciona uma experiência de usuário (UX) 
                            impecável e aumenta significativamente a conversão em todas as plataformas e dispositivos.
                        </p>
                        
                        <Button view="primario" onClick={() => window.open('https://rodrigosoaresadvogado.com.br', '_blank')}>
                            Acessar o Site
                        </Button>
                    </div>
                </div>

                {/* Catalog Section Divider */}
                <div className='catalog-section'>
                    <div className='catalog-header'>
                        <span className='catalog-kicker'>Catálogo de Produtos</span>
                        <h2 className='catalog-title'>
                            Soluções Prontas para Escalar seu Negócio.
                        </h2>
                        <p className='catalog-subtitle'>
                            Além dos projetos sob medida, oferecemos produtos digitais próprios — sistemas completos
                            e prontos para implantação, desenvolvidos com a mesma excelência técnica que aplicamos em
                            nossos projetos personalizados.
                        </p>
                    </div>

                    <div className='catalog-grid'>
                        {/* Market Management System */}
                        <div className='catalog-card'>
                            <div className='catalog-card-image'>
                                <img src="/images/showcases/market-system.png" alt="Sistema de Gerenciamento de Mercados" loading="lazy" decoding="async" />
                                <div className='catalog-card-badge available'>Disponível</div>
                            </div>
                            <div className='catalog-card-content'>
                                <div className='catalog-card-icon'>
                                    <Store size={24} />
                                </div>
                                <h3 className='catalog-card-title'>Sistema de Gerenciamento de Mercados - MarketSync</h3>
                                <p className='catalog-card-desc'>
                                    Plataforma robusta desenvolvida em <strong>Java</strong> para gestão completa de 
                                    mercados e supermercados. Controle de estoque em tempo real, gestão de fornecedores, 
                                    frente de caixa (PDV), relatórios financeiros detalhados e integração fiscal. 
                                    Arquitetura escalável preparada para operações de pequeno a grande porte.
                                </p>
                                <div className='catalog-card-tags'>
                                    <span className='fp-tag'>Java</span>
                                    <span className='fp-tag'>Desktop</span>
                                    <span className='fp-tag'>PDV</span>
                                    <span className='fp-tag'>Estoque</span>
                                </div>
                                <Button view="primario" onClick={() => navigate('/contato')}>
                                    Solicitar Demonstração
                                </Button>
                            </div>
                        </div>

                        {/* Pet Shop SaaS */}
                        <div className='catalog-card'>
                            <div className='catalog-card-image'>
                                <img src="/images/showcases/petshop-saas.png" alt="Sistema de Gerenciamento de Pet Shops" loading="lazy" decoding="async" />
                                <div className='catalog-card-badge available'>Disponível</div>
                            </div>
                            <div className='catalog-card-content'>
                                <div className='catalog-card-icon'>
                                    <PawPrint size={24} />
                                </div>
                                <h3 className='catalog-card-title'>Sistema de Gerenciamento de Pet Shops</h3>
                                <p className='catalog-card-desc'>
                                    Plataforma <strong>SaaS</strong> completa para gestão de pet shops, clínicas 
                                    veterinárias e serviços de banho & tosa. Agendamento inteligente, cadastro de 
                                    pets e tutores, controle financeiro, prontuário veterinário e notificações 
                                    automáticas. Acesse de qualquer lugar via navegador com dados seguros na nuvem.
                                </p>
                                <div className='catalog-card-tags'>
                                    <span className='fp-tag'>SaaS</span>
                                    <span className='fp-tag'>Cloud</span>
                                    <span className='fp-tag'>Agendamento</span>
                                    <span className='fp-tag'>Gestão</span>
                                </div>
                                <Button view="primario" onClick={() => navigate('/contato')}>
                                    Solicitar Demonstração
                                </Button>
                            </div>
                        </div>

                        {/* Gym App */}
                        <div className='catalog-card'>
                            <div className='catalog-card-image'>
                                <img src="/images/showcases/gym-app.png" alt="App de Academia" loading="lazy" decoding="async" />
                                <div className='catalog-card-badge development'>Em Desenvolvimento</div>
                            </div>
                            <div className='catalog-card-content'>
                                <div className='catalog-card-icon'>
                                    <Dumbbell size={24} />
                                </div>
                                <h3 className='catalog-card-title'>App de Academia - Gym Flow</h3>
                                <p className='catalog-card-desc'>
                                    Aplicativo mobile completo para academias e centros fitness. Gestão de treinos 
                                    personalizados, acompanhamento de evolução do aluno, pagamento de mensalidade pelo app, 
                                    sistema de notificações e painel administrativo para gestores. Tecnologia de ponta para o mercado fitness.
                                </p>
                                <div className='catalog-card-tags'>
                                    <span className='fp-tag'>Mobile App</span>
                                    <span className='fp-tag'>iOS & Android</span>
                                    <span className='fp-tag'>Fitness</span>
                                    <span className='fp-tag'>Wearables</span>
                                </div>
                                <Button view="primario" onClick={() => navigate('/contato')}>
                                    Registrar Interesse
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default Showcases;
