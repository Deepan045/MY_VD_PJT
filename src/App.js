import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { Container } from "react-bootstrap";
import HomeScreen from "./Screens/HomeScreen";
import { Outlet } from "react-router-dom";
function App() {
  return (
  <>
    <Header></Header>
    <Container>
       <main> 
          <Outlet/>
       </main>
    </Container>
    <Footer></Footer>
  </>
  );
}

export default App;
