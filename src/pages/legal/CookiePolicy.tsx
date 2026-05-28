import { Link } from 'react-router-dom';
import './legalPages.css';

const CookiePolicy = () => {
    return (
        <section className="legal-page">
            <div className="legal-header">
                <h1>Política de Cookies</h1>
                <p className="legal-updated">Última atualização: 28 de maio de 2026</p>
            </div>

            <div className="legal-content">
                <h2>1. O que são Cookies?</h2>
                <p>
                    Cookies são pequenos arquivos de texto armazenados no seu dispositivo (computador, tablet
                    ou smartphone) quando você visita um website. Eles são amplamente utilizados para fazer
                    sites funcionarem de forma mais eficiente, bem como para fornecer informações aos
                    proprietários do site.
                </p>

                <h2>2. Uso de Cookies neste Site</h2>
                <div className="legal-highlight">
                    <p>
                        <strong>Transparência total:</strong> Atualmente, o site <strong>softwarehouse.dev.br</strong> opera
                        com uso <strong>mínimo de cookies</strong>. Não utilizamos cookies de rastreamento, analytics,
                        publicidade comportamental, pixels de conversão ou ferramentas de terceiros que monitorem
                        seu comportamento de navegação.
                    </p>
                </div>
                <p>
                    O único cookie que pode ser armazenado no seu navegador está relacionado à sua preferência
                    de consentimento sobre esta própria política:
                </p>

                <table className="legal-table">
                    <thead>
                        <tr>
                            <th>Cookie</th>
                            <th>Tipo</th>
                            <th>Finalidade</th>
                            <th>Duração</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><code>sh_cookie_consent</code></td>
                            <td>Estritamente Necessário</td>
                            <td>Registra sua decisão sobre o banner de cookies para não exibi-lo novamente</td>
                            <td>365 dias</td>
                        </tr>
                    </tbody>
                </table>

                <h2>3. Categorias de Cookies</h2>
                <p>
                    Para sua informação, detalhamos abaixo as categorias de cookies que existem e nosso
                    posicionamento sobre cada uma:
                </p>

                <h3>3.1. Cookies Estritamente Necessários</h3>
                <p>
                    São cookies essenciais para o funcionamento básico do site. No nosso caso, utilizamos
                    apenas o cookie de consentimento (<code>sh_cookie_consent</code>), que registra sua
                    escolha de aceitar ou recusar cookies para que o banner não seja exibido repetidamente.
                    Este cookie <strong>não coleta dados pessoais</strong>.
                </p>

                <h3>3.2. Cookies de Desempenho / Analytics</h3>
                <p>
                    <strong>Não utilizamos.</strong> Não temos Google Analytics, Hotjar, Microsoft Clarity ou
                    qualquer ferramenta de análise de tráfego instalada. Nenhum dado sobre suas páginas
                    visitadas, tempo de navegação ou comportamento é coletado.
                </p>

                <h3>3.3. Cookies de Funcionalidade</h3>
                <p>
                    <strong>Não utilizamos.</strong> O Site não possui funcionalidades que exijam cookies de
                    funcionalidade, como personalização de idioma, preferências de tema ou sessão de
                    usuário logado.
                </p>

                <h3>3.4. Cookies de Marketing / Publicidade</h3>
                <p>
                    <strong>Não utilizamos.</strong> Não executamos campanhas de remarketing, retargeting
                    ou publicidade comportamental. Não temos pixels do Facebook, Google Ads, LinkedIn
                    Insight Tag ou qualquer serviço similar.
                </p>

                <h2>4. Cookies de Terceiros</h2>
                <p>
                    Atualmente, nosso Site não carrega scripts ou recursos de terceiros que definam cookies
                    no seu navegador. O único recurso externo são fontes tipográficas do Google Fonts, que
                    são carregadas via CSS e <strong>não definem cookies</strong>.
                </p>
                <p>
                    Caso no futuro venhamos a integrar serviços como Google Analytics, reCAPTCHA, mapas
                    ou widgets de redes sociais, esta política será atualizada para refletir os novos
                    cookies de terceiros e suas respectivas finalidades.
                </p>

                <h2>5. Como Gerenciar Cookies</h2>
                <p>
                    Você pode gerenciar e controlar cookies através das configurações do seu navegador.
                    Cada navegador oferece opções para:
                </p>
                <ul>
                    <li>Visualizar os cookies armazenados;</li>
                    <li>Excluir cookies específicos ou todos de uma vez;</li>
                    <li>Bloquear cookies de terceiros;</li>
                    <li>Configurar alertas antes de um cookie ser armazenado.</li>
                </ul>
                <p>
                    Para instruções específicas, consulte a documentação do seu navegador:
                </p>
                <ul>
                    <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
                    <li><a href="https://support.mozilla.org/pt-BR/kb/cookies-informacoes-sites-armazenam-computador" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
                    <li><a href="https://support.microsoft.com/pt-br/microsoft-edge/excluir-cookies-no-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
                    <li><a href="https://support.apple.com/pt-br/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
                </ul>

                <div className="legal-highlight">
                    <p>
                        <strong>Nota:</strong> Como nosso site utiliza apenas um cookie essencial (de consentimento),
                        a desativação de cookies não afetará sua experiência de navegação, exceto pelo fato de
                        que o banner de cookies poderá ser exibido novamente em cada visita.
                    </p>
                </div>

                <h2>6. Recomendação sobre Cookies neste Sistema</h2>
                <p>
                    Após análise técnica detalhada do sistema, concluímos que a implementação de cookies
                    adicionais <strong>não é necessária nem recomendada</strong> no estágio atual, pelas
                    seguintes razões:
                </p>
                <ul>
                    <li>
                        <strong>Sem área logada:</strong> O site não possui autenticação de usuários, portanto
                        não há necessidade de cookies de sessão;
                    </li>
                    <li>
                        <strong>Sem e-commerce:</strong> Não há carrinho de compras, checkout ou transações
                        que demandem persistência de estado via cookies;
                    </li>
                    <li>
                        <strong>Sem personalização:</strong> O conteúdo é igual para todos os visitantes,
                        não há personalização que exija cookies de preferência;
                    </li>
                    <li>
                        <strong>Sem analytics instalado:</strong> Não há ferramentas de análise que
                        demandem cookies de rastreamento;
                    </li>
                    <li>
                        <strong>Minimização de dados (LGPD):</strong> O princípio da minimização determina
                        que se deve coletar apenas o necessário. Cookies adicionais sem uso justificado
                        violam esse princípio.
                    </li>
                </ul>
                <p>
                    Caso futuramente seja implementado Google Analytics ou ferramenta similar, recomendamos
                    atualizar esta política e implementar um sistema de consentimento granular, permitindo
                    ao usuário aceitar ou recusar cada categoria de cookie individualmente.
                </p>

                <h2>7. Alterações nesta Política</h2>
                <p>
                    Esta Política de Cookies poderá ser atualizada periodicamente para refletir mudanças
                    nas práticas do Site ou na legislação aplicável. A data da última atualização será sempre
                    indicada no topo desta página.
                </p>

                <h2>8. Contato</h2>
                <p>
                    Para dúvidas sobre o uso de cookies neste Site, entre em contato:
                </p>
                <ul>
                    <li><strong>E-mail:</strong> <a href="mailto:softwarehouse.sigma@gmail.com">softwarehouse.sigma@gmail.com</a></li>
                    <li><strong>WhatsApp:</strong> <a href="https://wa.me/5511943131835" target="_blank" rel="noopener noreferrer">+55 (11) 94313-1835</a></li>
                </ul>

                <div className="legal-nav">
                    <Link to="/politica-de-privacidade">← Política de Privacidade</Link>
                    <Link to="/termos-de-uso">← Termos de Uso</Link>
                </div>
            </div>
        </section>
    );
};

export default CookiePolicy;
