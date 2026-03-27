import './home.css'
import Button from '../../components/button/Button';
import Card from '../../components/card/Card'
import { Grid2x2X, MonitorCloud, Globe, BotMessageSquare } from "lucide-react";


const Home = () => {
  return (
    <section className='home'>
      <div className='sectionHome'>
        <div className='main'>
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
          height={'78%'}
          title='Aplicativos Mobile'
          text='Criamos experiências nativas e híbridas de alta performance,
          focadas em usabilidade e prontas para escalar nas lojas iOS e Android.'
          icon={<Grid2x2X />}
        />
        <Card
          view='primario'
          height={'78%'}
          title='Sistemas Internos'
          text='Automatize processos e ganhe produtividade com softwares de 
          gestão personalizados, feitos sob medida para a sua operação.'
          icon={<MonitorCloud />}
        />
        <Card
          view='primario'
          height={'78%'}
          title='Sites de Alta Conversão'
          text='Mais que um cartão de visitas: desenvolvemos portais e sites institucionais 
          otimizados para busca (SEO) e focados em gerar novos negócios.'
          icon={<Globe />}
        />
        <Card
          view='primario'
          height={'78%'}
          title='Inteligência Artificial'
          text='Implementamos IA para análise de dados, automação de tarefas e chatbots
          inteligentes que elevam o patamar tecnológico da sua empresa.'
          icon={<BotMessageSquare />}
        />
      </div>

    </section>
  );
};

export default Home;