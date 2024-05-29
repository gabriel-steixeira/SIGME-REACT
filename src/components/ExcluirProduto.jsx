import { useState } from 'react';
import styled from 'styled-components';

const DataTable = styled.div`
    width: 100%;

    border: 1px solid grey;
    border-radius: 0.7em;

    box-shadow: 5px 5px 5px grey;

    table {
        width: 100%;
    }

    th, td {
        padding: 0.5em;

        text-align: center;
        white-space: nowrap;
    }
`;

const ExcluirButton = styled.button`
    background-color: black;
    color: white;
    border: none;
    border-radius: 0.3em;
    padding: 0.5em 1em;
    cursor: pointer;

    &:hover {
        background-color: darkgrey;
    }
`;

export default function ExcluirProduto() {
    
    const [produtos, setProdutos] = useState([
        { id: 1, nome: 'Pasta de dente', marca: 'Colgate', categoria: 'Higiene', preco: 50, quantidade: 200, dataLote: '20/03/2024', fornecedor: 'Colgate Ltda.' },
    ]);
    const handleExcluirProduto = (id) => {
        setProdutos(produtos.filter(produto => produto.id !== id));
    };
    return (
        <section>
            <h1>Excluir produto</h1>

            <DataTable>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Produto</th>
                            <th>Marca</th>
                            <th>Categoria</th>
                            <th>Preço unitário</th>
                            <th>Quantidade em estoque</th>
                            <th>Data do lote</th>
                            <th>Fornecedor</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {produtos.map(produto => (
                            <tr key={produto.id}>
                                <td>{produto.id}</td>
                                <td>{produto.nome}</td>
                                <td>{produto.marca}</td>
                                <td>{produto.categoria}</td>
                                <td>{produto.preco}</td>
                                <td>{produto.quantidade}</td>
                                <td>{produto.dataLote}</td>
                                <td>{produto.fornecedor}</td>
                                <td>
                                    <ExcluirButton onClick={() => handleExcluirProduto(produto.id)}>
                                        Excluir
                                    </ExcluirButton>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </DataTable>
        </section>
    );
}


