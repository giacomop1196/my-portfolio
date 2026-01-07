import { Container, Row, Col, Card } from 'react-bootstrap';

const PortfolioMoreTraining = () => {
    return (
        <section className="bg-white py-5 my-3 rounded-5 shadow-lg">
            <Container>
                <h3 className="text-center mb-4">Altre Certificazioni Informatiche</h3>
                <Row className="justify-content-center">
                    {/* Android O: crea App con Java e Kotlin */}
                    <Col md={6} lg={4} className="mb-4">
                        <Card className="shadow-sm h-100 rounded-5">
                            <Card.Body>
                                <div className="d-flex align-items-center mb-3">
                                    <Card.Img
                                        className="me-3"
                                        variant="top"
                                        src="/img/Udemy-Logo.png"
                                        style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                                        alt="Logo Udemy"
                                    />
                                    <div>
                                        <Card.Title className="mb-0">Android O: crea App con Java e Kotlin</Card.Title>
                                        <Card.Subtitle className="text-muted">Udemy</Card.Subtitle>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* AGILE Project Management */}
                    <Col md={6} lg={4} className="mb-4">
                        <Card className="shadow-sm h-100 rounded-5">
                            <Card.Body>
                                <div className="d-flex align-items-center mb-3">
                                    <Card.Img
                                        className="me-3 rounded-4"
                                        variant="top"
                                        src="/img/logo-lifelearning.png"
                                        style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                                        alt="Logo Life Learning"
                                    />
                                    <div>
                                        <Card.Title className="mb-0">AGILE Project Management</Card.Title>
                                        <Card.Subtitle className="text-muted">Life Learning</Card.Subtitle>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Gestire un Sito Fatto con WordPress */}
                    <Col md={6} lg={4} className="mb-4">
                        <Card className="shadow-sm h-100 rounded-5">
                            <Card.Body>
                                <div className="d-flex align-items-center mb-3">
                                    <Card.Img
                                        className="me-3 rounded-4"
                                        variant="top"
                                        src="/img/logo-lifelearning.png"
                                        style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                                        alt="Logo Life Learning"
                                    />
                                    <div>
                                        <Card.Title className="mb-0">Gestire un Sito Fatto con WordPress</Card.Title>
                                        <Card.Subtitle className="text-muted">Life Learning</Card.Subtitle>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Microsoft Access */}
                    <Col md={6} lg={4} className="mb-4">
                        <Card className="shadow-sm h-100 rounded-5">
                            <Card.Body>
                                <div className="d-flex align-items-center mb-3">
                                    <Card.Img
                                        className="me-3 rounded-4"
                                        variant="top"
                                        src="/img/logo-lifelearning.png"
                                        style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                                        alt="Logo Life Learning"
                                    />
                                    <div>
                                        <Card.Title className="mb-0">
                                            Microsoft Access</Card.Title>
                                        <Card.Subtitle className="text-muted">Life Learning</Card.Subtitle>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Patente Europea: European Informatic Passport */}
                    <Col md={6} lg={4} className="mb-4">
                        <Card className="shadow-sm h-100 rounded-5">
                            <Card.Body>
                                <div className="d-flex align-items-center mb-3">
                                    <Card.Img
                                        className="me-3 rounded-4"
                                        variant="top"
                                        src="/img/logo-eipass.png"
                                        style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                                        alt="Logo Certificazione 3"
                                    />
                                    <div>
                                        <Card.Title className="mb-0">
                                            Patente Europea: European Informatic Passport</Card.Title>
                                        <Card.Subtitle className="text-muted">EIPASS</Card.Subtitle>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Eccellenze in Digitale */}
                    <Col md={6} lg={4} className="mb-4">
                        <Card className="shadow-sm h-100 rounded-5">
                            <Card.Body>
                                <div className="d-flex align-items-center mb-3">
                                    <Card.Img
                                        className="me-3 rounded-4"
                                        variant="top"
                                        src="/img/logo-google.png"
                                        style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                                        alt="Logo Certificazione 3"
                                    />
                                    <div>
                                        <Card.Title className="mb-0">
                                            Eccellenze in Digitale</Card.Title>
                                        <Card.Subtitle className="text-muted">Google</Card.Subtitle>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default PortfolioMoreTraining;
