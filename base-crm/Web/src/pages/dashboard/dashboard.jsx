import { Menu } from "../../components/menu/Menu";
import { Busca } from "../../components/busca/busca";
import { Indicador } from "../../components/indicador/indicador";
import { Grafico } from "../../components/grafico/grafico";

export function Dashboard() {
    return (
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <div className="col-auto col-md-3 col-lx-2 px-sm-2 px-0">
                    <Menu page="dashboard" />
                </div>

                <div className="col py-3 me-3">
                    <div className="mb-5">
                        <Busca texto="Busca por negócios" />
                    </div>

                    <div className="d-flex justify-content-between">
                        <h1>Dashboard...</h1>
                        <button className="btn btn-primary ms-4">Atualizar</button>
                    </div>
                    <div className="row">
                        <div className="col-md-3 mt-3">
                            <Indicador
                                titulo="Negocios do mês"
                                valor="R$ 19.000,00"
                                rodape="12 atividades" />
                        </div>
                        <div className="col-md-3 mt-3">
                            <Indicador
                                titulo="Atuvudades para hoje"
                                valor="6 atividades"
                                rodape="R$ 3.150,00" />
                        </div>
                        <div className="col-12 mt-5">
                            <Grafico
                                titulo="Vendas"
                                chartType="Line" />
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}