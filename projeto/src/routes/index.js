import { Route, Routes } from "react-router-dom";
import App from "../App";
import Contato from "../pages/Contato";


export default function AllRoutes() {
    return (<div>
        <Routes>
            <Route path="/" element={<App />}/>
            <Route path="/contato" element={<Contato />}/>
        </Routes>
    </div>);
}