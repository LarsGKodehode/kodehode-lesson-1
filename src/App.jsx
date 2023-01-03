import React from 'react'
import Header from './components/Header'

// Icons
import { FaBeer } from "react-icons/fa";

// Create a parent component
function App() {
  return (
    <>
      <Header />

      <Main />

      <footer className="MyClass">
        <h1>Make changes <FaBeer /></h1>
      </footer>
    </>
  )
}

// Custom component
function Main() {
  const Title = "This is a title"

  return (
    <main>
      {/* JavaScript needs to be wrapped inside '{}' */}
      <h1>{Title}</h1>
    </main>
  )
}

// Arrow function notation
const ArrowComponent = () => {
  return (
    <main>
      <h1>Main</h1>
    </main>
  )
}

// This is older, DO NOT USE
class OldSchool extends React.Component {}

export default App
