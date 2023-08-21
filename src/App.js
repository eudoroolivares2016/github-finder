import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Footer from "./Components/Layout/Footer"
import NavBar from "./Components/Layout/NavBar"

import About from "./Components/Pages/About"
import Home from "./Components/Pages/Home"
import NotFound from "./Components/Pages/NotFound"

import {GithubProvider} from "./Components/Context/github/GithubContext"

function App() {
  return (
    <GithubProvider>
      <Router>
        <div className="flex flex-col justify-between h-screen">
          <NavBar />
        <main className="container mx-auto px-3 pb-12">
          <Routes>
            <Route path="/" element={<Home />}>
              Home
            </Route>
            <Route path="/about" element={<About />}>
              About
            </Route>
            <Route path="/notfound" element={<NotFound />}>
              Not Found
            </Route>
            {/* Catch all if they got to page not found */}
            <Route path="/*" element={<NotFound />}>
              Not Found
            </Route>
          </Routes>
        </main>
        </div>
        <Footer> </Footer>
      </Router>
    </GithubProvider>
  )
}

export default App
