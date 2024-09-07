import React, { useState } from 'react';
import './AdicionarFornecedores.css';

const AdicionarFornecedores = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');
  const [produto, setProduto] = useState('');
  const [valorCompra, setValorCompra] = useState('');
  const [cpf, setCpf] = useState('');
  const [error, setError] = useState('');

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

  const adicionarFornecedor = () => {
    if (validarCampos()) {
      const novoFornecedor = {
        id: Date.now(),
        nome,
        email,
        telefone,
        endereco,
        produto,
        valorCompra,
        cpf
      };

      const fornecedores = JSON.parse(localStorage.getItem('clientes')) || [];
      fornecedores.push(novoFornecedor);
      localStorage.setItem('clientes', JSON.stringify(fornecedores));

      limparCampos();
      alert('Cliente adicionado com sucesso!');
    }
  };

  const limparCampos = () => {
    setNome('');
    setEmail('');
    setTelefone('');
    setEndereco('');
    setProduto('');
    setValorCompra('');
    setCpf('');
  };

  return (
    <div className="adicionar-fornecedor-page">
      <h1>Adicionar Clientes</h1>
      {error && <div className="error-message">{error}</div>}
      <div className="form">
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
        <button onClick={adicionarFornecedor}>Adicionar Cliente</button>
      </div>
    </div>
  );
};

export default AdicionarFornecedores;



