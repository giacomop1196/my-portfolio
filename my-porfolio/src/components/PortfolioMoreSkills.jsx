import { Container, Row, Col, Card, Image, Carousel, Button } from 'react-bootstrap';

const PortfolioMoreSkills = () => {
    return (
        <>
            <section className="py-5">
                <Container>
                    <Row className="text-center justify-content-center">
                        <Col xs={6} md={3} className="mb-4">
                            <Image src="/img/skills-logo/Adobe_Photoshop_CC_icon.svg.png" className="mb-2" alt="Photoshop icon" style={{ width: '50px', height: '50px', objectFit: 'contain' }} />
                            <h5>Adobe Photoshop</h5>
                        </Col>
                        <Col xs={6} md={3} className="mb-4">
                            <Image src="/img/skills-logo/Adobe_Premiere_Pro_CC_icon.svg.png" className="mb-2" alt="Premiere Pro icon" style={{ width: '50px', height: '50px', objectFit: 'contain' }} />
                            <h5>Adobe Premiere</h5>
                        </Col>
                        <Col xs={6} md={3} className="mb-4">
                            <Image src="/img/skills-logo/Adobe_After_Effects_CC_icon.svg.png" className='mb-2' alt="After Effects icon" style={{ width: '50px', height: '50px', objectFit: 'contain' }} />
                            <h5>Adobe AfterEffects</h5>
                        </Col>
                        <Col xs={6} md={3} className="mb-4">
                            <Image src="/img/skills-logo/Autocad-logo.png" className="mb-2" alt="Autocad icon" style={{ width: '50px', height: '50px', objectFit: 'contain' }} />
                            <h5>Autocad</h5>
                        </Col>
                        <Col xs={6} md={3} className="mb-4">
                            <Image src="/img/skills-logo/rpg-maker-xp-logo.png" className="mb-2" alt="Autocad icon" style={{ width: '50px', height: '50px', objectFit: 'contain' }} />
                            <h5>RPG Maker XP</h5>
                        </Col>
                        <Col xs={6} md={3} className="mb-4">
                            <Image src="/img/skills-logo/reality-capture-logo.png" className="mb-2 rounded-3" alt="Autocad icon" style={{ width: '50px', height: '50px', objectFit: 'contain' }} />
                            <h5>Reality Capture</h5>
                        </Col>
                    </Row>
                    <h2 className="text-center mt-5 mb-3">Percorso di studi</h2>
                    <Row>
                        {/* Laurea */}
                        <Col md={6} className="mb-4">
                            <Card className="card-custom rounded-5">
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
                            <Card className="card-custom rounded-5">
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

                    {/* Drone & Fotogrammetria */}
                    <h2 className="text-center mt-5 mb-3"><i class="bi bi-camera2 mx-2"></i>Drone & Fotogrammetria</h2>
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
                                        src="/img/drone/drone-1.jpg"
                                        alt="Drone scatto 1"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100 rounded-3"
                                        src="/img/drone/drone-2.jpg"
                                        alt="Drone scatto 2"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100 rounded-3"
                                        src="/img/drone/drone-3.jpg"
                                        alt="Drone scatto 3"
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                    </Row>


                    {/* Fan Game Pokémon */}
                    <h2 className="text-center mt-5 mb-3"><i class="bi bi-controller mx-2"></i>Progetto Fan Game Pokémon</h2>
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

                    {/* Sezione Competenze Extra */}
                    <h2 className="text-center mt-5 mb-3">
                        <i className="bi bi-stars mx-2"></i>Competenze Extra
                    </h2>
                    <Row className="align-items-center justify-content-center">
                        <Col md={10}>
                            <p className="text-center text-md-start">
                                Oltre alle mie esperienze nello sviluppo software e nella creazione di progetti digitali,
                                ho acquisito competenze in diversi ambiti:
                            </p>
                            <ul className="text-start">
                                <li>
                                    <strong>Adobe Photoshop, Premiere Pro e After Effects</strong> – utilizzo creativo per
                                    grafica digitale, montaggio video e animazioni.
                                </li>
                                <li>
                                    <strong>Autocad</strong> – appreso durante il percorso di studi da geometra, utile
                                    per progettazione e disegno tecnico.
                                </li>
                                <li>
                                    <strong>Riparazione PC e Smartphone</strong> – sia a livello <em>software</em>
                                    (formattazione, reinstallazione, configurazioni) che <em>hardware</em>
                                    (sostituzione componenti, diagnosi e manutenzione).
                                </li>
                            </ul>
                        </Col>
                    </Row>

                    {/* Pulsante Github */}
                    <Row className="align-items-center justify-content-center mt-5">
                        <Col md={8} className="text-center">
                            <p>
                                Se vuoi scoprire altri miei lavori e progetti personali, puoi visitarli sul mio
                                profilo <strong>GitHub</strong>.
                                Troverai codice sorgente, esperimenti e repository che raccontano la mia
                                crescita come sviluppatore.
                            </p>
                            <Button
                                variant="dark"
                                href="https://github.com/giacomop1196"
                                target="_blank"
                                className="rounded-pill px-4"
                            >
                                <i className="bi bi-github me-2"></i>
                                Vai al mio GitHub
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default PortfolioMoreSkills;
