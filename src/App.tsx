import { Route, Routes } from "react-router-dom"
import { Container } from "react-bootstrap"
import { Home } from "./pages/home"
import { About } from "./pages/About"
import { Store } from "./pages/Store"
import { Navbar } from "./components/NavBar"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"

function App() {


  return (
    <ShoppingCartProvider>
    <Navbar/>
    <Container className="mb-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Store" element={<Store />} />
      </Routes>
    </Container>
    </ShoppingCartProvider>
    
  )
}

export default App
