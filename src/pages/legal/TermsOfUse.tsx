import { Link } from 'react-router-dom';
import './legalPages.css';

const TermsOfUse = () => {
    return (
        <section className="legal-page">
            <div className="legal-header">
                <h1>Termos de Uso</h1>
                <p className="legal-updated">Última atualização: 28 de maio de 2026</p>
            </div>

            <div className="legal-content">
                <h2>1. Aceitação dos Termos</h2>
                <p>
                    Ao acessar e utilizar o website <strong>softwarehouse.dev.br</strong> ("Site"), operado
                    pela <strong>Sigma Software House</strong> ("nós", "nosso" ou "empresa"), você declara que leu,
                    compreendeu e concorda com estes Termos de Uso em sua integralidade. Se você não concordar
                    com qualquer parte destes termos, solicitamos que não utilize o Site.
                </p>

                <h2>2. Descrição do Serviço</h2>
                <p>
                    O Site tem caráter <strong>institucional e informativo</strong>, servindo como vitrine
                    digital dos serviços de engenharia de software oferecidos pela Sigma Software House.
                    Através do Site, você pode:
                </p>
                <ul>
                    <li>Conhecer nossas soluções tecnológicas (Sistemas, Sites, Apps, IA, SEO, etc.);</li>
                    <li>Visualizar nossos setores de atuação e cases de sucesso (Showcases);</li>
                    <li>Conhecer nossa metodologia de trabalho e equipe;</li>
                    <li>Entrar em contato conosco através do formulário para solicitar orçamentos ou informações.</li>
                </ul>
                <div className="legal-highlight">
                    <p>
                        <strong>Nota:</strong> O Site não oferece funcionalidades de e-commerce, cadastro de
                        usuário, área logada, assinatura de planos ou qualquer tipo de transação financeira
                        direta. Toda contratação de serviços é formalizada por meio de contratos específicos
                        negociados diretamente entre as partes.
                    </p>
                </div>

                <h2>3. Propriedade Intelectual</h2>
                <p>
                    Todo o conteúdo presente no Site, incluindo, mas não se limitando a:
                </p>
                <ul>
                    <li>Textos, descrições de serviços e conteúdo editorial;</li>
                    <li>Layout, design visual, identidade gráfica e elementos de interface;</li>
                    <li>Logotipos, marcas e nomes comerciais;</li>
                    <li>Imagens, ilustrações e fotografias;</li>
                    <li>Código-fonte do frontend e backend (quando aplicável).</li>
                </ul>
                <p>
                    São de propriedade exclusiva da <strong>Sigma Software House</strong> ou licenciados para
                    seu uso, protegidos pela legislação brasileira de direitos autorais (Lei nº 9.610/1998)
                    e propriedade industrial (Lei nº 9.279/1996).
                </p>
                <p>
                    <strong>É expressamente proibido:</strong> reproduzir, distribuir, modificar, copiar,
                    publicar, transmitir ou utilizar comercialmente qualquer conteúdo do Site sem autorização
                    prévia e escrita da empresa.
                </p>

                <h2>4. Uso Permitido</h2>
                <p>Ao utilizar o Site, você se compromete a:</p>
                <ul>
                    <li>Utilizar o Site apenas para fins lícitos e de acordo com estes Termos;</li>
                    <li>Não utilizar o formulário de contato para envio de spam, conteúdo ilícito, ofensivo ou
                        fraudulento;</li>
                    <li>Não tentar acessar áreas restritas do servidor, banco de dados ou infraestrutura;</li>
                    <li>Não utilizar mecanismos automatizados (bots, scrapers, crawlers) para coletar dados
                        do Site sem autorização;</li>
                    <li>Não realizar ataques de negação de serviço (DDoS), injeção de código ou qualquer
                        tentativa de comprometimento da segurança;</li>
                    <li>Fornecer informações verídicas e precisas ao preencher o formulário de contato.</li>
                </ul>

                <h2>5. Formulário de Contato</h2>
                <p>
                    Ao submeter informações através do formulário de contato, você:
                </p>
                <ul>
                    <li>
                        <strong>Consente</strong> com a coleta e o tratamento dos dados informados (nome, e-mail,
                        telefone, detalhes do projeto e natureza da consulta) conforme nossa{' '}
                        <Link to="/politica-de-privacidade">Política de Privacidade</Link>;
                    </li>
                    <li>
                        <strong>Declara</strong> que as informações fornecidas são verdadeiras e de sua
                        responsabilidade;
                    </li>
                    <li>
                        <strong>Compreende</strong> que o envio do formulário constitui uma solicitação de
                        contato comercial e não configura, por si só, uma relação contratual ou compromisso
                        de contratação por nenhuma das partes;
                    </li>
                    <li>
                        <strong>Autoriza</strong> o recebimento de e-mail de confirmação automático e o
                        contato subsequente de nossa equipe comercial.
                    </li>
                </ul>

                <h2>6. Links Externos</h2>
                <p>
                    O Site pode conter links para websites de terceiros, como projetos showcases, redes sociais
                    (Instagram, WhatsApp) e sites de clientes. Esses links são fornecidos exclusivamente para
                    conveniência do usuário.
                </p>
                <p>
                    A Sigma Software House <strong>não se responsabiliza</strong> pelo conteúdo, políticas de
                    privacidade, práticas ou disponibilidade de sites de terceiros. O acesso a esses links é
                    feito por sua conta e risco.
                </p>

                <h2>7. Disponibilidade do Site</h2>
                <p>
                    Empenhamo-nos para manter o Site disponível e funcional de forma contínua, porém não
                    garantimos que o acesso será ininterrupto ou livre de erros. Podemos, a qualquer momento
                    e sem aviso prévio:
                </p>
                <ul>
                    <li>Realizar manutenções preventivas ou corretivas;</li>
                    <li>Atualizar o conteúdo, layout ou funcionalidades;</li>
                    <li>Suspender temporariamente o acesso por razões técnicas ou de segurança.</li>
                </ul>

                <h2>8. Limitação de Responsabilidade</h2>
                <p>
                    O Site e seu conteúdo são fornecidos "como estão" (<em>as is</em>). Na extensão máxima
                    permitida pela legislação aplicável, a Sigma Software House não será responsável por:
                </p>
                <ul>
                    <li>Danos diretos ou indiretos decorrentes do uso ou impossibilidade de uso do Site;</li>
                    <li>Decisões tomadas com base nas informações apresentadas no Site;</li>
                    <li>Eventuais indisponibilidades ou falhas técnicas;</li>
                    <li>Ações de terceiros que possam afetar a experiência do usuário.</li>
                </ul>
                <p>
                    As informações sobre nossos serviços apresentadas no Site possuem caráter informativo e
                    ilustrativo. Condições específicas, prazos, valores e escopo são definidos exclusivamente
                    nos contratos formais celebrados entre as partes.
                </p>

                <h2>9. Legislação Aplicável e Foro</h2>
                <p>
                    Estes Termos de Uso são regidos pela legislação da República Federativa do Brasil. Qualquer
                    disputa ou controvérsia decorrente destes Termos será submetida ao foro da comarca de
                    São Paulo – SP, com renúncia expressa a qualquer outro, por mais privilegiado que seja.
                </p>

                <h2>10. Alterações nos Termos</h2>
                <p>
                    A Sigma Software House reserva-se o direito de modificar estes Termos de Uso a qualquer
                    momento. As alterações entram em vigor imediatamente após sua publicação no Site. O uso
                    continuado do Site após a publicação de alterações constitui aceitação dos novos termos.
                </p>
                <p>
                    Recomendamos que você revise estes Termos periodicamente para se manter informado sobre
                    eventuais atualizações.
                </p>

                <h2>11. Contato</h2>
                <p>
                    Em caso de dúvidas sobre estes Termos de Uso, entre em contato conosco:
                </p>
                <ul>
                    <li><strong>E-mail:</strong> <a href="mailto:softwarehouse.sigma@gmail.com">softwarehouse.sigma@gmail.com</a></li>
                    <li><strong>WhatsApp:</strong> <a href="https://wa.me/5511943131835" target="_blank" rel="noopener noreferrer">+55 (11) 94313-1835</a></li>
                </ul>

                <div className="legal-nav">
                    <Link to="/politica-de-privacidade">← Política de Privacidade</Link>
                    <Link to="/politica-de-cookies">Política de Cookies →</Link>
                </div>
            </div>
        </section>
    );
};

export default TermsOfUse;
