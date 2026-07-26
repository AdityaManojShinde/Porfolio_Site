import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import Home from "@/pages/Home"
import ProjectDetails from "@/pages/ProjectDetails"

function App() {
  return (
    <Router>
      <div className="min-h-screen overflow-hidden bg-background text-foreground">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
