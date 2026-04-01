import './home.css'
import Button from '../../components/button/Button';
import Card from '../../components/card/Card'
import Carousel from '../../components/carousel/Carousel';
import { Grid2x2X, MonitorCloud, Globe, BotMessageSquare } from "lucide-react";
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <section className='home'>
      <div className='sectionHome'>
        <div className='contentHome'>
          <h2 className='titleHome'>
            Tem um desafio digital?
            <br />
            <span>A Software House é a solução.</span>
          </h2>

          <p className='textHome'>
            Unimos a agilidade de desenvolvimento que você busca com o atendimento
            próximo que seu negócio precisa. Do conceito ao lançamento, nós
            fazemos acontecer.
          </p>

          <Button
            view="primario"
            width={'60%'}
            onClick={() => console.log("clicou")}
          >
            Começar meu projeto
          </Button>
        </div>

        <div className='image'>
          <img
            src="/homeImage.png"
            alt="Ilustração desenvolvimento"
            className='imageButton'
          />
        </div>
      </div>

      <div className='cards'>
        <Card
          view='primario'
          height={'140px'}
          title='Aplicativos Mobile'
          text='Criamos experiências nativas e híbridas de alta performance,
          focadas em usabilidade e prontas para escalar nas lojas iOS e Android.'
          icon={<Grid2x2X />}
        />
        <Card
          view='primario'
          height={'140px'}
          title='Sistemas Internos'
          text='Automatize processos e ganhe produtividade com softwares de 
          gestão personalizados, feitos sob medida para a sua operação.'
          icon={<MonitorCloud />}
        />
        <Card
          view='primario'
          height={'140px'}
          title='Sites de Alta Conversão'
          text='Mais que um cartão de visitas: desenvolvemos portais e sites institucionais 
          otimizados para busca (SEO) e focados em gerar novos negócios.'
          icon={<Globe />}
        />
        <Card
          view='primario'
          height={'140px'}
          title='Inteligência Artificial'
          text='Implementamos IA para análise de dados, automação de tarefas e chatbots
          inteligentes que elevam o patamar tecnológico da sua empresa.'
          icon={<BotMessageSquare />}
        />
      </div>
      <div className='solutions'>
        <h2 className='titleSolution'>Soluções</h2>
        <div className='contentSolutions'>
          <Carousel>
            <Card
              view="secundario"
              image="/images/solutions/solution1.jpg"
              title="Site Institucional"
              text='Desenvolvemos portais robustos, seguros e com alta performance para sua empresa. 
            Conteúdo gerenciável, UX intuitiva e conformidade com todas as diretrizes da LGPD.'
              width={'300px'}
              height={'420px'}
              onClick={() => navigate('/solutions/sites-institucionais')}
            />
            <Card
              view="secundario"
              image="/images/solutions/solution2.jpg"
              title="Sistemas & Plataformas"
              text='Engenharia de arquiteturas web escaláveis (ERPs, CRMs, Intranets e Portais B2B/B2C)
            com foco em segurança, integração de processos e performance de alto tráfego.'
              width={'300px'}
              height={'420px'}
              onClick={() => navigate('/solutions/sistemas-plataformas')}
            />
            <Card
              view="secundario"
              image="/images/solutions/solution3.jpg"
              title="Aplicativo Mobile"
              text='Projetamos e desenvolvemos aplicativos nativos e híbridos com design focado no usuário, 
            performance otimizada e integração perfeita para as plataformas iOS e Android.'
              width={'300px'}
              height={'420px'}
              onClick={() => navigate('/solutions/aplicativo-mobile')}
            />
            <Card
              view="secundario"
              image="/images/solutions/solution4.jpg"
              title="Automação Inteligente"
              text='Projetamos e desenvolvemos aplicativos nativos e híbridos com design focado no usuário,
            performance otimizada e integração perfeita para as plataformas iOS e Android.'
              width={'300px'}
              height={'420px'}
              onClick={() => navigate('/solutions/automacao-inteligente')}
            />
            <Card
              view="secundario"
              image="/images/solutions/solution5.jpg"
              title="Discovery & Assessment"
              text='Mapeamos e validamos a viabilidade técnica e de negócio de seu projeto 
              digital. Reduza riscos, otimize investimentos e defina a Melhor Experiência Viável (MEV) antes da execução.'
              width={'300px'}
              height={'420px'}
              onClick={() => navigate('/solutions/discovery-assessment')}
            />
            <Card
              view="secundario"
              image="/images/solutions/solution6.jpg"
              title="Digital Performance & SEO Técnico"
              text='Otimizamos a performance de suas plataformas para garantir alta visibilidade,
              tráfego qualificado e conversão de resultados. Auditoria técnica de SEO e estratégias de ranqueamento contínua'
              width={'300px'}
              height={'420px'}
              onClick={() => navigate('/solutions/digital-performance-seo-tecnico')}
            />
            <Card
              view="secundario"
              image="/images/solutions/solution7.jpg"
              title="Modernização de Legado"
              text='Transformamos seus sistemas legados em infraestruturas modernas, escaláveis e prontas para a nuvem. Migração estratégica 
              e reengenharia de software para garantir inovação e segurança.'
              width={'300px'}
              height={'420px'}
              onClick={() => navigate('/solutions/modernizacao-de-legado')}
            />
          </Carousel>
          <Button
            view="primario"
            width={'20%'}
            onClick={() => navigate('/solucoes')}
          >
            Veja todas as soluções
          </Button>
        </div>
      </div>
      <div className='methodology'>
        <h2 className='titleMethodology'>Nossa base para o seu sucesso</h2>
        <p className='textMethodology'>Na Softwere House, não entregamos apenas linhas de código. Construímos soluções técnicas robustas e escaláveis,
          focadas em transformar desafios complexos em experiências digitais simplificadas para o seu negócio.</p>
        <div className="methodologyContent">
          <div className="methodCard variant-1">
            <h2 className="methodTitle">100% Personalizado</h2>
            <p className="methodText"> Diferente de soluções prontas, desenvolvemos softwares moldados exatamente para
              a lógica da sua operação, garantindo que a tecnologia
              se adapte ao seu negócio,
              e não o contrário.</p>
          </div>

          <div className="methodCard variant-2">
            <h2 className="methodTitle">High-End Stack</h2>
            <p className="methodText">Utilizamos as linguagens e frameworks mais modernos do mercado mundial.
              Isso garante que seu projeto seja rápido, seguro e fácil de atualizar conforme sua empresa cresce.</p>
          </div>

          <div className="methodCard variant-3">
            <h2 className="methodTitle">Suporte Próximo</h2>
            <p className="methodText">Acreditamos em tecnologia humana. Você terá uma linha direta com quem entende do seu projeto,
              eliminando burocracias e garantindo respostas rápidas para qualquer desafio.</p>
          </div>
        </div>
        <div className='buttonMethodology'>
          <Button
            view="primario"
            width={'40%'}
            onClick={() => navigate('/setores')}
          >
            Conheça nossa metodologia
          </Button>
        </div>
      </div>
      <div className='sectors'>
        <h2 className='titleSectors'>Setores</h2>
        <div className='contentSectors'>
          <Carousel>
            <Card
              view="secundario"
              image="/images/sectors/sector1.jpg"
              title="Gestão & Logística"
              text='Viabilizamos plataformas de controle operacional e monitoramento em tempo real, 
              integrando inteligência de dados para otimizar cadeias de suprimentos e fluxos de trabalho complexos.'
              width={'300px'}
              height={'420px'}
              onClick={() => navigate('/setores/gestao-e-logistica')}
            />
            <Card
              view="secundario"
              image="/images/sectors/sector2.jpg"
              title="Educação"
              text='Entregamos soluções completas de sites, estratégia de conteúdo e experiência de aprendizado 
              (microlearning) para diferentes negócios na Educação e no Terceiro Setor.'
              width={'300px'}
              height={'420px'}
              onClick={() => navigate('/setores/educacao')}
            />
            <Card
              view="secundario"
              image="/images/sectors/sector3.jpg"
              title="Finanças"
              text='Desenvolvemos ecossistemas financeiros seguros e escaláveis, focados em transações de 
              alta performance, conformidade regulatória e proteção 
              rigorosa de ativos digitais.'
              width={'300px'}
              height={'420px'}
              onClick={() => navigate('/setores/financas')}
            />
            <Card
              view="secundario"
              image="/images/sectors/sector4.jpg"
              title="Segurança"
              text='Projetamos sistemas de monitoramento avançado e infraestruturas críticas de proteção de dados, 
              garantindo a integridade das informações e a continuidade operacional em ambientes de alto risco.'
              width={'300px'}
              height={'420px'}
              onClick={() => navigate('/setores/seguranca')}
            />
            <Card
              view="secundario"
              image="/images/sectors/sector5.png"
              title="Esporte"
              text='Implementamos tecnologias de análise de desempenho e plataformas de engajamento, 
              conectando dados estatísticos e experiência do usuário para elevar o patamar digital de organizações esportivas.'
              width={'300px'}
              height={'420px'}
              onClick={() => navigate('/setores/esporte')}
            />
            <Card
              view="secundario"
              image="/images/sectors/sector6.jpg"
              title="Bens de Consumo"
              text='Construímos estratégias digitais que impulsionam as marcas e os negócios de grandes indústrias que atuam no B2C,
              através de Sites, SEO, Plataformas e E-commerces robustos, otimizando a jornada e os resultados de venda.'
              width={'300px'}
              height={'420px'}
              onClick={() => navigate('/setores/bens-de-consumo')}
            />
          </Carousel>
          <div className='buttonSectors'>
            <Button
              view="primario"
              width={'20%'}
              onClick={() => navigate('/sectors')}
            >
              Veja todos os setores
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;