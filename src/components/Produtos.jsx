import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    background-color: #f8f8f8;
`

const SearchBar = styled.input`
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-sizing: border-box;
    font-size: 16px;
`

const DataTable = styled.div`
    width: 100%;
    margin-top: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    table {
        width: 100%;
        border-collapse: collapse;
    }

    th, td {
        padding: 12px 15px;
        text-align: center;
        border-bottom: 1px solid #ddd;
    }

    th {
        background-color: #f4f4f4;
    }

    tr:hover {
        background-color: #f1f1f1;
    }
`

const AddButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 60px;
    height: 60px;
    background-color: #1155EE;
    border: none;
    border-radius: 50%;
    color: white;
    font-size: 24px;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

    &:hover {
        background-color: #0d47a1;
    }

    .link {
        color: white;
        text-decoration: none;
    }
`

export default function Produtos() {
    const [searchTerm, setSearchTerm] = useState('')
    const produtos = [
        { nome: 'Pasta de dente', marca: 'Colgate', categoria: 'Higiene', preco: 50, estoque: 200, dataLote: '20/03/2024', fornecedor: 'Colgate Ltda.' },
        { nome: 'Shampoo', marca: 'Head & Shoulders', categoria: 'Higiene', preco: 25, estoque: 150, dataLote: '15/02/2024', fornecedor: 'P&G' },
        { nome: 'Condicionador', marca: 'L\'Oréal', categoria: 'Higiene', preco: 30, estoque: 180, dataLote: '10/01/2024', fornecedor: 'L\'Oréal Brasil' },
        { nome: 'Creme Hidratante', marca: 'Nivea', categoria: 'Beleza', preco: 35, estoque: 120, dataLote: '05/03/2024', fornecedor: 'Beiersdorf' },
        { nome: 'Protetor Solar', marca: 'La Roche-Posay', categoria: 'Beleza', preco: 80, estoque: 90, dataLote: '25/04/2024', fornecedor: 'La Roche-Posay Brasil' },
        { nome: 'Perfume', marca: 'Chanel', categoria: 'Perfumaria', preco: 250, estoque: 60, dataLote: '20/06/2024', fornecedor: 'Chanel S.A.' },
        { nome: 'Esmalte', marca: 'Colorama', categoria: 'Cosméticos', preco: 10, estoque: 300, dataLote: '10/02/2024', fornecedor: 'L\'Oréal Brasil' },
        { nome: 'Base Líquida', marca: 'Maybelline', categoria: 'Maquiagem', preco: 45, estoque: 80, dataLote: '01/03/2024', fornecedor: 'L\'Oréal Brasil' },
        { nome: 'Batom', marca: 'MAC', categoria: 'Maquiagem', preco: 90, estoque: 50, dataLote: '15/05/2024', fornecedor: 'MAC Cosmetics' },
        { nome: 'Delineador', marca: 'Avon', categoria: 'Maquiagem', preco: 25, estoque: 110, dataLote: '20/02/2024', fornecedor: 'Avon Brasil' },
        { nome: 'Creme Anti-idade', marca: 'Olay', categoria: 'Beleza', preco: 120, estoque: 70, dataLote: '05/04/2024', fornecedor: 'P&G' },
        { nome: 'Água Micelar', marca: 'Bioderma', categoria: 'Higiene', preco: 70, estoque: 90, dataLote: '10/03/2024', fornecedor: 'Bioderma Brasil' },
        { nome: 'Máscara Facial', marca: 'Garnier', categoria: 'Beleza', preco: 15, estoque: 200, dataLote: '25/05/2024', fornecedor: 'Garnier Brasil' },
        { nome: 'Creme para Pentear', marca: 'Pantene', categoria: 'Higiene', preco: 20, estoque: 130, dataLote: '01/06/2024', fornecedor: 'P&G' },
        { nome: 'Sabonete Líquido', marca: 'Dove', categoria: 'Higiene', preco: 18, estoque: 250, dataLote: '15/04/2024', fornecedor: 'Unilever' },
        { nome: 'Óleo Corporal', marca: 'Bio-Oil', categoria: 'Beleza', preco: 95, estoque: 40, dataLote: '01/05/2024', fornecedor: 'Bio-Oil Brasil' },
        { nome: 'Gel Facial', marca: 'Neutrogena', categoria: 'Beleza', preco: 35, estoque: 85, dataLote: '12/06/2024', fornecedor: 'Johnson & Johnson' },
        { nome: 'Spray Fixador', marca: 'L\'Oréal', categoria: 'Cosméticos', preco: 60, estoque: 90, dataLote: '18/07/2024', fornecedor: 'L\'Oréal Brasil' },
        { nome: 'Pó Compacto', marca: 'Revlon', categoria: 'Maquiagem', preco: 50, estoque: 100, dataLote: '21/08/2024', fornecedor: 'Revlon Brasil' },
        { nome: 'Sérum Facial', marca: 'The Ordinary', categoria: 'Beleza', preco: 110, estoque: 75, dataLote: '05/09/2024', fornecedor: 'Deciem' },
        { nome: 'Bálsamo Labial', marca: 'EOS', categoria: 'Beleza', preco: 20, estoque: 150, dataLote: '15/10/2024', fornecedor: 'EOS Brasil' },
        { nome: 'Esfoliante Corporal', marca: 'St. Ives', categoria: 'Beleza', preco: 40, estoque: 60, dataLote: '25/11/2024', fornecedor: 'Unilever' },
        { nome: 'Tônico Facial', marca: 'Vichy', categoria: 'Beleza', preco: 75, estoque: 90, dataLote: '30/12/2024', fornecedor: 'L\'Oréal Brasil' },
        { nome: 'Creme para as Mãos', marca: 'Granado', categoria: 'Beleza', preco: 25, estoque: 130, dataLote: '05/01/2024', fornecedor: 'Granado' },
        { nome: 'Desodorante', marca: 'Rexona', categoria: 'Higiene', preco: 15, estoque: 200, dataLote: '10/02/2024', fornecedor: 'Unilever' },
        { nome: 'Lenços Umedecidos', marca: 'Huggies', categoria: 'Higiene', preco: 30, estoque: 180, dataLote: '20/03/2024', fornecedor: 'Kimberly-Clark' },
        { nome: 'Gel Antisséptico', marca: 'Purell', categoria: 'Higiene', preco: 20, estoque: 250, dataLote: '30/04/2024', fornecedor: 'GOJO Industries' },
        { nome: 'Escova de Cabelo', marca: 'Tangle Teezer', categoria: 'Acessórios', preco: 60, estoque: 120, dataLote: '10/05/2024', fornecedor: 'Tangle Teezer Brasil' },
        { nome: 'Lâmina de Barbear', marca: 'Gillette', categoria: 'Higiene', preco: 25, estoque: 200, dataLote: '15/06/2024', fornecedor: 'P&G' },
        { nome: 'Hidratante Labial', marca: 'Burt\'s Bees', categoria: 'Beleza', preco: 35, estoque: 100, dataLote: '20/07/2024', fornecedor: 'Clorox Company' },
    ]

    const filteredProdutos = produtos.filter(produto =>
        produto.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
        produto.marca.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return(
        <Container>
            <h1>Produtos</h1>
            <SearchBar
                type="text"
                placeholder="Buscar por nome ou marca..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <DataTable>
                <table>
                    <thead>
                        <tr>
                            <th>Produto</th>
                            <th>Marca</th>
                            <th>Categoria</th>
                            <th>Preço unitário</th>
                            <th>Quantidade em estoque</th>
                            <th>Data do lote</th>
                            <th>Fornecedor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredProdutos.map((produto, index) => (
                            <tr key={index}>
                                <td>{produto.nome}</td>
                                <td>{produto.marca}</td>
                                <td>{produto.categoria}</td>
                                <td>{produto.preco}</td>
                                <td>{produto.estoque}</td>
                                <td>{produto.dataLote}</td>
                                <td>{produto.fornecedor}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </DataTable>

            <AddButton>
                <Link to="/novo-produto" className="link">+</Link>
            </AddButton>
        </Container>
    )
}
