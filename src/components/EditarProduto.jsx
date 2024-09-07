import React from 'react'
import './EditarProduto.css'
import { InputGroup, Button } from './Formularios.jsx'

export default function EditarProduto() {
    return (
        <section className="container">
            <h1 className="title">Editar produto</h1>

            <form className="form">
                <div className="input-group">
                    <label className="label">Nome do produto:</label>
                    <input className="input" type="text" placeholder="Digite o nome do produto" />
                </div>
                <div className="input-group">
                    <label className="label">Marca:</label>
                    <input className="input" type="text" placeholder="Digite a marca do produto" />
                </div>
                <div className="input-group">
                    <label className="label">Categoria:</label>
                    <input className="input" type="text" placeholder="Digite a categoria do produto" />
                </div>
                <div className="input-group">
                    <label className="label">Preço unitário:</label>
                    <input className="input" type="text" placeholder="10.50" />
                </div>
                <div className="input-group">
                    <label className="label">Quantidade em estoque:</label>
                    <input className="input" type="text" placeholder="100" />
                </div>
                <div className="input-group">
                    <label className="label">Data do lote:</label>
                    <input className="input" type="text" placeholder="25/05/2024" />
                </div>
                <div className="input-group">
                    <label className="label">Fornecedor:</label>
                    <input className="input" type="text" placeholder="Digite o fornecedor" />
                </div>
                <button className="button" type="submit">Salvar Alterações</button>
            </form>
        </section>
    )
}
