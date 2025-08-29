import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <main className="pt-20">
        <h1 className="text-3xl text-center mt-10">Bem-vindo à Landing Page UANE</h1>
      </main>
      <Footer/>
    </>
  )
}

export default App
