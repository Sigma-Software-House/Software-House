import Carousel from '../carousel/Carousel';
import './methodologyCarousel.css';

const steps = [
    {
        id: 1,
        title: "Discovery",
        text: "Mapeamento minucioso dos objetivos, personas e concorrência no mercado focado em validar metas centrais comerciais reais do negócio.",
        img: "/images/methodology/methodology1.png"
    },
    {
        id: 2,
        title: "Sitemap",
        text: "Hierarquia clara em mapa visual de navegação do site facilitando perfeitamente a inteligência lógica rápida clara digital.",
        img: "/images/methodology/methodology2.png"
    },
    {
        id: 3,
        title: "Wireframes",
        text: "Criação de protótipos sem marcações cores focando no layout estrutural prático das features essenciais contidas na UI base real.",
        img: "/images/methodology/methodology3.png"
    },
    {
        id: 4,
        title: "Design UX/UI",
        text: "Aplicações de identidades visuais e cores, elevando as rotinas de fluxos centrais numa tela totalmente amigável e limpa fáceis reais das interfaces vitais do layout.",
        img: "/images/methodology/methodology4.png"
    },
    {
        id: 5,
        title: "Programação",
        text: "Desenvolvimento seguro do Front-end e Back-End da lógica viva em blocos de códigos limpos perfeitamente das funções focadas contínuas reais do digital do portal.",
        img: "/images/methodology/methodology5.png"
    },
    {
        id: 6,
        title: "Conteúdo & UX Writing",
        text: "Textos redigidos diretos conversivos focados no fim de guiar o usuário na comunicação corporativa constante lógicas certas e reais.",
        img: "/images/methodology/methodology6.png"
    },
    {
        id: 7,
        title: "Quality Assurance",
        text: "Simulações em stress constantes detectando erros vitais nas rotas sem falhas ativas reais online e seguras garantidas dos fluxos reais perenes do projeto.",
        img: "/images/methodology/methodology7.png"
    },
    {
        id: 8,
        title: "Go-Live & Deploy",
        text: "A entrega ativa definitiva do projeto limpo nas máquinas da nuvem focadas reais lógicas nos servidores virtuais acessáveis reais baseados.",
        img: "/images/methodology/methodology8.png"
    },
    {
        id: 9,
        title: "Estabilidade",
        text: "Análises contínuas de segurança contra quebras da base vital da API e dos tempos lógicos vitais online das visitas centrais garantindo a operação digital e rotineira ativada rápida.",
        img: "/images/methodology/methodology9.png"
    },
    {
        id: 10,
        title: "Evolução Contínua",
        text: "Aprimoramentos de funcionalidades gerais baseados nas tendências futuras escaláveis essenciais e de segurança contínua ágil rotineira e remota de melhoria nas interações diárias corporativas do dia.",
        img: "/images/methodology/methodology10.png"
    }
];

const MethodologyCarousel = () => {
    return (
        <div className="mc-container">
            <Carousel scrollAmount={300}>
                {steps.map((step) => (
                    <div key={step.id} className="mc-slide">
                        <div className="mc-top">
                            {/* O número do passo */}
                            <span className="mc-number">{step.id}</span>

                            {/* O Ícone na esquerda */}
                            <div className="mc-icon-wrapper">
                                <img src={step.img} alt={step.title} loading="lazy" decoding="async" />
                            </div>

                            {/* A linha preenchendo o espaço à direita */}
                            <div className="mc-line"></div>
                        </div>
                        <div className="mc-content">
                            <h3 className="mc-title">{step.title}</h3>
                            <p className="mc-text">{step.text}</p>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default MethodologyCarousel;
