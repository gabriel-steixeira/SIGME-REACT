import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home.jsx'
import Produtos from './components/Produtos.jsx'
import NovoProduto from './components/NovoProduto.jsx'
import Menu from './components/Menu.jsx'
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/produtos" element={<Produtos />}></Route>
          <Route path="/novo-produto" element={<NovoProduto />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App