import Header from './components/Header'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

const App = () => {
  return (
       <Router>
         <Header />
            <main className='py-3'>
              <Container>
                <Routes>
                  <Route element={<HomeScreen/>} path="/" exact />
                  <Route element={<ProductScreen />} path="/product/:id"  />
                </Routes>
              </Container>
            </main>
         <Footer />
      </Router>
  );
}

export default App;
