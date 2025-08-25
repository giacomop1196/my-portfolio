import { Container } from 'react-bootstrap';

const PortfolioFooter = () => {
    return (
        <footer className="footer-custom">
            {/* SVG per la curva verso l'alto */}
            <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="footer-wave">
                <path d="M0,100 C360,0 1080,0 1440,100 L1440,0 L0,0 Z" fill="#121212" />
            </svg>

            <Container className="text-center footer-content">
                <p>&copy; 2025 Giacomo Pillitteri. Tutti i diritti riservati.</p>
            </Container>
        </footer>
    );
};

export default PortfolioFooter;
