
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ProjectDetail from "./pages/ProjectDetail";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#f8f7f3] text-[#242820]">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route
            path="/projects/:id"
            element={<ProjectDetail />}
          />
          <Route path="/contact" element={<Contact />} />

          <Route
            path="*"
            element={
              <main className="px-5 py-24 text-center">
                <h1 className="text-4xl font-semibold">
                  404 - Page Not Found
                </h1>
                <Link
                  to="/"
                  className="mt-6 inline-block underline"
                >
                  Back to Home
                </Link>
              </main>
            }
          />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
