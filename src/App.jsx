import Navbar from "./components/Navbar"
import Main from "./components/Main"
import { useState } from "react"

export default function App() {

  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev)
  }

    return (
        <div className="container">
            <Navbar 
              darkMode={darkMode}
              toggleDarkMode = {toggleDarkMode}
            />
            <Main 
              darkMode={darkMode}
              toggleDarkMode = {toggleDarkMode}
            />
        </div>
    )
}

