import type { ElementType } from 'react';
import { Smartphone, TrendingUp, LayoutGrid, Search, Database, Lightbulb, MapPinned, Lock, ShieldUser, BrickWallShield, Radar, CircleDollarSign, ChartPie, TvMinimalPlay, ThumbsUp, ShoppingCart, Group } from 'lucide-react';

export interface SectorData {
    slug: string;
    title: string;
    heroImage: string;
    heroSubtitle: string;
    section1Title: string;
    section1Text: string;
    section1Features: { icon: ElementType; title: string; text: string }[];
}

export const sectorsData: Record<string, SectorData> = {
    "educacao": {
        slug: "educacao",
        title: "Setor de Educação",
        heroImage: "/images/sectors/sector2.jpg",
        heroSubtitle: "Transformando o Aprendizado em Experiência Digital de Alta Escala.",
        section1Title: "Transformando o Aprendizado em Experiência Digital de Alta Escala.",
        section1Text: "Desenvolvemos ecossistemas educacionais que transcendem a sala de aula. Focamos em plataformasLMS (Learning Management Systems) robustas, microlearning e estratégias de conteúdo que garantem retenção e engajamento para instituições e o terceiro setor.",
        section1Features: [
            { icon: Smartphone, title: "Mobile First", text: "Com a predominância do acesso via dispositivos móveis, a Softwere House prioriza a fluidez e a velocidade de carregamento em smartphones. Desenvolvemos interfaces adaptativas que garantem uma experiência " },
            { icon: TrendingUp, title: "Technical SEO", text: "A visibilidade nos motores de busca e modelos de IA é determinada pela qualidade do código. Estruturamos dados, otimizamos o Core Web Vitals e garantimos que sua plataforma seja tecnicamente superior para dominar os resultados de busca." },
            { icon: LayoutGrid, title: "UX Design", text: "Alinhamos o comportamento das personas aos objetivos comerciais da sua operação. Criamos jornadas de navegação intuitivas onde cada interação é planejada para reduzir a fricção e conduzir o usuário ao valor real." },
            { icon: Search, title: "Data Intelligence", text: "Implementamos camadas de monitoramento avançado para rastrear fluxos de navegação e conversão. Transformamos o comportamento do usuário em dados acionáveis, permitindo a evolução constante do seu ativo digital." }
        ]
    },
    "gestao-e-logistica": {
        slug: "gestao-e-logistica",
        title: "Setor de Gestão e Logística",
        heroImage: "/images/sectors/sector1.jpg",
        heroSubtitle: "Eficiência Operacional e Visibilidade de Ponta a Ponta.",
        section1Title: "Eficiência Operacional e Visibilidade de Ponta a Ponta.",
        section1Text: "Criamos soluções que são o sistema nervoso da sua operação. Da gestão de frotas ao controle de estoque em tempo real, nossas plataformas eliminam gargalos logísticos e centralizam a governança da sua empresa.",
        section1Features: [
            { icon: MapPinned, title: "Real-Time Tracking", text: "Monitoramento de ativos e fluxos de carga em tempo real." },
            { icon: Lightbulb, title: "Business Intelligence", text: "Dados transformados em decisões estratégicas para a cadeia de suprimentos." },
            { icon: Database, title: "Orientação de dados", text: "Decisões baseadas em evidências. Monitoramos cada etapa da jornada do usuário com ferramentas de analytics de elite, transformando o comportamento de navegação em insights acionáveis para otimizar continuamente a conversão." }
        ]
    },
    "seguranca": {
        slug: "seguranca",
        title: "Setor de Segurança",
        heroImage: "/images/sectors/sector1.jpg",
        heroSubtitle: "Proteção Inteligente e Monitoramento de Missão Crítica.",
        section1Title: "Proteção Inteligente e Monitoramento de Missão Crítica.",
        section1Text: "Viabilizamos sistemas de segurança que utilizam o estado da arte em tecnologia para proteção de ativos e dados. Focamos em arquiteturas resilientes que garantem a continuidade da vigilância e a rápida resposta a incidentes.",
        section1Features: [
            { icon: Lock, title: "Smart Security", text: "Integração de hardware e software para monitoramento inteligente." },
            { icon: ShieldUser, title: "Gestão de Incidentes", text: "Plataformas de comando e controle para resposta em tempo real." },
            { icon: BrickWallShield, title: "Cybersecurity", text: "Blindagem de dados sensíveis e perímetros digitais." }
        ]
    },
    "financas": {
        slug: "financas",
        title: "Setor de Finanças",
        heroImage: "/images/sectors/sector1.jpg",
        heroSubtitle: "Segurança Robusta e Performance em Transações Críticas.",
        section1Title: "Segurança Robusta e Performance em Transações Críticas.",
        section1Text: "Projetamos plataformas financeiras onde a integridade dos dados e a velocidade de processamento são as prioridades absolutas. Desenvolvemos desde gateways de pagamento até sistemas complexos de análise de crédito e risco.",
        section1Features: [
            { icon: Lock, title: "Compliance & LGPD", text: "Integração de hardware e software para monitoramento inteligente." },
            { icon: Radar, title: "Antifraude Inteligente", text: "Camadas de IA para detecção de anomalias e proteção de ativos." },
            { icon: CircleDollarSign, title: "Transações escaláveis", text: "Infraestrutura preparada para altos volumes de processamento sem latência." }
        ]
    },
    "esporte": {
        slug: "esporte",
        title: "Setor de Esporte",
        heroImage: "/images/sectors/sector1.jpg",
        heroSubtitle: "Alta Performance e Engajamento na Era Digital.",
        section1Title: "Alta Performance e Engajamento na Era Digital.",
        section1Text: "Elevamos o patamar de organizações esportivas através de tecnologia analítica e plataformas de conexão com o torcedor. Unimos a ciência de dados ao engajamento digital para criar experiências imersivas.",
        section1Features: [
            { icon: ChartPie, title: "Performance Analytics", text: "Coleta e processamento de dados estatísticos de atletas." },
            { icon: TvMinimalPlay, title: "Streaming & Conteúdo", text: "Infraestruturas de vídeo de baixa latência e portais de mídia." },
            { icon: ThumbsUp, title: "Fan Engagement", text: "Aplicativos e portais focados na jornada e fidelização do torcedor." }
        ]
    },
    "bens-de-consumo": {
        slug: "bens-de-consumo",
        title: "Setor de Bens de Consumo",
        heroImage: "/images/sectors/sector1.jpg",
        heroSubtitle: "Omnicanalidade e Conversão no Varejo, E-commerce e Marketplace de Alta Performance.",
        section1Title: "Omnicanalidade e Conversão no Varejo, E-commerce e Marketplace de Alta Performance.",
        section1Text: "Estruturamos plataformas de venda direta ao consumidor (DTC) que unem design sofisticado a uma engenharia de conversão agressiva. Focamos na jornada de compra fluida e na integração total com o estoque e logística.",
        section1Features: [
            { icon: ShoppingCart, title: "Direct-to-Consumer", text: "Canais de venda proprietários que fortalecem a margem da marca." },
            { icon: Group, title: "Integração de Inventário", text: "Sincronização em tempo real entre vendas online, físicas e centros de distribuição." },
            { icon: Smartphone, title: "Mobile", text: "Canais de venda proprietários que fortalecem a margem da marca." }
        ]
    },
};