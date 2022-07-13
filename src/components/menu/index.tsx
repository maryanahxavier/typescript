simport React from "react";
import { FcReuse} from "react-icons/fc";
import * as S from "./styles";
import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <S.Cabecalho>
            <picture>
                <Link to="/">
                 <FcRecuse />
                </Link>
            </picture>
            <nav> 
                <ul>
                  <li> 
                 <Link to="/login">login</ Link>
                </li>
                <li>
                    <Link to="/cadastrar">Cadrastar</Link>
                </li>
                </ul>
            </nav>
        </S.Cabecalho>
    );
};


export default Menu;