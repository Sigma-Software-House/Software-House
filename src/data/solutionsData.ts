import type { ElementType } from 'react';
import { Globe, LayoutGrid, MonitorSmartphone, Cpu, Search, TrendingUp, Layers, CheckCircle2, ShieldCheck, Zap, Database, Server, Smartphone } from 'lucide-react';

export interface SolutionData {
  slug: string;
  title: string;
  heroImage: string;
  heroSubtitle: string;
  section1Title: string;
  section1Text: string;
  section1Text2?: string;
  section1Features: { icon: ElementType; title: string; text: string }[];
  section2Title: string;
  section2Subtitle?: string;
  section3Cards: { icon: ElementType; title: string; text: string; isActionCard?: boolean }[];
  hasContactCard: boolean;
  contactCardTitle?: string;
}

export const solutionsData: Record<string, SolutionData> = {
  "sites-institucionais": {
    slug: "sites-institucionais",
    title: "Sites Institucionais",
    heroImage: "/images/solutions/solution1.jpg",
    heroSubtitle: "Desenvolvemos a presença digital da sua empresa com portais robustos, seguros e otimizados para performance. Conteúdo 100% gerenciável, UX intuitiva e total conformidade com as diretrizes de LGPD.",
    section1Title: "O Site Institucional como ativo estratégico de negócio.",
    section1Text: "Na Softwere House, projetamos o ecossistema digital da sua empresa como uma plataforma central de autoridade, comunicação e conversão. Unimos design de alto padrão a uma arquitetura de software robusta para conectar sua marca aos públicos mais exigentes do mercado.",
    section1Text2: "Somos referência no desenvolvimento de portais para organizações que buscam solidez técnica. Através de nossa metodologia consultiva e execução rigorosa, entregamos soluções validadas por padrões internacionais de performance e segurança.",
    section1Features: [
      { icon: Smartphone, title: "Mobile First", text: "Com a predominância do acesso via dispositivos móveis, a Softwere House prioriza a fluidez e a velocidade de carregamento em smartphones. Desenvolvemos interfaces adaptativas que garantem uma experiência impecável em qualquer resolução." },
      { icon: TrendingUp, title: "Technical SEO", text: "A visibilidade nos motores de busca e modelos de IA é determinada pela qualidade do código. Estruturamos dados, otimizamos o Core Web Vitals e garantimos que sua plataforma seja tecnicamente superior para dominar os resultados de busca." },
      { icon: LayoutGrid, title: "UX Design", text: "Alinhamos o comportamento das personas aos objetivos comerciais da sua operação. Criamos jornadas de navegação intuitivas onde cada interação é planejada para reduzir a fricção e conduzir o usuário ao valor real." },
      { icon: Search, title: "Data Intelligence", text: "Implementamos camadas de monitoramento avançado para rastrear fluxos de navegação e conversão. Transformamos o comportamento do usuário em dados acionáveis, permitindo a evolução constante do seu ativo digital." }
    ],
    section2Title: "O melhor site Institucional para a sua empresa",
    section2Subtitle: "Conheça os diferenciais técnicos que tornam nossos portais referência em qualidade e performance.",
    section3Cards: [
      { icon: Globe, title: "Sitemap & UX", text: "Estruturação e hierarquização das funcionalidades. Organizamos a jornada do usuário e a orquestração de componentes para garantir uma navegação fluida e lógica." },
      { icon: LayoutGrid, title: "UI (Design)", text: "Aplicação de Key Visuals, tipografia e sistemas de design exclusivos. Transformamos o protótipo em uma interface sofisticada, alinhada à identidade e autoridade da marca." },
      { icon: Zap, title: "Código & QA", text: "Codificação de frontend e backend, incluindo CMS para gestão de conteúdos, acompanhado por um rigoroso processo de QA e ajustes detalhados pré-lançamento." },
      { icon: ShieldCheck, title: "Support", text: "Período de suporte prioritário pós-lançamento. Cobertura total para ajustes técnicos e estabilização de escopo, assegurando a integridade da plataforma." },
      { icon: Database, title: "Hosting", text: "Configuramos, otimizamos e cuidamos dos ambientes de homologação e produção do website, em ambiente cloud (nuvem) com garantia de disponibilidade e escala." },
      { icon: Globe, title: "Fale com nossos especialistas", text: "", isActionCard: true }
    ],
    hasContactCard: true,
    contactCardTitle: "Migração de sites sem dor de cabeça?"
  },
  "sistemas-plataformas": {
    slug: "sistemas-plataformas",
    title: "Sistemas & Plataformas",
    heroImage: "/images/solutions/solution2.jpg",
    heroSubtitle: "Engenharia de arquiteturas web escaláveis (ERPs, CRMs, Intranets e Portais B2B/B2C) com foco em segurança, integração de processos e performance de alto tráfego.",
    section1Title: "Sistemas Web Customizados: O core tecnológico da sua operação.",
    section1Text: "Na Softwere House, desenvolvemos sistemas e plataformas de alta complexidade que automatizam processos, centralizam dados e escalam a produtividade. Projetamos arquiteturas robustas para soluções como ERPs, CRMs e Portais B2B, onde a estabilidade e a integração são requisitos inegociáveis.",
    section1Text2: "Nossa engenharia é focada em criar ativos digitais proprietários que eliminam a dependência de softwares genéricos, entregando uma solução sob medida que se molda exatamente ao fluxo de trabalho e à visão de crescimento da sua organização.",
    section1Features: [
      { icon: Server, title: "Scalable Architecture", text: "Projetamos sistemas preparados para o crescimento. Nossas plataformas utilizam infraestruturas em nuvem e arquiteturas modernas que suportam o aumento de carga e usuários sem perda de performance ou estabilidade." },
      { icon: ShieldCheck, title: "Segurança Empresarial", text: "A proteção de dados é o pilar central. Implementamos protocolos rigorosos de criptografia, autenticação multifator e conformidade total com a LGPD, garantindo que as informações sensíveis da sua empresa e clientes estejam blindadas." },
      { icon: Layers, title: "Integração de sistemas (API First)", text: "Criamos sistemas que dialogam perfeitamente com o seu ecossistema atual. Através de arquiteturas baseadas em APIs, conectamos sua nova plataforma a softwares legados, gateways de pagamento, ferramentas de marketing e bancos de dados externos." },
      { icon: LayoutGrid, title: "Performance UX", text: "Sistemas complexos não precisam ser difíceis de usar. Aplicamos design de interface focado em eficiência operacional, reduzindo a curva de aprendizado da sua equipe e otimizando o tempo de execução das tarefas diárias." }
    ],
    section2Title: "Viabilize o controle total da sua operação com uma arquitetura de software desenhada para o seu negócio.",
    section2Subtitle: "ERPs, CRMs, Intranets e Portais B2B/B2C construídos com engenharia de ponta.",
    section3Cards: [
      { icon: LayoutGrid, title: "Painéis Personalizados (UX)", text: "Crie relatórios com navegação focada no fluxo mental da pessoa do usuário final que deve ser priorizada no escopo da sprint." },
      { icon: Database, title: "Carga de Dados Pesados", text: "Arquitetura voltada a lidar em sincronia e ingestões pesadas corporativas que suportam os piores gargalos logísticos." },
      { icon: Server, title: "Microsserviços e Clouds", text: "Seu sistema desacoplado, cada engrenagem isolada numa rede resiliente em cloud da AWS ou outras estruturas de serviço." },
      { icon: ShieldCheck, title: "Rigidez Contra Invasões", text: "Acessos rastreáveis e limitados garantem que os dados restritos da corporação se mantenham seguros das quebras diárias de proteção indesejadas pela administração." },
      { icon: TrendingUp, title: "Analytics Customizável", text: "Cruzamento rápido de métricas no frontend para fornecer resultados comerciais visualmente ricos às tomadas das futuras lideranças da operação." },
      { icon: Globe, title: "Fale com nossos especialistas", text: "", isActionCard: true }
    ],
    hasContactCard: false
  },
  "aplicativos-mobile": {
    slug: "aplicativos-mobile",
    title: "Aplicativos Mobile",
    heroImage: "/images/solutions/solution3.jpg",
    heroSubtitle: "Projetamos e desenvolvemos aplicativos nativos e híbridos com design focado no usuário, performance otimizada e integração perfeita para as plataformas iOS e Android.",
    section1Title: "Aplicativos Mobile para a elevação digital constante da sua marca.",
    section1Text: "Na Softwere House, transformamos visões de negócio em experiências mobile nativas e híbridas de alta performance. Projetamos aplicativos que não são apenas ferramentas, mas ecossistemas de engajamento e utilidade, desenvolvidos para dominar as lojas de apps (App Store e Google Play) com estabilidade e fluidez.",
    section1Text2: "Nossa abordagem une o rigor técnico da engenharia de software com a sensibilidade do design de interface, garantindo que o seu produto mobile seja rápido, intuitivo e capaz de escalar junto com a sua base de usuários.",
    section1Features: [
      { icon: Zap, title: "Native Performance", text: "Priorizamos a velocidade de resposta. Seja em arquiteturas nativas ou tecnologias multiplataforma (como Flutter ou React Native), garantimos que o aplicativo utilize o máximo do poder de processamento do dispositivo, oferecendo navegação instantânea e transições suaves." },
      { icon: Globe, title: "Offline-First Experience", text: "A conectividade não deve ser um gargalo. Estruturamos aplicativos que funcionam de forma inteligente mesmo sem internet, sincronizando dados em segundo plano assim que a conexão é restabelecida, garantindo produtividade ininterrupta para o usuário." },
      { icon: LayoutGrid, title: "UI/UX Design", text: "Mobile é sobre toque e contexto. Criamos interfaces que respeitam os padrões de usabilidade de cada sistema operacional, utilizando gestos, microinterações e componentes visuais que tornam a jornada do usuário prazerosa e eficiente." },
      { icon: Cpu, title: "Hardware Integration", text: "Sistemas complexos não precisam ser difíceis de usar. Aplicamos design de interface focado em eficiência operacional, reduzindo a curva de aprendizado da sua equipe e otimizando o tempo de execução das tarefas diárias." }
    ],
    section2Title: "Tenha uma presença garantida em toda jornada dentro de uma plataforma móvel pronta para o mercado escalar.",
    section2Subtitle: "iOS e Android com performance nativa, segurança de dados e integração completa.",
    section3Cards: [
      { icon: MonitorSmartphone, title: "Modo Offline Preparado", text: "As transações críticas e informações do DB continuarão sendo executadas sem conexão e com posterior sincronia contínua nas bases do servidor." },
      { icon: Smartphone, title: "Ergonomia Visual Fluida (UI/UX)", text: "Padrões respeitados milimetricamente pelas diretrizes do mercado (iOS/Google) garantido toque instintivo de uso." },
      { icon: Database, title: "Tamanho Muito Otimizado", text: "Compactamos dependências cruciais limitando a memória exigida, facilitando a adesão orgânica de usuários móveis em todos celulares ativos mundialmente." },
      { icon: CheckCircle2, title: "Mapas Analytics", text: "Conhecimento sobre os rastros demográficos para as próximas decisões em equipe estratégica gerencial do serviço executado online na empresa central em painéis da cloud online log." },
      { icon: ShieldCheck, title: "Autenticação por Sensor Físico", text: "Garantimos o vínculo sem senhas permitindo conexões diretas na carteira de perfis baseados no FaceId, leitores visuais ou de toque contínuo em poucos fluxos nativamente." },
      { icon: Globe, title: "Fale com nossos especialistas", text: "", isActionCard: true }
    ],
    hasContactCard: true,
    contactCardTitle: "Antes de fechar o desenvolvimento de aplicativos:"
  },
  "automacao-inteligente": {
    slug: "automacao-inteligente",
    title: "Automação Inteligente",
    heroImage: "/images/solutions/solution4.jpg",
    heroSubtitle: "Projetamos ecossistemas de automação que transformam processos manuais e repetitivos em fluxos de trabalho inteligentes e autônomos.",
    section1Title: "Automação Inteligente: A Evolução da Eficiência Operacional.",
    section1Text: "Na Softwere House, projetamos ecossistemas de automação que transformam processos manuais e repetitivos em fluxos de trabalho inteligentes e autônomos. Integramos Inteligência Artificial e algoritmos avançados para que sua empresa opere com precisão cirúrgica, eliminando gargalos e permitindo que seu capital humano foque em estratégia e inovação.",
    section1Text2: "Nossa abordagem une o rigor técnico da engenharia de software com a sensibilidade do design de interface, garantindo que o seu produto mobile seja rápido, intuitivo e capaz de escalar junto com a sua base de usuários.",
    section1Features: [
      { icon: Cpu, title: "AI-Driven Workflows", text: "Implementamos camadas de Inteligência Artificial que vão além da automação simples. Criamos fluxos que analisam variáveis em tempo real, tomam decisões baseadas em padrões e otimizam resultados de forma preditiva." },
      { icon: Database, title: "Data-Centric Automation", text: "A automação só é inteligente se for baseada em dados reais. Estruturamos a coleta e o processamento de informações para que cada gatilho de automação seja preciso, gerando relatórios de impacto e performance em tempo real." },
      { icon: Layers, title: "System Ecosystem Integration", text: "Conectamos o isolado. Nossa engenharia une plataformas distintas (ERPs, CRMs, APIs de terceiros e bancos de dados) em um único fluxo contínuo, garantindo que a informação flua sem fricção por todos os departamentos da empresa." },
      { icon: TrendingUp, title: "Operational Scalability", text: "Projetamos soluções para crescer. Nossas automações são desenvolvidas para suportar aumentos drásticos de demanda sem perda de performance, garantindo que sua infraestrutura técnica acompanhe o ritmo de expansão do seu negócio." }
    ],
    section2Title: "Otimize e redefina os tempos lentos e falhas na sua operação real com Automação Inteligente baseada em IA.",
    section2Subtitle: "RPA, Machine Learning e pipelines inteligentes integrados à sua infraestrutura.",
    section3Cards: [
      { icon: Cpu, title: "Robôs Digitais Ininterruptos", text: "RPA e pipelines autônomos criados do zero garantem operações vitais nos servidores da firma mesmo que o time inteiro das bases comerciais físicas estejam sempre de fato no repouso local interno." },
      { icon: Search, title: "Extratores de Dados OCR Avançados", text: "Visão computacional focada em documentação e planilhas impressas (fiscais inclusas) transformadas numa grande rede conectada digital de fácil manipulação comercial e gerencial de banco corporativo." },
      { icon: Database, title: "Governança Lógica Estruturada", text: "Bases de conhecimento cruzadas nos vetores isolados sem sobrepor segurança contínua nas operações mais importantes que movimentam a essência corporativa nos períodos das transações críticas anuais mensais constantes do plano de trabalho baseados." },
      { icon: TrendingUp, title: "Escala Vertical Infinita Oculta", text: "Multiplique seu faturamento logístico central processando dez vezes as demandas comerciais virtuais e rotinas burocráticas no momento do pico da semana das rotinas da esteira operacional logística e suporte local invisivelmente ativo ao todo sem gargalos na raiz." },
      { icon: Zap, title: "Velocidade Sistêmica Concreta", text: "Sem interfaces, softwares automatizados falam direto com a API, ignorando telas corporativas ou sites paralelos de forma absurdamente impulsionada, liberando os operadores vitais internos fáceis e alívios ao estresse burocrático contínuo rotineiro." },
      { icon: Globe, title: "Fale com nossos especialistas", text: "", isActionCard: true }
    ],
    hasContactCard: false
  },
  "discovery-assessment": {
    slug: "discovery-assessment",
    title: "Discovery & Assessment",
    heroImage: "/images/solutions/solution5.jpg",
    heroSubtitle: "Nosso processo de Discovery & Assessment é uma imersão técnica e de negócio desenhada para transformar incertezas em um roadmap de execução preciso e seguro.",
    section1Title: "A Engenharia da Viabilidade Estratégica.",
    section1Text: "Na Softwere House, acreditamos que o sucesso de um ecossistema digital começa muito antes da primeira linha de código. Nosso processo de Discovery & Assessment é uma imersão técnica e de negócio desenhada para transformar incertezas em um roadmap de execução preciso e seguro.",
    section1Text2: "Através de uma análise rigorosa de processos, tecnologias e objetivos, viabilizamos a materialização da sua visão, garantindo que cada investimento seja direcionado para soluções escaláveis, sustentáveis e com alto retorno sobre o capital investido.",
    section1Features: [
      { icon: Server, title: "Infraestrutura e Viabilidade", text: "Realizamos uma auditoria completa de infraestrutura e viabilidade. Analisamos integrações necessárias, tecnologias legadas e requisitos de segurança para garantir que a solução proposta seja tecnicamente impecável e perene." },
      { icon: ShieldCheck, title: "Mitigação de riscos", text: "Identificamos gargalos antes que eles se tornem custos. Entregamos um plano de execução detalhado (Product Roadmap), priorizando funcionalidades que geram valor imediato e minimizam riscos de desenvolvimento." },
      { icon: LayoutGrid, title: "UX Design", text: "Alinhamos o comportamento das personas aos objetivos comerciais da sua operação. Criamos jornadas de navegação intuitivas onde cada interação é planejada para reduzir a fricção e conduzir o usuário ao valor real." },
      { icon: CheckCircle2, title: "Alinhamento estratégico e metas", text: "Mapeamos profundamente os objetivos de negócio e as dores da operação. Alinhamos as expectativas dos stakeholders com as possibilidades tecnológicas, definindo indicadores de sucesso (KPIs) claros para o projeto." }
    ],
    section2Title: "Elimine a ineficiência e escale sua operação com inteligência artificial.",
    section2Subtitle: "Diagnóstico, orçamento blindado e roadmap estratégico antes da primeira linha de código.",
    section3Cards: [
      { icon: Search, title: "Mercurial Code e Refatorações Visadas (Assessment Legal)", text: "Diagnóstico profundo com avaliações nas lógicas estagnadas em projetos grandes onde a modernidade fugiu durante os laudos técnicos com a análise no histórico logístico central." },
      { icon: Layers, title: "O Esqueleto Sistêmico", text: "Nossas entregas são projetos vivos onde a solução já traz consigo todas as bases sistêmicas cruciais prontas para fluir direto na mão dos gestores (e investidores e product managers e gerentes operacionais em andamento diário)." },
      { icon: TrendingUp, title: "O Modelo Mínimo Viável de Forma Lucrativa Validado Correto", text: "As funcionalidades não cruciais ficam separadas e entregamos a lógica necessária, permitindo testes concretos no mercado comercial central, cortando excessos supérfluos custosos corporativamente para todos os investidores do time central operados." },
      { icon: CheckCircle2, title: "O Orçamento Blindado de Software Globalmente Calculado e Claro Feito", text: "Cronograma cirurgicamente garantido e documentado em contrato eliminando dores de retrabalhos longos para times logísticos cruciais envolvidos profundamente e gerentes internos e da nossa operação logística remota dedicada." },
      { icon: ShieldCheck, title: "O Escudo Anti-Riscos Estratégico Com Provas Constatadas Realizando Testes", text: "Antevisão profunda e cenários prováveis expostos e mitigados logísticos da aplicação comercial para que os gargalos da nuvem ou de lógica comercial no sistema legados acabem durante a codificação constante e final da criação técnica gerencial escalável ao dia a dia do processo corporativo diário." },
      { icon: Globe, title: "Fale com nossos especialistas", text: "", isActionCard: true }
    ],
    hasContactCard: false
  },
  "digital-performance": {
    slug: "digital-performance",
    title: "Digital Performance & SEO Técnico",
    heroImage: "/images/solutions/solution6.jpg",
    heroSubtitle: "Projetamos plataformas tecnicamente superiores para que os motores de busca e algoritmos de IA priorizem sua marca, garantindo tráfego qualificado e autoridade digital constante.",
    section1Title: "A Engenharia da Visibilidade e Conversão.",
    section1Text: "Na Softwere House, tratamos o SEO não como uma camada estética, mas como um requisito básico de arquitetura de software. Projetamos plataformas tecnicamente superiores para que os motores de busca e algoritmos de IA priorizem sua marca, garantindo tráfego qualificado e autoridade digital constante.",
    section1Text2: "Unimos a análise profunda de dados à otimização rigorosa de infraestrutura para que sua presença online não seja apenas funcional, mas um motor de alta performance que converte visitantes em oportunidades reais de negócio.",
    section1Features: [
      { icon: Search, title: "SEO técnico", text: "Construímos a base invisível. Otimizamos o Core Web Vitals, a estrutura de dados (Schema.org) e a hierarquia de tags para que o Google e modelos de IA indexem seu conteúdo com máxima precisão e velocidade." },
      { icon: Cpu, title: "Algorítmico estratégico", text: "Posicionamento que gera confiança. Desenvolvemos estratégias de conteúdo e autoridade técnica que garantem que sua marca seja a resposta principal para as dores do seu mercado, estabelecendo liderança digital de longo prazo." },
      { icon: Globe, title: "Web Vitals & Speed", text: "Velocidade é autoridade. Aplicamos técnicas avançadas de compressão, cache estratégico e carregamento assíncrono para garantir que sua plataforma atinja os níveis mais altos de performance, reduzindo a taxa de rejeição e elevando o ranking." },
      { icon: Database, title: "Orientação de dados", text: "Decisões baseadas em evidências. Monitoramos cada etapa da jornada do usuário com ferramentas de analytics de elite, transformando o comportamento de navegação em insights acionáveis para otimizar continuamente a conversão." }
    ],
    section2Title: "Não deixe sua visibilidade ao acaso.Consulte nossos especialistas em performance digital antes de sua marca se tornar invisível para o mercado.",
    section2Subtitle: "Consulte nossos especialistas em performance digital antes de sua marca se tornar invisível para o mercado.",
    section3Cards: [
      { icon: Search, title: "Código Aberto Acessível Otimizado Totalmente Profundo (Technical Inbound)", text: "Injeção e saneamento massivo das metas globais invisíveis (canonical, hreflang, hreflinks cruzados) mantendo coerente limpa e escalonável as avaliações no núcleo de pesquisa mundial e corporativas fáceis ao acesso diário das redes lógicas robóticas centrais gerenciais no projeto moderno online ativável contínuo web veloz real rápido." },
      { icon: ShieldCheck, title: "Sanitização Orgânica Profunda Links Perfil", text: "Blindagem de saúde comercial da organização centralizada do backlink de domínios rejeitando spam externo nos laudos de autoridade logísticos mensais gerados na nuvem invisíveis." },
      { icon: Zap, title: "Tuning Cirúrgico Instantâneo Arquitetura Global do Projeto Moderno Integrado Rápido Limpo Real Padrão Lógico Base Lenta Base Rápido Carregamentos Focado Otimizado Final Base.", text: "Performance injetada em rotinas lentas nos eventos assíncronos das interações e no limite de requests nas CDN internacionais." },
      { icon: Database, title: "Navegação Hierárquica Rastejável Pronta para Google Search Ativo Digital Estruturado e Veloz", text: "Arquitetura lógica contínua espelho focado limpa das camadas vitais no sitemaps XML atualizados constantes integráveis." },
      { icon: Globe, title: "Snippets Amplificados na Base Vital da Estruturação Visão Lógica Integrada Visual Focada Central Real Digital Log Global.", text: "Conexões em linguagens nativas micro-estruturadas baseadas no mercado da organização mundial Schema para a sua busca final ser expansiva local visível na audiência central comercial perfeitamente nos resultados integrados mundiais de base virtual ativa." },
      { icon: Globe, title: "Fale com nossos especialistas", text: "", isActionCard: true }
    ],
    hasContactCard: false
  },
  "modernizacao-legado": {
    slug: "modernizacao-legado",
    title: "Modernização de Legado",
    heroImage: "/images/solutions/solution7.jpg",
    heroSubtitle: "Nossa missão é realizar a reengenharia dessas plataformas, migrando arquiteturas obsoletas para ecossistemas modernos, seguros e prontos para a nuvem (Cloud Native).",
    section1Title: "Modernização de Legado: A Evolução Segura da sua Infraestrutura.",
    section1Text: "Na Softwere House, entendemos que sistemas legados carregam o conhecimento e as regras de negócio vitais da sua organização. Nossa missão é realizar a reengenharia dessas plataformas, migrando arquiteturas obsoletas para ecossistemas modernos, seguros e prontos para a nuvem (Cloud Native).",
    section1Text2: "Viabilizamos a transição tecnológica sem interromper a sua operação, eliminando dívidas técnicas e gargalos de performance que impedem o crescimento e a inovação da sua empresa no cenário digital atual.",
    section1Features: [
      { icon: Server, title: "Foco Cloud Native Avançado Central", text: "Nuances dos serviços escalonáveis sem perdas reais das redes e latências." },
      { icon: Database, title: "A Grande Fuga DB Progressiva Contínua Segura Perfeita Base Rápida Segura Lógica Digital Vital e Moderna e Clara", text: "Sincronização em via dupla e portabilidade perene nas bases do AWS em etapas isoladas logísticas centrais mensais contínuas contidas constantes operacionais remotas na cloud." },
      { icon: CheckCircle2, title: "Testes Globais na Raiz Central Comercial Foco Rápido Seguro Completo Vital Base Final Online Segura de Fluxos.", text: "Rotinas ativas comerciais cobertas por automações mantendo segurança de rotas limpas em laudos centrais constantes lógicas reais focadas em logs limpas perfeitamente integrativas." },
      { icon: ShieldCheck, title: "Esvaziamentos Feitos na Integração Virtual em Processos Lentos da Máquina Digital Operável Visível Vital Base Lógica Real.", text: "Servidores caros cortados das salas de datacenter centrais locais na mudança online para infraestrutura sem dores nas demandas comerciais integradas baseadas ágeis da nuvem das contas gerais das contas ativáveis do trabalho final operacionais escaláveis fáceis modernas centrais remotas fáceis contínuas lógicas rápidas vitais bases em tempo nas redes online remotas fáceis corporativas cloud." }
    ],
    section2Title: "Não permita que a tecnologia do passado limite o futuro do seu negócio.",
    section2Subtitle: "Consulte nossos especialistas em reengenharia e descubra como modernizar sua operação com risco zero.",
    section3Cards: [
      { icon: Globe, title: "Sitemap & UX", text: "Estruturação e hierarquização das funcionalidades. Organizamos a jornada do usuário e a orquestração de componentes para garantir uma navegação fluida e lógica." },
      { icon: LayoutGrid, title: "UI (Design)", text: "Aplicação de Key Visuals, tipografia e sistemas de design exclusivos. Transformamos o protótipo em uma interface sofisticada, alinhada à identidade e autoridade da marca." },
      { icon: Zap, title: "Código & QA", text: "Codificação de frontend e backend, incluindo CMS para gestão de conteúdos, acompanhado por um rigoroso processo de QA e ajustes detalhados pré-lançamento." },
      { icon: ShieldCheck, title: "Support", text: "Período de suporte prioritário pós-lançamento. Cobertura total para ajustes técnicos e estabilização de escopo, assegurando a integridade da plataforma." },
      { icon: Database, title: "Hosting", text: "Configuramos, otimizamos e cuidamos dos ambientes de homologação e produção do website, em ambiente cloud (nuvem) com garantia de disponibilidade e escala." },
      { icon: Globe, title: "Fale com nossos especialistas", text: "", isActionCard: true }
    ],
    hasContactCard: true,
    contactCardTitle: "Migração de código legado sem dor de cabeça?"
  }
};
