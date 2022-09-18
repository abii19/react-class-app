import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import PageNotFound from "./components/pages/404";
import HomePage from "./components/pages/home";
import ShopPage from "./components/pages/shop";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default App;
