import React, { useState, useEffect } from 'react';
import './Cliente.css';  // Certifique-se de criar e importar o CSS correspondente
import { FaSearch } from 'react-icons/fa';

const Cliente = () => {
  const [clientes, setclientees] = useState([]);
  const [pesquisa, setPesquisa] = useState('');

  useEffect(() => {
    const clientesData = JSON.parse(localStorage.getItem('clientes')) || [];
    setclientees(clientesData);
  }, []);

  const handlePesquisaChange = (e) => {
    setPesquisa(e.target.value);
  };

  const clientesFiltrados = clientes.filter(cliente =>
    cliente.nome.toLowerCase().includes(pesquisa.toLowerCase()) ||
    cliente.cpf.includes(pesquisa)
  );

  return (
    <div className="cliente-page">
      <div className="search-form">
        <div className="search-container">
          <input
            type="text"
            placeholder="Pesquisar por nome ou CPF"
            value={pesquisa}
            onChange={handlePesquisaChange}
          />
          <FaSearch className="search-icon" />
        </div>
      </div>
      <div className="cliente-container">
        <h1>Clientes Cadastrados</h1>
        {clientesFiltrados.length > 0 ? (
          clientesFiltrados.map(cliente => (
            <div key={cliente.id} className="cliente-item">
              <p><strong>Nome:</strong> {cliente.nome}</p>
              <p><strong>Email:</strong> {cliente.email}</p>
              <p><strong>Telefone:</strong> {cliente.telefone}</p>
              <p><strong>Endereço:</strong> {cliente.endereco}</p>
              <p><strong>Produto:</strong> {cliente.produto}</p>
              <p><strong>Valor da Compra:</strong> R$ {cliente.valorCompra}</p>
              <p><strong>CPF:</strong> {cliente.cpf}</p>
            </div>
          ))
        ) : (
          <p>Nenhum cliente encontrado.</p>
        )}
      </div>
    </div>
  );
};

export default Cliente;
