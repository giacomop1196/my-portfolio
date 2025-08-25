import { Container, Row, Col, Card, Image, Carousel } from 'react-bootstrap';

const PortfolioMoreSkills = () => {
    return (
        <>
            <section className="py-5">
                <Container>
                    <Row className="text-center">
                        <Col xs={6} md={3} className="mb-4">
                            <Image src="/public/img/skills-logo/Adobe_Photoshop_CC_icon.svg.png" className="mb-2" alt="Photoshop icon" style={{ width: '50px', height: '50px', objectFit: 'contain' }} />
                            <h5>Adobe Photoshop</h5>
                        </Col>
                        <Col xs={6} md={3} className="mb-4">
                            <Image src="/public/img/skills-logo/Adobe_Premiere_Pro_CC_icon.svg.png" className="mb-2" alt="Premiere Pro icon" style={{ width: '50px', height: '50px', objectFit: 'contain' }} />
                            <h5>Adobe Premiere</h5>
                        </Col>
                        <Col xs={6} md={3} className="mb-4">
                            <Image src="/public/img/skills-logo/Adobe_After_Effects_CC_icon.svg.png" className='mb-2' alt="After Effects icon" style={{ width: '50px', height: '50px', objectFit: 'contain' }} />
                            <h5>Adobe AfterEffects</h5>
                        </Col>
                        <Col xs={6} md={3} className="mb-4">
                            <Image src="/public/img/skills-logo/Autocad-logo.png" className="mb-2" alt="Autocad icon" style={{ width: '50px', height: '50px', objectFit: 'contain' }} />
                            <h5>Autocad</h5>
                        </Col>
                        <Col xs={6} md={3} className="mb-4">
                            <Image src="/public/img/skills-logo/rpg-maker-xp-logo.png" className="mb-2" alt="Autocad icon" style={{ width: '50px', height: '50px', objectFit: 'contain' }} />
                            <h5>RPG Maker XP</h5>
                        </Col>
                        <Col xs={6} md={3} className="mb-4">
                            <Image src="/public/img/skills-logo/reality-capture-logo.png" className="mb-2 rounded-3" alt="Autocad icon" style={{ width: '50px', height: '50px', objectFit: 'contain' }} />
                            <h5>Reality Capture</h5>
                        </Col>
                    </Row>
                    <h2 className="text-center mb-5">Percorso di studi</h2>
                    <Row>
                        {/* Laurea */}
                        <Col md={6} className="mb-4">
                            <Card className="card-custom rounded-4">
                                <Card.Body>
                                    <div className="d-flex align-items-center mb-2">
                                        <i className="bi-mortarboard-fill fs-2 me-3 text-secondary"></i>
                                        <div>
                                            <Card.Title className="mb-0">Laurea in Economia Aziendale</Card.Title>
                                            <Card.Subtitle className="text-muted">Università Telematica Pegaso</Card.Subtitle>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>

                        {/* Diploma */}
                        <Col md={6} className="mb-4">
                            <Card className="card-custom rounded-4">
                                <Card.Body>
                                    <div className="d-flex align-items-center mb-2">
                                        <i className="bi-rulers fs-2 me-3 text-secondary"></i>
                                        <div>
                                            <Card.Title className="mb-0">Diploma Geometra</Card.Title>
                                            <Card.Subtitle className="text-muted">Campus Lincoln Palermo</Card.Subtitle>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    {/* Nuova sezione: Drone & Fotogrammetria */}
                    <h2 className="text-center my-5">Drone & Fotogrammetria</h2>
                    <Row className="align-items-center justify-content-center">
                        <Col md={6} className="mb-4">
                            <p className="text-center text-md-start">
                                Sono un <strong>pilota drone certificato</strong> e utilizzo il drone anche per creare <strong>modelli 3D</strong> tramite <strong>Reality Capture</strong>.
                                Questa tecnologia mi permette di realizzare modelli digitali precisi per progetti architettonici, mappe 3D e rendering.
                            </p>
                        </Col>
                        <Col md={6} className="text-center">
                            <Carousel fade className="mx-auto carousel-custom">
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100 rounded-3"
                                        src="/public/img/drone/drone-1.jpg"
                                        alt="Drone scatto 1"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100 rounded-3"
                                        src="/public/img/drone/drone-2.jpg"
                                        alt="Drone scatto 2"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100 rounded-3"
                                        src="/public/img/drone/drone-3.jpg"
                                        alt="Drone scatto 3"
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                    </Row>


                    {/* Nuova sezione: Fan Game Pokémon */}
                    <h2 className="text-center my-5">Progetto Fan Game Pokémon</h2>
                    <Row className="align-items-center justify-content-center">
                        <Col md={6} className="mb-4">
                            <p className="text-center text-md-start">
                                Ho creato un <strong>fan game Pokémon</strong> utilizzando <strong>RPG Maker XP</strong> e il pacchetto <strong>Pokémon Essentials</strong>.
                                Il progetto include oltre <strong>20 ore di gioco</strong> con una storia <strong>creepy e accattivante</strong>.
                                Il codice è interamente scritto in <strong>Ruby</strong>, con funzionalità inedite sviluppate da me,
                                mappe progettate su misura e sprite personalizzati.
                                Ho curato ogni dettaglio per offrire un'esperienza immersiva e unica.
                            </p>
                        </Col>
                        <Col md={6} className="text-center">
                            <Carousel fade className="mx-auto carousel-custom">
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100 rounded-3"
                                        src="/img/pokemon/pkm-1.png"
                                        alt="Screenshot fan game 1"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100 rounded-3"
                                        src="/img/pokemon/pkm-2.png"
                                        alt="Screenshot fan game 2"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100 rounded-3"
                                        src="/img/pokemon/pkm-3.png"
                                        alt="Screenshot fan game 3"
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                    </Row>


                </Container>
            </section>
        </>
    );
};

export default PortfolioMoreSkills;
