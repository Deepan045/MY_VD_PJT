import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { Container } from "react-bootstrap";
import HomeScreen from "./Screens/HomeScreen";

function App() {
  return (
  <>
    <Header></Header>
    <Container>
       <main> 
          <HomeScreen></HomeScreen>
       </main>
    </Container>
    <Footer></Footer>
  </>
  );
}

export default App;
