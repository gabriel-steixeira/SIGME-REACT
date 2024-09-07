import React, { useState, useEffect } from 'react';
import './ExcluirFornecedores.css';

const ExcluirFornecedores = () => {
  const [fornecedores, setFornecedores] = useState([]);
  const [fornecedorSelecionado, setFornecedorSelecionado] = useState('');

  useEffect(() => {
    const fornecedoresData = JSON.parse(localStorage.getItem('fornecedores')) || [];
    setFornecedores(fornecedoresData);
  }, []);

  const excluirFornecedor = (id) => {
    const fornecedoresData = JSON.parse(localStorage.getItem('fornecedores')) || [];
    const fornecedoresAtualizados = fornecedoresData.filter(fornecedor => fornecedor.id !== id);
    localStorage.setItem('fornecedores', JSON.stringify(fornecedoresAtualizados));
    alert('Fornecedor excluído com sucesso!');
    setFornecedorSelecionado('');
    setFornecedores(fornecedoresAtualizados);
  };

  return (
    <div className="excluir-fornecedor-page">
      <h1>Excluir Fornecedor</h1>
      <div className="select-container">
        <label htmlFor="fornecedor-select">Selecionar Fornecedor:</label>
        <select
          id="fornecedor-select"
          value={fornecedorSelecionado}
          onChange={(e) => setFornecedorSelecionado(e.target.value)}
        >
          <option value="">Selecione um fornecedor</option>
          {fornecedores.map(fornecedor => (
            <option key={fornecedor.id} value={fornecedor.id}>
              {fornecedor.nome} - {fornecedor.cnpj}
            </option>
          ))}
        </select>
        <br />
        <br />
        <button
          onClick={() => {
            if (fornecedorSelecionado) {
              excluirFornecedor(parseInt(fornecedorSelecionado));
            } else {
              alert('Selecione um fornecedor para excluir.');
            }
          }}
        >
          Excluir Fornecedor
        </button>
      </div>
    </div>
  );
};

export default ExcluirFornecedores;



