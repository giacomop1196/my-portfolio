import { Container } from 'react-bootstrap';

const PortfolioFooter = () => {
    return (
        <footer className="footer-custom">
            <Container className="text-center footer-content">
                <p className='mb-2'>React - React Bootstrap - React Router</p>

                
                {/* Dati Fiscali e Contatti Legali */}
                <div className="small mb-2">
                    <p className="mb-0">P.IVA: 07390840820</p>
                    <p className="mb-0">
                        PEC: <a href="mailto:giacomopillitteri" className="text-decoration-none text-white">giacomopillitteri@pec.it</a>
                    </p>
                </div>

                {/* Info Principali */}
                <p>&copy; 2025 Giacomo Pillitteri. Tutti i diritti riservati.</p>

            </Container>
        </footer>
    );
};
export default PortfolioFooter;
