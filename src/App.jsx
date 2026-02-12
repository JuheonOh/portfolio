import "./styles/global.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import SEO from "./components/common/SEO";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { ModalProvider } from "./context/ModalContext";

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ModalProvider>
        <SEO />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ModalProvider>
    </BrowserRouter>
  );
}
