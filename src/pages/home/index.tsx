import React from "react";
import carrousel from "assets/img/carrousel.png";
import * as S from "./styles";
import { CardComponet } from "components";
import dados from "services/dados";


const Home = ( ) => {
    return (
        <S.Home>
            <picture>
                <img scr={carrousel} alt= "Imagens principais" />
            </picture>
            <aside>
                {dados && dados.map((item) => <CardComponet dados= {item} />)}
            </aside>
        </S.Home>
    );
};

export default Home;