import { Container, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const PortfolioHeader = () => {
    const location = useLocation();

    return (
        <header className="hero-section">
            <Container className="text-center text-white">
                <h1 className="hero-title">Benvenuto nel mio Portfolio</h1>
                <p className="hero-subtitle">
                    Mi chiamo <strong>Giacomo Pillitteri</strong>, sono uno sviluppatore web & software 
                    con esperienza in <strong>Java, PHP Laravel, Vue, React</strong> e molte altre tecnologie.
                </p>

                <div className="social-links mt-4">
                    <a href="https://github.com/giacomop1196" target="_blank" aria-label="GitHub"><i className="bi-github"></i></a>
                    <a href="https://www.instagram.com/giacom_air/" target="_blank" aria-label="Instagram"><i className="bi-instagram"></i></a>
                    <a href="https://www.facebook.com/giacomo.pillitteri1" target="_blank" aria-label="Facebook"><i className="bi-facebook"></i></a>
                    <a href="https://wa.me/3270188892" target="_blank" aria-label="WhatsApp"><i className="bi-whatsapp"></i></a>
                    <a href="https://www.linkedin.com/in/giacomo-pillitteri/" target="_blank" aria-label="LinkedIn"><i className="bi-linkedin"></i></a>
                    <a href="mailto:giacomo.pillitteri65@gmail.com" aria-label="Email"><i className="bi-envelope-fill"></i></a>
                </div>

                <Button 
                    as={Link} 
                    to={location.pathname === '/skills' ? "/" : "/skills"} 
                    className="modern-btn mt-5"
                >
                    {location.pathname === '/skills' ? (
                        <> <i className="bi bi-house-door-fill"></i> Torna alla Home </>
                    ) : (
                        <> <i className="bi bi-lightning-charge-fill"></i> Altre competenze </>
                    )}
                </Button>
            </Container>
        </header>
    );
};

export default PortfolioHeader;
