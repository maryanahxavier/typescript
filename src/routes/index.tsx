import { Route, Route } from "react-router-dom";
import {CadrastarPage,HomePage, LoginPage} from "pages";

const Rotas = () => {
    return (
        <Route>
            <Route element= {<LayoutPage  />}>
                <Route path= "/" element ={<HomePage />} />
                <Route path= "/ cadrastar" element ={<CadrastarPage />} />
                <Route path= "/ login" element ={<LoginPage />} />
                </Route>

                </Route>
    );
};

export default Rotas;