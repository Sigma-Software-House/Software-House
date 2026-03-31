import './home.css'
import Button from '../../components/button/Button';
import Card from '../../components/card/Card'
import { Grid2x2X, MonitorCloud, Globe, BotMessageSquare } from "lucide-react";


const Home = () => {
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
          <Card
            view="secundario"
            image="/images/solutions/solution1.jpg"
            title="Site Institucional"
            text='Desenvolvemos portais robustos, seguros e com alta performance para sua empresa. 
            Conteúdo gerenciável, UX intuitiva e conformidade com todas as diretrizes da LGPD.'
            width={'300px'}
            height={'420px'}
          />
          <Card
            view="secundario"
            image="/images/solutions/solution2.jpg"
            title="Sistemas & Plataformas"
            text='Engenharia de arquiteturas web escaláveis (ERPs, CRMs, Intranets e Portais B2B/B2C)
            com foco em segurança, integração de processos e performance de alto tráfego.'
            width={'300px'}
            height={'420px'}
          />
          <Card
            view="secundario"
            image="/images/solutions/solution3.jpg"
            title="Aplicativo Mobile"
            text='Projetamos e desenvolvemos aplicativos nativos e híbridos com design focado no usuário, 
            performance otimizada e integração perfeita para as plataformas iOS e Android.'
            width={'300px'}
            height={'420px'}
          />
          <Card
            view="secundario"
            image="/images/solutions/solution4.jpg"
            title="Automação Inteligente"
            text='Projetamos e desenvolvemos aplicativos nativos e híbridos com design focado no usuário,
            performance otimizada e integração perfeita para as plataformas iOS e Android.'
            width={'300px'}
            height={'420px'}
          />
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
            onClick={() => console.log("clicou")}
          >
            Conheça nossa metodologia
          </Button>
        </div>
      </div>
      <div className='sectors'>
        <h2 className='titleSectors'>Setores</h2>
        <div className='contentSectors'>
          <Card
            view="secundario"
            image="/sector1.jpg"
            title="Gestão & Logística"
            text='Viabilizamos plataformas de controle operacional e monitoramento em tempo real, 
            integrando inteligência de dados para otimizar cadeias de suprimentos e fluxos de trabalho complexos.'
            width={'300px'}
            height={'420px'}
          />
          <Card
            view="secundario"
            image="/sector2.jpg"
            title="Educação"
            text='Entregamos soluções completas de sites, estratégia de conteúdo e experiência de aprendizado 
            (microlearning) para diferentes negócios na Educação e no Terceiro Setor.'
            width={'300px'}
            height={'420px'}
          />
          <Card
            view="secundario"
            image="/sector3.jpg"
            title="Finanças"
            text='Desenvolvemos ecossistemas financeiros seguros e escaláveis, focados em transações de 
            alta performance, conformidade regulatória e proteção 
            rigorosa de ativos digitais.'
            width={'300px'}
            height={'420px'}
          />
          <Card
            view="secundario"
            image="/sector4.jpg"
            title="Segurança"
            text='Projetamos sistemas de monitoramento avançado e infraestruturas críticas de proteção de dados, 
            garantindo a integridade das informações e a continuidade operacional em ambientes de alto risco.'
            width={'300px'}
            height={'420px'}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;