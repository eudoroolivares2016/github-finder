import "./App.css"
import { BrowserRouter as Router } from "react-router-dom"

import Home from "./Components/Layout/Home"
import Footer from "./Components/Layout/Footer"
import NavBar from "./Components/Layout/NavBar"

function App() {
  return (
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <NavBar />
      </div>
      <main className="container mx-auto px-3 pb-12">Content</main>
      <Footer> </Footer>
    </Router>
  )
}

export default App
