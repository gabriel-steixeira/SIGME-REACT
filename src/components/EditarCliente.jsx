import React, { useState, useEffect } from 'react';
import './EditarCliente.css';

const EditarClientes = () => {
  const [clientes, setClientes] = useState([]);
  const [idEditar, setIdEditar] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');
  const [produto, setProduto] = useState('');
  const [valorCompra, setValorCompra] = useState('');
  const [cpf, setCpf] = useState('');
  const [error, setError] = useState('');
  
  useEffect(() => {
    const clientesData = JSON.parse(localStorage.getItem('clientes')) || [];
    setClientes(clientesData);

    if (idEditar) {
      const cliente = clientesData.find(f => f.id === parseInt(idEditar));
      if (cliente) {
        setNome(cliente.nome);
        setEmail(cliente.email);
        setTelefone(cliente.telefone);
        setEndereco(cliente.endereco);
        setProduto(cliente.produto);
        setValorCompra(cliente.valorCompra);
        setCpf(cliente.cpf);
      }
    }
  }, [idEditar]);

  const validarCampos = () => {
    if (!nome || !email || !telefone || !endereco || !produto || !valorCompra || !cpf) {
      setError('Todos os campos são obrigatórios!');
      return false;
    }
    if (!email.includes('@')) {
      setError('O email deve conter "@"!');
      return false;
    }
    if (isNaN(valorCompra) || valorCompra <= 0) {
      setError('O valor da compra deve ser um número positivo!');
      return false;
    }
    if (cpf.length !== 11 || isNaN(cpf)) {
      setError('O CPF deve ter 11 dígitos numéricos!');
      return false;
    }
    setError('');
    return true;
  };

  const atualizarCliente = () => {
    if (validarCampos()) {
      const clientesData = JSON.parse(localStorage.getItem('clientes')) || [];
      const clientesAtualizados = clientesData.map(cliente =>
        cliente.id === parseInt(idEditar)
          ? { ...cliente, nome, email, telefone, endereco, produto, valorCompra, cpf }
          : cliente
      );
      localStorage.setItem('clientes', JSON.stringify(clientesAtualizados));
      alert('Cliente atualizado com sucesso!');
      setIdEditar('');
      setNome('');
      setEmail('');
      setTelefone('');
      setEndereco('');
      setProduto('');
      setValorCompra('');
      setCpf('');
    }
  };

  const handleClienteChange = (e) => {
    setIdEditar(e.target.value);
  };

  return (
    <div className="editar-cliente-page">
      <h1>Editar Clientes</h1>
      <div className="select-container">
        <label htmlFor="cliente-select">Selecionar Cliente:</label>
        <select id="cliente-select" value={idEditar} onChange={handleClienteChange}>
          <option value="">Selecione um cliente</option>
          {clientes.map(cliente => (
            <option key={cliente.id} value={cliente.id}>
              {cliente.nome} - {cliente.cpf}
            </option>
          ))}
        </select>
      </div>
      {idEditar && (
        <div className="form">
          {error && <div className="error-message">{error}</div>}
          <input
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />
          <input
            type="text"
            placeholder="Endereço"
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
          />
          <input
            type="text"
            placeholder="Produto"
            value={produto}
            onChange={(e) => setProduto(e.target.value)}
          />
          <input
            type="number"
            placeholder="Valor da Compra"
            value={valorCompra}
            onChange={(e) => setValorCompra(e.target.value)}
          />
          <input
            type="text"
            placeholder="CPF"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
          <button onClick={atualizarCliente}>Atualizar Cliente</button>
        </div>
      )}
    </div>
  );
};

export default EditarClientes;


