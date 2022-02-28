import { BrowserRouter, Route, Routes } from "react-router-dom";
import Crypto from "./components/Crypto";
import Forex from "./components/Forex";
import Navbar from "./components/Navbar";
import Stock from "./components/Stock";
import DetailCrypto from "./pages/DetailCrypto";
function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/currency-exchange" element={<Forex />} />
          <Route path="/" element={<Crypto />} />
          <Route path="/stock" element={<Stock />} />
          <Route path="/crypto/:cryptoId" element={<DetailCrypto />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
