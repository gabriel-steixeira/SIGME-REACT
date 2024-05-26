import styled from 'styled-components'
import logo from '../assets/sigme.png'
import { Link } from 'react-router-dom'

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
`

const ListaDoMenu = styled.ul`
    height: 90%;

    padding-left: 0;

    li {
        padding: 1em;

        list-style: none;
        text-align: left;

        color: white;
    }

    li:hover {
        /*background-color: #363636;*/
        box-shadow: 2px 0px 5px black
    }
`

const SubMenu = styled.ul`
    padding-left: 0em;

    li {
        padding-left: 3em;

        color: white;
    }

    li:before {
        content: '- '
    }
`

function Menu() {
    return (
        <>
            <DivMenu>
                <Link to="/" ><img src={logo} /></Link>
                <ListaDoMenu>
                    <Link to="/produtos"><li>Produtos</li></Link>
                    <SubMenu>
                        <Link to='/novo-produto'><li>Cadastrar produto</li></Link>
                    </SubMenu>
                </ListaDoMenu>
            </DivMenu>
        </>
    )
}

export default Menu