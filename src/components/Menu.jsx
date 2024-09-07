import styled from 'styled-components';
import logo from '../assets/sigme.png';
import { Link } from 'react-router-dom';

const DivMenu = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    width: 15%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #242424;
    box-shadow: 2px 0px 5px black;

    img {
        width: 100%;
    }
`;

const ListaDoMenu = styled.ul`
    height: 90%;
    padding-left: 0;
    margin: 0;

    li {
        padding: 1em;
        list-style: none;
        text-align: left;
        color: white;
    }

    li:hover {
        background-color: #363636;
        box-shadow: 2px 0px 5px black;
    }
`;

const SubMenu = styled.ul`
    padding-left: 0em;
    margin: 0;

    li {
        padding-left: 3em;
        color: white;
    }

    li:before {
        content: '- ';
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;

    &:hover {
        text-decoration: none;
    }
`;

function Menu() {
    return (
        <DivMenu>
            <StyledLink to="/">
                <img src={logo} alt="Logo" />
            </StyledLink>
            <ListaDoMenu>
                <StyledLink to="/produtos"><li>Produtos</li></StyledLink>
                <SubMenu>
                    <StyledLink to="/novo-produto"><li>Cadastrar produto</li></StyledLink>
                    <StyledLink to="/editar-produto"><li>Editar produto</li></StyledLink>
                    <StyledLink to="/excluir-produto"><li>Excluir produto</li></StyledLink>
                </SubMenu>
                <StyledLink to="/clientes"><li>Clientes</li></StyledLink>
                <SubMenu>
                    <StyledLink to="/adicionar-clientes"><li>Cadastrar Cliente</li></StyledLink>
                    <StyledLink to="/editar-cliente"><li>Editar Cliente</li></StyledLink>
                    <StyledLink to="/deletar-clientes"><li>Excluir Cliente</li></StyledLink>
                </SubMenu>
                <StyledLink to="/fornecedores"><li>Fornecedores</li></StyledLink>
                <SubMenu>
                    <StyledLink to="/adicionar-fornecedores"><li>Cadastrar Fornecedor</li></StyledLink>
                    <StyledLink to="/editar-fornecedores"><li>Editar Fornecedor</li></StyledLink>
                    <StyledLink to="/excluir-fornecedores"><li>Excluir Fornecedor</li></StyledLink>
                </SubMenu>
            </ListaDoMenu>
        </DivMenu>
    );
}

export default Menu;
