import { Container } from "./Container";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Products from "./components/Products";
import Checkout from "./components/Checkout";

function App() {
  return (
    <>
    <Nav />
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cheackout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </Container>
    </>
  );
}

export default App;
