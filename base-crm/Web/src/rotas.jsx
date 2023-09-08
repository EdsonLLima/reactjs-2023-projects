import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Dashboard } from "./pages/dashboard/dashboard"
import { Negocios } from "./pages/negocio/negocios"


export function Rotas() {
    return <>
        <BrowserRouter>
            <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/" element={<Dashboard />} />
                <Route path="/negocios" element={<Negocios />} />
            </Routes>
        </BrowserRouter>
    </>


}