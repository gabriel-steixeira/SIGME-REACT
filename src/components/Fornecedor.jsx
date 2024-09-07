import React, { useState, useEffect } from 'react';
import './Fornecedor.css';
import { FaSearch } from 'react-icons/fa';

const Fornecedor = () => {
  const [fornecedores, setFornecedores] = useState([]);
  const [pesquisa, setPesquisa] = useState('');

  useEffect(() => {
    const fornecedoresData = JSON.parse(localStorage.getItem('fornecedores')) || [];
    setFornecedores(fornecedoresData);
  }, []);

  const handlePesquisaChange = (e) => {
    setPesquisa(e.target.value);
  };

  const fornecedoresFiltrados = fornecedores.filter(fornecedor =>
    fornecedor.nome.toLowerCase().includes(pesquisa.toLowerCase()) ||
    fornecedor.cnpj.includes(pesquisa)
  );

  return (
    <div className="fornecedores-page">
      <div className="search-form">
        <div className="search-container">
          <input
            type="text"
            placeholder="Pesquisar por nome ou CNPJ"
            value={pesquisa}
            onChange={handlePesquisaChange}
          />
          <FaSearch className="search-icon" />
        </div>
      </div>
      <div className="fornecedores-container">
        <h1>Fornecedores Cadastrados</h1>
        {fornecedoresFiltrados.length > 0 ? (
          fornecedoresFiltrados.map(fornecedor => (
            <div key={fornecedor.id} className="fornecedor-item">
              <p><strong>Nome:</strong> {fornecedor.nome}</p>
              <p><strong>Email:</strong> {fornecedor.email}</p>
              <p><strong>Telefone:</strong> {fornecedor.telefone}</p>
              <p><strong>Endereço:</strong> {fornecedor.endereco}</p>
              <p><strong>Produto:</strong> {fornecedor.produto}</p>
              <p><strong>Valor da Compra:</strong> R$ {fornecedor.valorCompra}</p>
              <p><strong>CNPJ:</strong> {fornecedor.cnpj}</p>
            </div>
          ))
        ) : (
          <p>Nenhum fornecedor encontrado.</p>
        )}
      </div>
    </div>
  );
};

export default Fornecedor;



