import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { Container, Row, Col } from "reactstrap"; //import the Reactstrap Components

const App = () => {
  return (
    <Container fluid>
      <Row>
        <Header />
      </Row>

      <Row className="main">
        <Home />
      </Row>

      <Row>
        <Footer />
      </Row>
    </Container>


  );
};

export default App;
