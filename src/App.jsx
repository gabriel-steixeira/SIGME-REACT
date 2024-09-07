import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './components/Home.jsx';
import Produtos from './components/Produtos.jsx';
import NovoProduto from './components/NovoProduto.jsx';
import EditarProduto from './components/EditarProduto.jsx';
import ExcluirProduto from './components/ExcluirProduto.jsx';
import Menu from './components/Menu.jsx';
import Cliente from './components/Cliente.jsx';
import Fornecedor from './components/Fornecedor.jsx';
import AdicionarClientes from './components/AdicionarClientes.jsx';
import DeletarCliente from './components/DeletarCliente.jsx';
import EditarCliente from './components/EditarCliente.jsx';
import AdicionarFornecedores from './components/AdicionarFornecedores.jsx';
import EditarFornecedores from './components/EditarFornecedores.jsx';
import ExcluirFornecedores from './components/ExcluirFornecedores.jsx';

import './App.css';

function App() {
  const [clientes, setClientes] = useState([]);
  const [fornecedores, setFornecedores] = useState([]);

  useEffect(() => {
    const savedClientes = JSON.parse(localStorage.getItem('clientes')) || [];
    setClientes(savedClientes);
  }, []);

  useEffect(() => {
    localStorage.setItem('clientes', JSON.stringify(clientes));
  }, [clientes]);

  useEffect(() => {
    const savedFornecedores = JSON.parse(localStorage.getItem('fornecedores')) || [];
    setFornecedores(savedFornecedores);
  }, []);

  useEffect(() => {
    localStorage.setItem('fornecedores', JSON.stringify(fornecedores));
  }, [fornecedores]);

  const adicionarCliente = (cliente) => {
    setClientes([...clientes, cliente]);
  };

  const deletarCliente = (id) => {
    setClientes(clientes.filter(cliente => cliente.id !== id));
  };

  const editarCliente = (updatedCliente) => {
    setClientes(clientes.map(cliente =>
      cliente.id === updatedCliente.id ? updatedCliente : cliente
    ));
  };

  const adicionarFornecedor = (fornecedor) => {
    setFornecedores([...fornecedores, fornecedor]);
  };

  const deletarFornecedor = (id) => {
    setFornecedores(fornecedores.filter(fornecedor => fornecedor.id !== id));
  };

  const editarFornecedor = (updatedFornecedor) => {
    setFornecedores(fornecedores.map(fornecedor =>
      fornecedor.id === updatedFornecedor.id ? updatedFornecedor : fornecedor
    ));
  };

  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/novo-produto" element={<NovoProduto />} />
        <Route path="/editar-produto" element={<EditarProduto />} />
        <Route path="/excluir-produto" element={<ExcluirProduto />} />
        <Route path="/clientes" element={<Cliente clientes={clientes} />} />
        <Route path="/fornecedores" element={<Fornecedor fornecedores={fornecedores} />} />
        <Route path="/adicionar-clientes" element={<AdicionarClientes onAdd={adicionarCliente} />} />
        <Route path="/deletar-clientes" element={<DeletarCliente clientes={clientes} onDelete={deletarCliente} />} />
        <Route path="/editar-cliente" element={<EditarCliente clientes={clientes} onEdit={editarCliente} />} />
        <Route path="/adicionar-fornecedores" element={<AdicionarFornecedores onAdd={adicionarFornecedor} />} />
        <Route path="/editar-fornecedores" element={<EditarFornecedores fornecedores={fornecedores} onEdit={editarFornecedor} />} />
        <Route path="/excluir-fornecedores" element={<ExcluirFornecedores fornecedores={fornecedores} onDelete={deletarFornecedor} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
