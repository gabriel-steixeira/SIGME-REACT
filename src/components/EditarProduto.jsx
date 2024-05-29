import './EditarProduto.css';
import { InputGroup, Button } from './Formularios.jsx';

export default function EditarProduto() {
    return (
        <section>
            <h1>Editar produto</h1>

            <form>
                <InputGroup className="input-group" label="Nome do produto:" placeholder="Digite o nome do produto" />
                <InputGroup className="input-group" label="Marca:" placeholder="Digite a marca do produto" />
                <InputGroup className="input-group" label="Categoria:" placeholder="Digite a categoria do produto" />
                <InputGroup className="input-group" label="Preço unitário:" placeholder="10.50" />
                <InputGroup className="input-group" label="Quantidade em estoque:" placeholder="100" />
                <InputGroup className="input-group" label="Data do lote:" placeholder="25/05/2024" />
                <InputGroup className="input-group" label="Fornecedor:" placeholder="Digite o fornecedor" />

                <Button texto="Salvar Alterações" />
            </form>
        </section>
    );
}
