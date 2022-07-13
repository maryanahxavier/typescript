import React from "react";
import {Link} from "react-router-dom";
import {Fakey} from "react-icons/fa";
import {BsfillpersonFill} from "react-icons/bs";
import {MdEmail} from "react-icons/md";

import * as S from "./styles";
import {ButtonComponents} from "componenst";

const Cadastrar = () => {
    return(
       <S.Section>
           <h1>Cadrastre-se</h1>
           <form action="cadastrar.html" method="post">
               <label htmlFor="nome" >Nome< /label>
               <div>
                   <BsfillpersonFill />
                   <input type="text" name="nome" id "nome" placeholder= "Nome" />
               </div>
               <label htmlFor="email">E-mail </label>
               <div>
                   <MdEmail />
                   <input type= "email" name= "email" id= "email" placeholder="E-mail" />
                   <label> htmlFor = "senha" >Senha< label>
               </div>
               <div>
                   <Fakey />
                   <input type= "password" name="senha" id="senha" placeholder= "Senha" />
               </div>
               <p>
                   Já possui conta? <Link to="login" >Faça o seu login</Link>
                <ButtonComponents>Salvar/</ButtonComponents>
               </p>
           </form>
       </S.Section>
    );
};


export default Cadrastar;
