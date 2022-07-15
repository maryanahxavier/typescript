import { MenuComponents, RodapeComponents } from "components";
import React from "react";
import { Outlet } from "react-router-dom";
import  * as S from "./styles";

const Layout = () => {
    return(
        <S.Layout>
            <MenuComponents />
                <main>
                    <Outlet />
                </main>
                <RodapeComponents />
        </S.Layout>
    );
};

export default Layout;