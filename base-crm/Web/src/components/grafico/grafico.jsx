import Chart from "react-google-charts";


export function Grafico({ titulo, chartType, legenda }) {
    const dados = [
        ["Mês", "Valor"],
        ["01", 1000],
        ["02", 1170],
        ["03", 660],
        ["04", 1030],
    ];

    const options = {
        legend: legenda ? {} : { position: "none" }
    }


    return (
        <div className="card">
            <div className="card-header">
                {titulo}
            </div>
            <div className="card-body text-center">
                <Chart chartType={chartType}
                    data={dados}
                    width="100%"
                    height="350px"
                    options={options}
                    legendToggle={true} />
            </div>

        </div>
    )
}