import { Container } from "./Container";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Products from "./components/Products";
import Checkout from "./components/Checkout";
import { CardProvider } from "./CardContext";

function App() {
  return (
    <>
      <CardProvider>
        <BrowserRouter>
          <Nav />
          <Container>
            <Routes>
              <Route path="/" element={<Products />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </Container>
        </BrowserRouter>
      </CardProvider>
    </>
  );
}

export default App;
