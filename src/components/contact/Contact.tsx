import './contact.css';
import Button from '../button/Button';

const Contact = () => {
    return (
        <section className='contact' id='contato'>
            <div className='contactContent'>
                <h2 className='contactTitle'>
                    Viabilizando a próxima<br /> era digital da sua operação.
                </h2>
                
                <div className='contactDivider'>
                    <svg width="80" height="12" viewBox="0 0 80 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 6H78M78 6L73 1M78 6L73 11" stroke="white" strokeWidth="1.5"/>
                    </svg>
                </div>

                <p className='contactDesc'>
                    Integramos engenharia de alta performance aos seus objetivos
                    de negócio. Somos o suporte técnico especializado para viabilizar e
                    escalar plataformas de missão crítica.
                </p>
                <div className="contactAction">
                    <Button
                        view="secundario"
                        width={'auto'}
                        onClick={() => console.log("Fale conosco")}
                    >
                        Fale conosco
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Contact;