import React from "react";

import * as S from "./style";
import { CardComponents } from "components";
import dados from "services/dados";


const Home = ( ) => {
    return (
        <S.Home>
            
            <aside>
                {dados && dados.map((item) => <CardComponents dados= {item} />)}
            </aside>
        </S.Home>
    );
};

export default Home;