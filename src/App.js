import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Home } from './pages/Home';
import { Store } from './pages/Store';
import { About } from './pages/About';
import { Navbar } from './components/Navbar';



import './App.css'
import { ShoppingCartProvider } from './context/ShoppingCartContext';


function App() {

  return (
    <div className="App">
      <ShoppingCartProvider>
        <Navbar />
        <Container>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/Store' element={<Store />}/>
            <Route path='/About' element={<About />}/>
          </Routes>
        </Container>
      </ShoppingCartProvider>
    </div>
  )
}

export default App