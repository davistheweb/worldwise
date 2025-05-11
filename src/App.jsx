import { BrowserRouter as BR, Route, Routes } from "react-router";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";

function App() {
  return (
    <BR>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="/login" element={<Login />} />
        <Route path="app" element={<AppLayout />}>
          <Route path="cities" element={<p>city list</p>} />
          <Route path="countries" element={<p>Country p</p>} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BR>
  );
}

export default App;
