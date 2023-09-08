import { Menu } from "../../components/menu/Menu";
import { Busca } from "../../components/busca/busca";
import { Indicador } from "../../components/indicador/indicador";
import { Grafico } from "../../components/grafico/grafico";
import { useEffect, useState } from "react";


export function Dashboard() {
    const [dadosIndicadores, setDadosIndicadores] = useState({})
    const [dadosAnual, setDadosAnual] = useState([])


    function MontarIndicadores() {
        //GET no server
        setDadosIndicadores({
            valor_mes: 500000,
            qtd_mes: 600,
            valor_dia: 18500,
            qtd_dia: 125
        })
    }

    function MontarGrafAnual() {
        //GET no server
        setDadosAnual(
            [
                ["Mês", "Valor"],
                ["01", 1000],
                ["02", 1170],
                ["03", 660],
                ["04", 1030],
                ["05", 800],
                ["06", 780],
                ["07", 1400],
            ]
        )
    }

    function MontarDashboard() {
        MontarIndicadores();
        MontarGrafAnual();
    }

    useEffect(() => {
        MontarDashboard();
    }, []);

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
                        <button onClick={MontarDashboard} className="btn btn-primary ms-4">Atualizar</button>
                    </div>
                    <div className="row">
                        <div className="col-md-3 mt-3">
                            <Indicador
                                titulo="Negócios do mês"
                                valor={new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(dadosIndicadores.valor_mes)}
                                rodape={` ${dadosIndicadores.qtd_mes} atividades`} />
                        </div>
                        <div className="col-md-3 mt-3">
                            <Indicador
                                titulo="Atividades para hoje"
                                valor={`${dadosIndicadores.qtd_dia} atividades`}
                                rodape={new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(dadosIndicadores.valor_dia)} />
                        </div>
                        <div className="col-12 mt-5">
                            <Grafico
                                titulo="Vendas"
                                chartType="Line"
                                dados={dadosAnual}
                            />
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}