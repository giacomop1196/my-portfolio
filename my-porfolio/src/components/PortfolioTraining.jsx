import { Container, Row, Col, Card, Button, Collapse } from 'react-bootstrap';
import { useState } from 'react';
import PortfolioMoreTraining from './PortfolioMoreTraining';

const PortfolioTraining = () => {
    const [openEpicode, setOpenEpicode] = useState(false);
    const [openBlockchain, setOpenBlockchain] = useState(false);
    const [openModis, setOpenModis] = useState(false);
    const [openDotAcademy, setOpenDotAcademy] = useState(false);
    const [openGenerationItaly, setOpenGenerationItaly] = useState(false);
    const [showMoreCertifications, setShowMoreCertifications] = useState(false);

    // Funzione per impostare lo stato di apertura corretto
    const toggleCollapse = (setter, state) => {
        setter(!state);
    };

    return (
        <section className="bg-light py-5">
            <Container>
                <h2 className="text-center my-5">Formazione</h2>
                <Row>
                    {/* Full-Stack Developer */}
                    <Col md={6} className="mb-4">
                        <Card className="card-custom rounded-5">
                            <Card.Body>
                                <div className="d-flex align-items-center mb-2">
                                    <Card.Img
                                        className="me-3"
                                        variant="top"
                                        src="/img/logo-epicode.png"
                                        style={{ width: '50px', height: '50px', objectFit: 'contain' }}
                                        alt="Logo Epicode"
                                    />
                                    <div>
                                        <Card.Title className="mb-0">Full-Stack Developer</Card.Title>
                                        <Card.Subtitle className="text-muted">Epicode</Card.Subtitle>
                                    </div>
                                </div>
                                <div className="text-center mt-3">
                                    <Button
                                        onClick={() => toggleCollapse(setOpenEpicode, openEpicode)}
                                        aria-controls="fullstack-text"
                                        aria-expanded={openEpicode}
                                        className="details-btn rounded-pill"
                                    >
                                        {openEpicode ? (
                                            <>
                                                <i className="bi bi-chevron-up"></i> Nascondi dettagli
                                            </>
                                        ) : (
                                            <>
                                                <i className="bi bi-chevron-down"></i> Mostra dettagli
                                            </>
                                        )}
                                    </Button>

                                </div>
                                <Collapse in={openEpicode}>
                                    <div id="fullstack-text">
                                        <Card.Text className="mt-3">
                                            <small className="text-muted d-block mb-3">mag 2025</small>
                                            <ul>
                                                <li>HTML - CSS - BOOTSTRAP</li>
                                                <li>JavaScript: Manipulazione del DOM - Funzioni - Concetti di OOP</li>
                                                <li>Fetch API: Utilizzo per richieste HTTP asincrone (GET, POST, etc.) e gestione di risposte JSON.</li>
                                                <li>React: Sviluppo di componenti a classe (con state e metodi del ciclo di vita) e componenti funzionali (con Hooks).</li>
                                                <li>Hooks: Ampia esperienza con useState e useEffect. Props & State - React Router e React-Bootstrap.</li>
                                            </ul>
                                        </Card.Text>
                                    </div>
                                </Collapse>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Blockchain and Digital assets */}
                    <Col md={6} className="mb-4">
                        <Card className="card-custom rounded-5">
                            <Card.Body>
                                <div className="d-flex align-items-center mb-2">
                                    <Card.Img
                                        className="me-3"
                                        variant="top"
                                        src="/img/logo-masterz.png"
                                        style={{ width: '50px', height: '50px', objectFit: 'contain' }}
                                        alt="Logo MasterZ"
                                    />
                                    <div>
                                        <Card.Title className="mb-0">Blockchain e Digital assets</Card.Title>
                                        <Card.Subtitle className="text-muted">MasterZ.|Blockchain & Digital Assets</Card.Subtitle>
                                    </div>
                                </div>
                                <div className="text-center mt-3">

                                    <Button
                                        onClick={() => toggleCollapse(setOpenBlockchain, openBlockchain)}
                                        aria-controls="fullstack-text"
                                        aria-expanded={openBlockchain}
                                        className="details-btn rounded-pill"
                                    >
                                        {openBlockchain ? (
                                            <>
                                                <i className="bi bi-chevron-up"></i> Nascondi dettagli
                                            </>
                                        ) : (
                                            <>
                                                <i className="bi bi-chevron-down"></i> Mostra dettagli
                                            </>
                                        )}
                                    </Button>
                                </div>
                                <Collapse in={openBlockchain}>
                                    <div id="blockchain-text">
                                        <Card.Text className="mt-3">
                                            <small className="text-muted d-block mb-3">set 2023 - mar 2024</small>
                                            <ul>
                                                <li>Introduzione alla tecnologia Blockchain e focus sulle principali reti Blockchain utilizzate per applicazioni aziendali.</li>
                                                <li>Diverse Blockchain, diverse applicazioni aziendali.</li>
                                                <li>Smart Contracts.</li>
                                                <li>Principali Blockchain su cui sviluppare smart contract per applicazioni aziendali, limiti e vantaggi.</li>
                                                <li>Token e NFT.</li>
                                                <li>Asset digitali e NFT, standard e campi di applicazione.</li>
                                                <li>Classificazione delle criptovalute rispetto a stable coin e CBDC, usi e vantaggi.</li>
                                                <li>L'ecosistema della finanza decentralizzata e tutte le sue applicazioni.</li>
                                                <li>Focus sul Legal tech, su Blockchain e DLT a livello nazionale e internazionale.</li>
                                                <li>Focus sui casi d'uso più popolari basati su blockchain in ambito aziendale.</li>
                                                <li>Focus sui casi d'uso più popolari basati su blockchain in ambito startup con i relativi vantaggi.</li>
                                                <li>Presentazione di un progetto Blockchain a partner, contributori e sponsor.</li>
                                            </ul>
                                        </Card.Text>
                                    </div>
                                </Collapse>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Corso Sviluppatore Java Modis */}
                    <Col md={6} className="mb-4">
                        <Card className="card-custom rounded-5">
                            <Card.Body>
                                <div className="d-flex align-items-center mb-2">
                                    <Card.Img
                                        className="me-3"
                                        variant="top"
                                        src="/img/logo-modis.png"
                                        style={{ width: '50px', height: '50px', objectFit: 'contain' }}
                                        alt="Logo Modis"
                                    />
                                    <div>
                                        <Card.Title className="mb-0">Corso Sviluppatore Java</Card.Title>
                                        <Card.Subtitle className="text-muted">Modis</Card.Subtitle>
                                    </div>
                                </div>
                                <div className="text-center mt-3">

                                    <Button
                                        onClick={() => toggleCollapse(setOpenModis, openModis)}
                                        aria-controls="fullstack-text"
                                        aria-expanded={openModis}
                                        className="details-btn rounded-pill"
                                    >
                                        {openModis ? (
                                            <>
                                                <i className="bi bi-chevron-up"></i> Nascondi dettagli
                                            </>
                                        ) : (
                                            <>
                                                <i className="bi bi-chevron-down"></i> Mostra dettagli
                                            </>
                                        )}
                                    </Button>

                                </div>
                                <Collapse in={openModis}>
                                    <div id="modis-text">
                                        <Card.Text className="mt-3">
                                            <small className="text-muted d-block mb-3">lug 2022 - ago 2022</small>
                                            <ul>
                                                <li>Java: Principi OOP, Generics, Collections, Gestione Eccezioni, MAVEN, SpringBoot.</li>
                                                <li>Utilizzo e gestione delle API.</li>
                                                <li>Creazione di diagrammi a scopo organizzativo.</li>
                                                <li>Docker.</li>
                                                <li>Concetti della metodologia Agile.</li>
                                                <li>Project Work finale di gruppo.</li>
                                            </ul>
                                        </Card.Text>
                                    </div>
                                </Collapse>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Corso Java Developer dot Academy */}
                    <Col md={6} className="mb-4">
                        <Card className="card-custom rounded-5">
                            <Card.Body>
                                <div className="d-flex align-items-center mb-2">
                                    <Card.Img
                                        className="me-3 rounded-5"
                                        variant="top"
                                        src="/img/logo-dotacademy.jpeg"
                                        style={{ width: '50px', height: '50px', objectFit: 'contain' }}
                                        alt="Logo dot Academy"
                                    />
                                    <div>
                                        <Card.Title className="mb-0">Corso Java Developer</Card.Title>
                                        <Card.Subtitle className="text-muted">dot Academy</Card.Subtitle>
                                    </div>
                                </div>
                                <div className="text-center mt-3">

                                    <Button
                                        onClick={() => toggleCollapse(setOpenDotAcademy, openDotAcademy)}
                                        aria-controls="fullstack-text"
                                        aria-expanded={openDotAcademy}
                                        className="details-btn rounded-pill"
                                    >
                                        {openDotAcademy ? (
                                            <>
                                                <i className="bi bi-chevron-up"></i> Nascondi dettagli
                                            </>
                                        ) : (
                                            <>
                                                <i className="bi bi-chevron-down"></i> Mostra dettagli
                                            </>
                                        )}
                                    </Button>

                                </div>
                                <Collapse in={openDotAcademy}>
                                    <div id="dotacademy-text">
                                        <Card.Text className="mt-3">
                                            <small className="text-muted d-block mb-3">mag 2022 - giu 2022</small>
                                            <ul>
                                                <li>HTML/CSS Bootstrap: Creazione di pagine HTML con l'utilizzo di CSS e Bootstrap.</li>
                                                <li>JavaScript: Creazione di piccole Function, interazione con HTML.</li>
                                                <li>Java: Principi OOP, Gestione Eccezioni, DAO, Servlet, Progetti Java Web, interazione con HTML e JSP.</li>
                                                <li>MySql: DDL - DML - DQL.</li>
                                                <li>Formazione sui Diritti e Doveri dei Lavoratori.</li>
                                                <li>Formazione sulla Sicurezza Generale.</li>
                                                <li>Project Work.</li>
                                            </ul>
                                        </Card.Text>
                                    </div>
                                </Collapse>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Corso Java Developer Generation Italy */}
                    <Col md={6} className="mb-4">
                        <Card className="card-custom rounded-5">
                            <Card.Body>
                                <div className="d-flex align-items-center mb-2">
                                    <Card.Img
                                        className="me-3 rounded-4"
                                        variant="top"
                                        src="/img/logo-generationitaly.png"
                                        style={{ width: '50px', height: '50px', objectFit: 'contain' }}
                                        alt="Logo Generation Italy"
                                    />
                                    <div>
                                        <Card.Title className="mb-0">Corso Sviluppatore Java</Card.Title>
                                        <Card.Subtitle className="text-muted">Generation Italy</Card.Subtitle>
                                    </div>
                                </div>
                                <div className="text-center mt-3">

                                    <Button
                                        onClick={() => toggleCollapse(setOpenGenerationItaly, openGenerationItaly)}
                                        aria-controls="generation-text"
                                        aria-expanded={openGenerationItaly}
                                        className="details-btn rounded-pill"
                                    >
                                        {openGenerationItaly ? (
                                            <>
                                                <i className="bi bi-chevron-up"></i> Nascondi dettagli
                                            </>
                                        ) : (
                                            <>
                                                <i className="bi bi-chevron-down"></i> Mostra dettagli
                                            </>
                                        )}
                                    </Button>

                                </div>
                                <Collapse in={openGenerationItaly}>
                                    <div id="generation-text">
                                        <Card.Text className="mt-3">
                                            <small className="text-muted d-block mb-3">ott 2021 - feb 2022</small>
                                            <ul>
                                                <li>Java: (Principi OOP, Gestione Eccezioni, DAO, Servlet, Pattern, MVC), Progetti Java Web.</li>
                                                <li>Framework: Ajax, Spring.</li>
                                                <li>MySql: (DDL - DML - DQL, View, Procedure, Trigger e Function);</li>
                                                <li>HTML/CSS e Bootstrap: (elementi base).</li>
                                                <li>Javascript: (creazione di piccole function, interazione con HTML).</li>
                                            </ul>
                                        </Card.Text>
                                    </div>
                                </Collapse>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                {/* Pulsante per mostrare/nascondere altre certificazioni */}
                <div className="text-center mt-4">
                    <Button
                        onClick={() => setShowMoreCertifications(!showMoreCertifications)}
                        aria-controls="more-certifications-content"
                        aria-expanded={showMoreCertifications}
                        className="modern-toggle-btn rounded-5"
                    >
                        {showMoreCertifications ? (
                            <>
                                <i className="bi bi-chevron-up"></i> Nascondi Certificazioni
                            </>
                        ) : (
                            <>
                                <i className="bi bi-chevron-down"></i> Altre Certificazioni
                            </>
                        )}
                    </Button>
                </div>

                {/* Il nuovo componente che appare al click */}
                <Collapse in={showMoreCertifications}>
                    <div id="more-certifications-content">
                        <PortfolioMoreTraining />
                    </div>
                </Collapse>
            </Container>
        </section>
    );
};

export default PortfolioTraining;
