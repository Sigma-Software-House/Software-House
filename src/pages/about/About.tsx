import './about.css';

const About = () => {
  return (
    <section className="about-page">
      <div className="sectionAbout">
        <div className="contentAbout">
          <h2 className="titleAbout">
            Muito mais que código.<br />
            <span>Nós somos a Software House.</span>
          </h2>

          <p className="textAbout">
            Nascemos com o propósito de transformar os desafios e as ideias dos nossos clientes em 
            soluções digitais sólidas e escaláveis. Combinamos o que há de mais moderno em 
            engenharia de software com um time dedicado, transparente e experiente. 
            Nosso compromisso é ir além da entrega técnica, focando no impacto real 
            para o seu negócio.
          </p>
        </div>

        <div className="imageAboutWrapper">
          <img
            src="/images/sectors/sector0.png"
            alt="Softwere House"
            className="aboutHeroImage"
            fetchPriority="high"
            decoding="async"
          />
        </div>
      </div>

      <div className="aboutEssenceSection">
        <div className="aboutEssenceContent">
          <h2 className="aboutEssenceTitle">Nossa Essência: Por que Existimos</h2>
          <p className="aboutEssenceText">
            A <strong>Softwere House</strong> nasce da convergência estratégica de seis especialistas com trajetórias complementares. Unidos por um propósito comum, fundamos esta organização para preencher a lacuna entre a complexidade tecnológica e o valor real de negócio.
          </p>
          <p className="aboutEssenceText">
            Mais do que desenvolver software, nossa missão é viabilizar ecossistemas digitais sustentáveis e escaláveis. Acreditamos que a tecnologia de ponta só atinge seu potencial máximo quando centrada na experiência do usuário e na longevidade da operação.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
