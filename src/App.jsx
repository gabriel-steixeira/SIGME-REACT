import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home.jsx'
import Produtos from './components/Produtos.jsx'
import NovoProduto from './components/NovoProduto.jsx'
import EditarProduto from './components/EditarProduto.jsx'
import ExcluirProduto from './components/ExcluirProduto.jsx'
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
          <Route path="/editar-produto" element={<EditarProduto/>} /></Routes>
          <Routes>
          <Route path="/excluir-produto" element={<ExcluirProduto/>} />
          </Routes>
          
      </BrowserRouter>
    </>
  )
}

export default App;