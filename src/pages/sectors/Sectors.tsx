import './sectors.css'
import Card from '../../components/card/Card';
import Button from '../../components/button/Button';
import { useNavigate } from 'react-router-dom';

const Sectors = () => {
    const navigate = useNavigate();
    return (
        <section className='sector'>
            <div className='sectionSector'>
                <div className='contentSector'>
                    <h2 className='titleSector'>
                        Soluções Moldadas para
                        <br />
                        sua Vertical de Negócio.
                    </h2>
                    <p className='textSector'>
                        Desenvolvemos tecnologias que respeitam as particularidades e os desafios de cada mercado. Nossa atuação é focada em compreender
                        as normas, processos e dinâmicas de diferentes ecossistemas para entregar plataformas que não apenas funcionam, mas otimizam
                        a liderança da sua empresa em seu setor de atuação.
                    </p>
                </div>
                <div className='image'>
                    <img
                        src="/images/sectors/sector0.png"
                        alt="Ilustração desenvolvimento"
                        className='sectorHeroImage'
                    />
                </div>
            </div>
            <div className='cardSector'>
                <Card
                    view="terceiro"
                    image="/images/sectors/sector2.jpg"
                    title="Educação"
                    text='Entregamos soluções completas de sites, estratégia de conteúdo e experiência de aprendizado 
                    (microlearning) para diferentes negócios na Educação e no Terceiro Setor.'
                    width={'670px'}
                    height={'420px'}
                    onClick={() => navigate('/setores/educacao')}
                />
                <Card
                    view="terceiro"
                    image="/images/sectors/sector1.jpg"
                    title="Gestão & Logística"
                    text='Viabilizamos plataformas de controle operacional e monitoramento em tempo real, 
                    integrando inteligência de dados para otimizar cadeias de suprimentos e fluxos de trabalho complexos.'
                    width={'670px'}
                    height={'420px'}
                    onClick={() => navigate('/setores/gestao-e-logistica')}
                />
                <Card
                    view="terceiro"
                    image="/images/sectors/sector3.jpg"
                    title="Finanças"
                    text='Desenvolvemos ecossistemas financeiros seguros e escaláveis, focados em transações de 
                    alta performance, conformidade regulatória e proteção 
                    rigorosa de ativos digitais.'
                    width={'670px'}
                    height={'420px'}
                    onClick={() => navigate('/setores/financas')}
                />
                <Card
                    view="terceiro"
                    image="/images/sectors/sector4.jpg"
                    title="Segurança"
                    text='Projetamos sistemas de monitoramento avançado e infraestruturas críticas de proteção de dados, 
                    garantindo a integridade das informações e a continuidade operacional em ambientes de alto risco.'
                    width={'670px'}
                    height={'420px'}
                    onClick={() => navigate('/setores/seguranca')}
                />
                <Card
                    view="terceiro"
                    image="/images/sectors/sector5.png"
                    title="Esporte"
                    text='Implementamos tecnologias de análise de desempenho e plataformas de engajamento, 
                    conectando dados estatísticos e experiência do usuário para elevar o patamar digital de organizações esportivas.'
                    width={'670px'}
                    height={'420px'}
                    onClick={() => navigate('/setores/esporte')}
                />
                <Card
                    view="terceiro"
                    image="/images/sectors/sector6.jpg"
                    title="Bens de Consumo"
                    text='Construímos estratégias digitais que impulsionam as marcas e os negócios de grandes indústrias que atuam no B2C,
                    através de Sites, SEO, Plataformas e E-commerces robustos, otimizando a jornada e os resultados de venda.'
                    width={'670px'}
                    height={'420px'}
                    onClick={() => navigate('/setores/bens-de-consumo')}
                />
            </div>
            <div className='buttonSector'>
                <Button
                    view="secundario"
                    width={'20%'}
                    onClick={() => navigate('/contato')}
                >
                    Outros setores
                </Button>
            </div>
        </section>
    );
};

export default Sectors;