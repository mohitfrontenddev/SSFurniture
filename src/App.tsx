import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ReactLenis } from 'lenis/react'; 
import { Homepage } from "./components/pages/Homepage";
import { ProductDetail } from "./components/pages/ProductDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { LoadingScreen } from "./components/LoadingScreen"; // Adjust path

function App() {
  const [loading, setLoading] = useState(true);
  return (
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
    <AnimatePresence>
      {loading && <LoadingScreen onFinish={() => setLoading(false)} />}
    </AnimatePresence>

    {!loading && (
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products/:tag" element={<ProductDetail />} />
        </Routes>
      </Router>
    )}
  </ReactLenis>
  );
}

export default App;
