import React, { useState, useEffect } from 'react';
import './EditarFornecedores.css';

const EditarFornecedores = () => {
  const [fornecedores, setFornecedores] = useState([]);
  const [idEditar, setIdEditar] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');
  const [produto, setProduto] = useState('');
  const [valorCompra, setValorCompra] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [error, setError] = useState('');
  
  useEffect(() => {
    const fornecedoresData = JSON.parse(localStorage.getItem('fornecedores')) || [];
    setFornecedores(fornecedoresData);

    if (idEditar) {
      const fornecedor = fornecedoresData.find(f => f.id === parseInt(idEditar));
      if (fornecedor) {
        setNome(fornecedor.nome);
        setEmail(fornecedor.email);
        setTelefone(fornecedor.telefone);
        setEndereco(fornecedor.endereco);
        setProduto(fornecedor.produto);
        setValorCompra(fornecedor.valorCompra);
        setCnpj(fornecedor.cnpj);
      }
    }
  }, [idEditar]);

  const validarCampos = () => {
    if (!nome || !email || !telefone || !endereco || !produto || !valorCompra || !cnpj) {
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
    if (cnpj.length !== 14 || isNaN(cnpj)) {
      setError('O CNPJ deve ter 14 dígitos numéricos!');
      return false;
    }
    setError('');
    return true;
  };

  const atualizarFornecedor = () => {
    if (validarCampos()) {
      const fornecedoresData = JSON.parse(localStorage.getItem('fornecedores')) || [];
      const fornecedoresAtualizados = fornecedoresData.map(fornecedor =>
        fornecedor.id === parseInt(idEditar)
          ? { ...fornecedor, nome, email, telefone, endereco, produto, valorCompra, cnpj }
          : fornecedor
      );
      localStorage.setItem('fornecedores', JSON.stringify(fornecedoresAtualizados));
      alert('Fornecedor atualizado com sucesso!');
      setIdEditar('');
      setNome('');
      setEmail('');
      setTelefone('');
      setEndereco('');
      setProduto('');
      setValorCompra('');
      setCnpj('');
    }
  };

  const handleFornecedorChange = (e) => {
    setIdEditar(e.target.value);
  };

  return (
    <div className="editar-fornecedor-page">
      <h1>Editar Fornecedor</h1>
      <div className="select-container">
        <label htmlFor="fornecedor-select">Selecionar Fornecedor:</label>
        <select id="fornecedor-select" value={idEditar} onChange={handleFornecedorChange}>
          <option value="">Selecione um fornecedor</option>
          {fornecedores.map(fornecedor => (
            <option key={fornecedor.id} value={fornecedor.id}>
              {fornecedor.nome} - {fornecedor.cnpj}
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
            placeholder="CNPJ"
            value={cnpj}
            onChange={(e) => setCnpj(e.target.value)}
          />
          <button onClick={atualizarFornecedor}>Atualizar Fornecedor</button>
        </div>
      )}
    </div>
  );
};

export default EditarFornecedores;


