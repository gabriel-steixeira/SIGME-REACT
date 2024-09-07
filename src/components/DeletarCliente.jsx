import React, { useState, useEffect } from 'react';
import './DeletarCliente.css';

const ExcluirClientes = () => {
  const [clientes, setClientes] = useState([]);
  const [clienteSelecionado, setClienteSelecionado] = useState('');

  useEffect(() => {
    const clientesData = JSON.parse(localStorage.getItem('clientes')) || [];
    setClientes(clientesData);
  }, []);

  const excluirCliente  = (id) => {
    const clientesData = JSON.parse(localStorage.getItem('clientes')) || [];
    const clientesAtualizados = clientesData.filter(cliente => cliente.id !== id);
    localStorage.setItem('clientes', JSON.stringify(clientesAtualizados));
    alert('Clientes excluído com sucesso!');
    setClienteSelecionado('');
    setClientes(clientesAtualizados);
  };

  return (
    <div className="excluir-cliente-page">
      <h1>Excluir Cliente</h1>
      <div className="select-container">
        <label htmlFor="cliente-select">Selecionar Cliente:</label>
        <select
          id="cliente-select"
          value={clienteSelecionado}
          onChange={(e) => setClienteSelecionado(e.target.value)}
        >
          <option value="">Selecione um cliente</option>
          {clientes.map(cliente => (
            <option key={cliente.id} value={cliente.id}>
              {cliente.nome} - {cliente.cpf}
            </option>
          ))}
        </select>
        <br />
        <br />
        <button
          onClick={() => {
            if (clienteSelecionado) {
              excluirCliente(parseInt(clienteSelecionado));
            } else {
              alert('Selecione um cliente para excluir.');
            }
          }}
        >
          Excluir Cliente
        </button>
      </div>
    </div>
  );
};

export default ExcluirClientes;



