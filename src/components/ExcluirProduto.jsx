import React, { useState } from 'react';
import './ExcluirProduto.css';

export default function ExcluirProduto() {
    const [produtos, setProdutos] = useState([
        { id: 1, nome: 'Pasta de dente', marca: 'Colgate', categoria: 'Higiene', preco: 50, quantidade: 200, dataLote: '20/03/2024', fornecedor: 'Colgate Ltda.' },
        { id: 2, nome: 'Shampoo', marca: 'Pantene', categoria: 'Cabelo', preco: 25, quantidade: 150, dataLote: '15/02/2024', fornecedor: 'Procter & Gamble' },
        { id: 3, nome: 'Condicionador', marca: 'L\'Oreal', categoria: 'Cabelo', preco: 30, quantidade: 180, dataLote: '10/01/2024', fornecedor: 'L\'Oreal' },
        { id: 4, nome: 'Creme Dental', marca: 'Sensodyne', categoria: 'Higiene', preco: 45, quantidade: 220, dataLote: '05/04/2024', fornecedor: 'GSK' },
        { id: 5, nome: 'Sabonete', marca: 'Dove', categoria: 'Higiene', preco: 20, quantidade: 300, dataLote: '25/06/2024', fornecedor: 'Unilever' },
        { id: 6, nome: 'Desodorante', marca: 'Nivea', categoria: 'Higiene', preco: 28, quantidade: 250, dataLote: '12/03/2024', fornecedor: 'Beiersdorf' },
        { id: 7, nome: 'Perfume', marca: 'Chanel', categoria: 'Fragrância', preco: 120, quantidade: 80, dataLote: '01/07/2024', fornecedor: 'Chanel' },
        { id: 8, nome: 'Loção Corporal', marca: 'Neutrogena', categoria: 'Hidratação', preco: 40, quantidade: 100, dataLote: '18/05/2024', fornecedor: 'Johnson & Johnson' },
        { id: 9, nome: 'Esfoliante Facial', marca: 'Clean & Clear', categoria: 'Tratamento', preco: 35, quantidade: 120, dataLote: '22/02/2024', fornecedor: 'Johnson & Johnson' },
        { id: 10, nome: 'Máscara de Cabelo', marca: 'Kerastase', categoria: 'Cabelo', preco: 90, quantidade: 60, dataLote: '30/04/2024', fornecedor: 'L\'Oreal' },
        { id: 11, nome: 'Base Facial', marca: 'Maybelline', categoria: 'Maquiagem', preco: 60, quantidade: 90, dataLote: '15/06/2024', fornecedor: 'L\'Oreal' },
        { id: 12, nome: 'Corretivo', marca: 'Revlon', categoria: 'Maquiagem', preco: 50, quantidade: 110, dataLote: '20/03/2024', fornecedor: 'Revlon' },
        { id: 13, nome: 'Blush', marca: 'MAC', categoria: 'Maquiagem', preco: 70, quantidade: 75, dataLote: '05/07/2024', fornecedor: 'Estée Lauder' },
        { id: 14, nome: 'Esmalte', marca: 'Sally Hansen', categoria: 'Unhas', preco: 15, quantidade: 200, dataLote: '10/05/2024', fornecedor: 'Coty' },
        { id: 15, nome: 'Removedor de Esmalte', marca: 'Impala', categoria: 'Unhas', preco: 12, quantidade: 150, dataLote: '25/03/2024', fornecedor: 'Impala' },
        { id: 16, nome: 'Creme Anti-Idade', marca: 'Olay', categoria: 'Cuidados com a Pele', preco: 85, quantidade: 80, dataLote: '02/06/2024', fornecedor: 'Procter & Gamble' },
        { id: 17, nome: 'Protetor Solar', marca: 'Nivea', categoria: 'Cuidados com a Pele', preco: 45, quantidade: 200, dataLote: '15/07/2024', fornecedor: 'Beiersdorf' },
        { id: 18, nome: 'Tônico Facial', marca: 'Neutrogena', categoria: 'Cuidados com a Pele', preco: 50, quantidade: 130, dataLote: '01/06/2024', fornecedor: 'Johnson & Johnson' },
        { id: 19, nome: 'Creme Hidratante', marca: 'Natura', categoria: 'Hidratação', preco: 35, quantidade: 160, dataLote: '12/05/2024', fornecedor: 'Natura' },
        { id: 20, nome: 'Desodorante Spray', marca: 'Old Spice', categoria: 'Higiene', preco: 30, quantidade: 180, dataLote: '22/06/2024', fornecedor: 'Procter & Gamble' },
        { id: 21, nome: 'Shampoo Anti-Caspa', marca: 'Head & Shoulders', categoria: 'Cabelo', preco: 40, quantidade: 220, dataLote: '10/07/2024', fornecedor: 'Procter & Gamble' },
        { id: 22, nome: 'Condicionador Hidratante', marca: 'Dove', categoria: 'Cabelo', preco: 45, quantidade: 190, dataLote: '18/04/2024', fornecedor: 'Unilever' },
        { id: 23, nome: 'Creme para Mãos', marca: 'Bepantol', categoria: 'Hidratação', preco: 25, quantidade: 250, dataLote: '05/03/2024', fornecedor: 'Bepantol' },
        { id: 24, nome: 'Esfoliante Corporal', marca: 'L\'Oreal', categoria: 'Tratamento', preco: 40, quantidade: 130, dataLote: '20/04/2024', fornecedor: 'L\'Oreal' },
        { id: 25, nome: 'Máscara Facial', marca: 'The Body Shop', categoria: 'Tratamento', preco: 60, quantidade: 70, dataLote: '30/06/2024', fornecedor: 'The Body Shop' },
        { id: 26, nome: 'Perfume Feminino', marca: 'Dolce & Gabbana', categoria: 'Fragrância', preco: 150, quantidade: 40, dataLote: '12/05/2024', fornecedor: 'Dolce & Gabbana' },
        { id: 27, nome: 'Perfume Masculino', marca: 'Hugo Boss', categoria: 'Fragrância', preco: 140, quantidade: 55, dataLote: '07/06/2024', fornecedor: 'Hugo Boss' },
        { id: 28, nome: 'Limpador de Pincéis', marca: 'Real Techniques', categoria: 'Maquiagem', preco: 20, quantidade: 130, dataLote: '20/07/2024', fornecedor: 'Real Techniques' },
        { id: 29, nome: 'Hidratante Labial', marca: 'Nivea', categoria: 'Cuidados com a Pele', preco: 15, quantidade: 220, dataLote: '28/05/2024', fornecedor: 'Beiersdorf' },
        { id: 30, nome: 'Protetor Solar Facial', marca: 'La Roche-Posay', categoria: 'Cuidados com a Pele', preco: 75, quantidade: 90, dataLote: '01/07/2024', fornecedor: 'La Roche-Posay' },
    ]);

    const handleExcluirProduto = (id) => {
        setProdutos(produtos.filter(produto => produto.id !== id));
    };

    return (
        <div className="container">
            <h1 className="title">Excluir produto</h1>

            <div className="data-table">
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
                                <td>{produto.preco.toFixed(2)}</td>
                                <td>{produto.quantidade}</td>
                                <td>{produto.dataLote}</td>
                                <td>{produto.fornecedor}</td>
                                <td>
                                    <button className="delete-button" onClick={() => handleExcluirProduto(produto.id)}>
                                        Excluir
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
