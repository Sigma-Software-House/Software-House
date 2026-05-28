import { Link } from 'react-router-dom';
import './legalPages.css';

const PrivacyPolicy = () => {
    return (
        <section className="legal-page">
            <div className="legal-header">
                <h1>Política de Privacidade</h1>
                <p className="legal-updated">Última atualização: 28 de maio de 2026</p>
            </div>

            <div className="legal-content">
                <h2>1. Introdução</h2>
                <p>
                    A <strong>Sigma Software House</strong> ("nós", "nosso" ou "empresa"), inscrita sob a razão social
                    de seus sócios fundadores, com sede no Brasil, está comprometida com a proteção dos dados
                    pessoais de seus usuários e clientes potenciais.
                </p>
                <p>
                    Esta Política de Privacidade descreve como coletamos, utilizamos, armazenamos e protegemos
                    as informações pessoais fornecidas por você ao utilizar nosso website{' '}
                    <strong>softwarehouse.dev.br</strong> ("Site"), em conformidade com a{' '}
                    <strong>Lei Geral de Proteção de Dados Pessoais (LGPD – Lei nº 13.709/2018)</strong> e demais
                    legislações aplicáveis.
                </p>

                <h2>2. Dados que Coletamos</h2>
                <p>
                    Coletamos exclusivamente os dados pessoais fornecidos <strong>voluntariamente</strong> por
                    você através do formulário de contato disponível em nosso Site. São eles:
                </p>
                <table className="legal-table">
                    <thead>
                        <tr>
                            <th>Dado Pessoal</th>
                            <th>Finalidade</th>
                            <th>Base Legal (LGPD)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Nome completo</td>
                            <td>Identificação do interessado para contato comercial</td>
                            <td>Consentimento (Art. 7º, I)</td>
                        </tr>
                        <tr>
                            <td>E-mail corporativo</td>
                            <td>Envio de resposta e e-mail de confirmação de recebimento</td>
                            <td>Consentimento (Art. 7º, I)</td>
                        </tr>
                        <tr>
                            <td>Telefone</td>
                            <td>Contato direto para tratativa comercial do projeto</td>
                            <td>Consentimento (Art. 7º, I)</td>
                        </tr>
                        <tr>
                            <td>Detalhes do projeto</td>
                            <td>Análise técnica e elaboração de proposta comercial</td>
                            <td>Consentimento (Art. 7º, I)</td>
                        </tr>
                        <tr>
                            <td>Natureza da consulta</td>
                            <td>Direcionamento interno da demanda ao time correto</td>
                            <td>Consentimento (Art. 7º, I)</td>
                        </tr>
                    </tbody>
                </table>

                <div className="legal-highlight">
                    <p>
                        <strong>Importante:</strong> Nosso site não utiliza cookies de rastreamento, ferramentas de
                        analytics, pixels de conversão ou qualquer mecanismo automatizado de coleta de dados
                        comportamentais. A única coleta de dados ocorre mediante o envio explícito e voluntário
                        do formulário de contato.
                    </p>
                </div>

                <h2>3. Como Utilizamos seus Dados</h2>
                <p>Os dados pessoais coletados são utilizados exclusivamente para:</p>
                <ul>
                    <li>
                        <strong>Responder à sua solicitação:</strong> Entrar em contato para entender suas
                        necessidades e discutir o projeto informado;
                    </li>
                    <li>
                        <strong>Enviar e-mail de confirmação:</strong> Confirmar o recebimento da sua mensagem
                        automaticamente via sistema;
                    </li>
                    <li>
                        <strong>Enviar notificação interna:</strong> Alertar nosso time comercial sobre o novo
                        contato recebido para priorização do atendimento;
                    </li>
                    <li>
                        <strong>Elaborar propostas comerciais:</strong> Utilizar as informações técnicas
                        fornecidas para preparar uma proposta adequada ao seu projeto.
                    </li>
                </ul>
                <p>
                    <strong>Não utilizamos seus dados para:</strong> envio de newsletter, marketing automatizado,
                    criação de perfis comportamentais, compartilhamento com terceiros para fins publicitários
                    ou qualquer finalidade que não esteja diretamente relacionada ao atendimento da sua solicitação.
                </p>

                <h2>4. Armazenamento e Segurança</h2>
                <p>
                    Seus dados são armazenados em banco de dados gerenciado com acesso restrito, hospedado em
                    infraestrutura com certificado SSL/TLS para transmissão segura das informações. A API de
                    backend (<strong>api.softwarehouse.dev.br</strong>) utiliza conexão criptografada HTTPS.
                </p>
                <p>Adotamos as seguintes medidas de segurança:</p>
                <ul>
                    <li>Transmissão de dados via protocolo HTTPS com criptografia TLS;</li>
                    <li>Acesso ao banco de dados restrito apenas a administradores autorizados;</li>
                    <li>Política de senhas seguras para acesso aos sistemas internos;</li>
                    <li>Monitoramento contínuo da infraestrutura de hospedagem.</li>
                </ul>

                <h2>5. Compartilhamento de Dados</h2>
                <p>
                    <strong>Não vendemos, alugamos ou compartilhamos</strong> seus dados pessoais com terceiros
                    para fins comerciais ou publicitários.
                </p>
                <p>Seus dados poderão ser compartilhados apenas nas seguintes hipóteses:</p>
                <ul>
                    <li>
                        <strong>Provedores de serviço essenciais:</strong> Serviços de e-mail (para envio das
                        confirmações e notificações) e infraestrutura de hospedagem, que atuam como operadores
                        de dados sob nossas instruções;
                    </li>
                    <li>
                        <strong>Obrigação legal:</strong> Quando exigido por ordem judicial, decisão regulatória
                        ou legislação aplicável.
                    </li>
                </ul>

                <h2>6. Tempo de Retenção</h2>
                <p>
                    Os dados pessoais coletados são mantidos pelo período necessário para atendimento da
                    finalidade para a qual foram coletados, incluindo o cumprimento de obrigações legais,
                    contratuais e regulatórias. Em regra:
                </p>
                <ul>
                    <li>
                        <strong>Contatos que resultaram em contrato:</strong> Os dados são mantidos durante
                        a vigência do contrato e por até 5 (cinco) anos após seu encerramento, conforme
                        legislação civil e tributária brasileira;
                    </li>
                    <li>
                        <strong>Contatos sem conversão comercial:</strong> Os dados são mantidos por até
                        12 (doze) meses após o último contato, podendo ser eliminados após esse período.
                    </li>
                </ul>

                <h2>7. Seus Direitos (LGPD)</h2>
                <p>
                    Conforme a LGPD, você tem os seguintes direitos em relação aos seus dados pessoais, que
                    podem ser exercidos a qualquer momento:
                </p>
                <ul>
                    <li><strong>Confirmação</strong> da existência de tratamento de dados;</li>
                    <li><strong>Acesso</strong> aos dados pessoais que mantemos sobre você;</li>
                    <li><strong>Correção</strong> de dados incompletos, inexatos ou desatualizados;</li>
                    <li><strong>Anonimização, bloqueio ou eliminação</strong> de dados desnecessários ou excessivos;</li>
                    <li><strong>Portabilidade</strong> dos dados a outro fornecedor de serviço;</li>
                    <li><strong>Eliminação</strong> dos dados tratados com base no consentimento;</li>
                    <li><strong>Revogação</strong> do consentimento a qualquer momento;</li>
                    <li>
                        <strong>Informação</strong> sobre as entidades públicas e privadas com as quais seus dados
                        foram compartilhados.
                    </li>
                </ul>
                <p>
                    Para exercer qualquer um desses direitos, entre em contato conosco através do e-mail{' '}
                    <a href="mailto:softwarehouse.sigma@gmail.com">softwarehouse.sigma@gmail.com</a> ou
                    via WhatsApp{' '}
                    <a href="https://wa.me/5511943131835" target="_blank" rel="noopener noreferrer">
                        +55 (11) 94313-1835
                    </a>.
                </p>

                <h2>8. Menores de Idade</h2>
                <p>
                    Nosso Site e serviços são destinados exclusivamente a pessoas jurídicas e pessoas físicas
                    maiores de 18 (dezoito) anos. Não coletamos intencionalmente dados pessoais de menores de
                    idade. Caso identifiquemos que dados de um menor foram coletados inadvertidamente, os
                    eliminaremos imediatamente.
                </p>

                <h2>9. Alterações nesta Política</h2>
                <p>
                    Reservamo-nos o direito de atualizar esta Política de Privacidade a qualquer momento.
                    As alterações serão publicadas nesta página com a data de atualização revisada. Recomendamos
                    que você consulte esta página periodicamente para se manter informado.
                </p>

                <h2>10. Contato do Encarregado (DPO)</h2>
                <p>
                    Para questões relacionadas à privacidade e proteção de dados, entre em contato com nosso
                    Encarregado de Proteção de Dados:
                </p>
                <ul>
                    <li><strong>E-mail:</strong> <a href="mailto:softwarehouse.sigma@gmail.com">softwarehouse.sigma@gmail.com</a></li>
                    <li><strong>WhatsApp:</strong> <a href="https://wa.me/5511943131835" target="_blank" rel="noopener noreferrer">+55 (11) 94313-1835</a></li>
                </ul>
                <p>
                    Caso considere que o tratamento de seus dados pessoais viola a legislação vigente, você
                    também tem o direito de apresentar uma reclamação à{' '}
                    <strong>Autoridade Nacional de Proteção de Dados (ANPD)</strong>.
                </p>

                <div className="legal-nav">
                    <Link to="/termos-de-uso">Termos de Uso →</Link>
                    <Link to="/politica-de-cookies">Política de Cookies →</Link>
                </div>
            </div>
        </section>
    );
};

export default PrivacyPolicy;
