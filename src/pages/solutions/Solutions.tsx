import './solutions.css';
import Button from '../../components/button/Button';

const Solutions = () => {
    return (
        <section className='solutions-page'>
            <div className='hero-solutions'>
                <div className='hero-content'>
                    <h1 className='hero-title'>
                        Engenharia Full Service para<br/>
                        <span>Soluções Digitais Estratégicas.</span>
                    </h1>
                    <p className='hero-text'>
                        Viabilizamos todo o ciclo de arquitetura e desenvolvimento de softwares
                        sob medida. Integramos tecnologia de ponta para potencializar a
                        operação e escalar os resultados de grandes empresas.
                    </p>
                </div>
                <div className='hero-image-container'>
                    <img src="/images/solutions/solution0.png" alt="Engenharia Full Service" className='hero-image' />
                </div>
            </div>

            <div className='solutions-list'>
                
                <div className='solution-row'>
                    <div className='solution-text'>
                        <h2>Sites Institucionais</h2>
                        <h3>Sites Institucionais de alto impacto.</h3>
                        <p>
                            Desenvolvemos a presença digital da sua empresa com portais robustos, corporativos, em layout exclusivo e performance de ponta para atrair, reter e engajar a sua audiência. Integração com as diretrizes da LGPD.
                        </p>
                        <Button view="primario" width={'fit-content'} onClick={() => {}}>Saiba mais &gt;</Button>
                    </div>
                    <div className='solution-img'>
                        <img src="/images/solutions/solution1.jpg" alt="Sites Institucionais" />
                    </div>
                </div>

                <div className='solution-row'>
                    <div className='solution-text'>
                        <h2>Sistemas & Plataformas</h2>
                        <h3>Sistemas Web e Plataformas de alta performance.</h3>
                        <p>
                            Engenharia de arquiteturas web escaláveis (ERPs, CRMs, Intranets e Portais B2B/B2C) com foco em segurança, integração de serviços e performance de alto tráfego.
                        </p>
                        <Button view="primario" width={'fit-content'} onClick={() => {}}>Saiba mais &gt;</Button>
                    </div>
                    <div className='solution-img'>
                        <img src="/images/solutions/solution2.jpg" alt="Sistemas & Plataformas" />
                    </div>
                </div>

                <div className='solution-row'>
                    <div className='solution-text'>
                        <h2>Aplicativos Mobile</h2>
                        <h3>Aplicativos Mobile de Elite iOS & Android.</h3>
                        <p>
                            Projetamos e desenvolvemos aplicativos nativos e híbridos com design centrado no usuário, performance otimizada e integração perfeita para as plataformas iOS e Android.
                        </p>
                        <Button view="primario" width={'fit-content'} onClick={() => {}}>Saiba mais &gt;</Button>
                    </div>
                    <div className='solution-img'>
                        <img src="/images/solutions/solution3.jpg" alt="Aplicativos Mobile" />
                    </div>
                </div>

                <div className='solution-row'>
                    <div className='solution-text'>
                        <h2>Automação Inteligente</h2>
                        <h3>Automação Inteligente e IA para Otimização.</h3>
                        <p>
                            Implementamos soluções com agentes de IA para otimização de fluxos de decisão e redução de custos operacionais com alto impacto e velocidade nos resultados da sua operação.
                        </p>
                        <Button view="primario" width={'fit-content'} onClick={() => {}}>Saiba mais &gt;</Button>
                    </div>
                    <div className='solution-img'>
                        <img src="/images/solutions/solution4.jpg" alt="Automação Inteligente" />
                    </div>
                </div>

                <div className='solution-row'>
                    <div className='solution-text'>
                        <h2>Discovery & Assessment</h2>
                        <h3>Discovery & Assessment Estratégico.</h3>
                        <p>
                            Mapeamos as necessidades e viabilidades antes da execução do projeto digital reduzindo riscos, maximizando o ROI e validando a viabilidade técnica e arquitetural do produto final.
                        </p>
                        <Button view="primario" width={'fit-content'} onClick={() => {}}>Saiba mais &gt;</Button>
                    </div>
                    <div className='solution-img'>
                        <img src="/images/solutions/solution5.jpg" alt="Discovery & Assessment" />
                    </div>
                </div>

                <div className='solution-row'>
                    <div className='solution-text'>
                        <h2>Digital Performance & SEO Técnico</h2>
                        <h3>Digital Performance e SEO Técnico.</h3>
                        <p>
                            Estruturamos a performance de busca da sua empresa, garantindo visibilidade na internet para atrair os usuários de pesquisa, e acelerar os resultados de conversão orgânica da sua empresa.
                        </p>
                        <Button view="primario" width={'fit-content'} onClick={() => {}}>Saiba mais &gt;</Button>
                    </div>
                    <div className='solution-img'>
                        <img src="/images/solutions/solution6.jpg" alt="Digital Performance & SEO Técnico" />
                    </div>
                </div>

                <div className='solution-row'>
                    <div className='solution-text'>
                        <h2>Modernização de Legado</h2>
                        <h3>Modernização de Legado e Cloud Native.</h3>
                        <p>
                            Atualizamos os seus softwares defasados em infraestruturas modernas, reescrevendo o produto para tecnologias recentes e integrando ambientes de forma segura e escalável para garantir maior eficiência perene.
                        </p>
                        <Button view="primario" width={'fit-content'} onClick={() => {}}>Saiba mais &gt;</Button>
                    </div>
                    <div className='solution-img'>
                        <img src="/images/solutions/solution7.jpg" alt="Modernização de Legado" />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Solutions;
