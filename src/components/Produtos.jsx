import styled from 'styled-components'
import { Link } from 'react-router-dom'

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
`

const AddButton = styled.button`
    position: absolute;
    bottom: 3%;
    right: 3%;

    width: 3%;
    height: 5%;
    
    background-color: #1155EE;
    border-radius: 1em;

    padding: 0.1em;

    font-size: 1.7em;

    .active {
        background-color: red;
    }
`

export default function Produtos() {
    return(
        <>
            <h1>Produtos</h1>
            <DataTable>
                <table>
                    <tr>
                        <th>Produto</th>
                        <th>Marca</th>
                        <th>Categoria</th>
                        <th>Preço unitário</th>
                        <th>Quantidade em estoque</th>
                        {/* <th>Data de validade</th> */}
                        <th>Data do lote</th>
                        {/* <th>Linha</th>
                        <th>Data de cadastro</th>
                        <th>Data de alteração</th> */}
                        <th>Fornecedor</th>
                    </tr>
                    <tr>
                        <td>Pasta de dente</td>
                        <td>Colgato</td>
                        <td>Higiene</td>
                        <td>50</td>
                        <td>200</td>
                        {/* <td>20/07/2024</td> */}
                        <td>20/03/2024</td>
                        {/* <td>Lançamento 2024</td>
                        <td>20/04/2024</td>
                        <td>20/05/2024</td> */}
                        <td>Colgato Ltda.</td>
                    </tr>
                </table>
            </DataTable>

            <AddButton type="button"><Link to="/novo-produto" style={{color: 'white'}}>+</Link></AddButton>
        </>
    )
}