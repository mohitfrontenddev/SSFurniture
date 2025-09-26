import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Homepage } from "./components/pages/Homepage";
import { ProductDetail } from "./components/pages/ProductDetail";
import ReactLenis from "lenis/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";

function App() {
  return (
    <Router>
        <ScrollToTop />
      <ReactLenis
        root
        options={{
          lerp: 0.2,
          duration: 1.0,
          orientation: "vertical",
          gestureOrientation: "vertical",
          smoothWheel: true,
          wheelMultiplier: 0.7,
          touchMultiplier: 1.5,
        }}
      >
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products/:tag" element={<ProductDetail />} />
        </Routes>
      </ReactLenis>
    </Router>
  );
}

export default App;
