import './home.css'
import Button from '../../components/button/Button';

const Home = () => {
  return (
    <section className='sectionHome'>
      <div className='home'>
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
        <Button view="primario" width={'60%'} onClick={() => console.log("clicou")}>
          Começar meu projeto
        </Button>
      </div>
      <div>
        <img
          src="/homeImage.png"
          alt="Ilustração desenvolvimento"
          className='imageButton'
        />
      </div>{" "}
    </section>
  );
};

export default Home;
