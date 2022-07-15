import { Route, Routes } from "react-router-dom";
import { CadastrarPage, HomePage, LoginPage,LayoutPage} from "pages";

const Rotas = () => {
    return (
        <Routes>
            <Route element={<LayoutPage />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/cadastrar" element={<CadastrarPage />} />
                <Route path="/login" element={<LoginPage />} />
            </Route>

        </Routes>
    );
};

export default Rotas;