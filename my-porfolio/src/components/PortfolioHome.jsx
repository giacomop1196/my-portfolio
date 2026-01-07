import PortfolioTraining from "./PortfolioTraining"
import { Container, Row, Col } from 'react-bootstrap';

const PortfolioHome = () => {
    return (
        <>
            <Container className="py-5">
                <h2 className="text-center mb-5">Competenze IT</h2>
                <Row className="text-center d-flex justify-content-center">
                    <Col xs={6} md={4} className="mb-4">
                        <i className="fab fa-java fa-3x mb-3 text-primary"></i>
                        <h5>Java</h5>
                    </Col>
                    <Col xs={6} md={4} className="mb-4">
                        <i className="fab fa-php fa-3x mb-3 text-info"></i>
                        <h5>PHP Laravel</h5>
                    </Col>
                    <Col xs={6} md={4} className="mb-4">
                        <i className="fab fa-vuejs fa-3x mb-3 text-success"></i>
                        <h5>Vue.js</h5>
                    </Col>
                    <Col xs={6} md={4} className="mb-4">
                        <i className="fab fa-react fa-3x mb-3 text-primary"></i>
                        <h5>React</h5>
                    </Col>
                    <Col xs={6} md={4} className="mb-4">
                        <i className="fas fa-database fa-3x mb-3 text-secondary"></i>
                        <h5>MySQL</h5>
                    </Col>
                    <Col xs={6} md={4} className="mb-4">
                        <i className="fab fa-js fa-3x mb-3 text-warning"></i>
                        <h5>JavaScript</h5>
                    </Col>
                    <Col xs={6} md={4} className="mb-4">
                        <i className="fab fa-html5 fa-3x mb-3 text-danger"></i>
                        <h5>HTML</h5>
                    </Col>
                    <Col xs={6} md={4} className="mb-4">
                        <i className="fab fa-css3-alt fa-3x mb-3 text-info"></i>
                        <h5>CSS</h5>
                    </Col>
                     <Col xs={6} md={4} className="mb-4">
                        <i className="fa-brands fa-node-js fa-3x mb-3 text-success"></i>
                        <h5>NodeJS</h5>
                    </Col>
                </Row>
            </Container>
            <PortfolioTraining />
        </>
    )
}

export default PortfolioHome