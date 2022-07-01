import React from "react";
import { Icard} from "interfaces/card.interface";

import * as S from "./styles";
const Card = ({dados}: ICard) => {
    return(
        <S.Card>
            {dados && (
                <div> key= {dados.id}>
                <h4>
                    <>
                    {dados.nome} - {dados.data}
                    </>
                </h4>
                <h3>Título: {dados.título}</h3>
                <h3>Mensagem: {dados.mensagem} </h3>
                <div>
                    {dados.topico.map((topic)) => (
                        <span> key= {topic.id}> {topic.item} </span>
                    )
                </div>

                </div>
            )}
        </S.Card>
    );
};
export default Card;
