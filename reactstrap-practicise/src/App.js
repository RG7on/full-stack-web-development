import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import {Routes,Route} from "react-router-dom"
import Home from "./Components/Home";
import { Container, Row ,Col} from "reactstrap";
import Profile from "./Components/Profile";
import Register from "./Components/Register";
const App = () => {
  return (
    <Container fluid>
      <Row>
        <Header />
      </Row>
      <Row style={{ height: "600px" }}>
        <Col md={9} style={{margin: 'auto'}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Col>
      </Row>
      <Row>
        <Footer />
      </Row>
    </Container>
  );
};

export default App;
