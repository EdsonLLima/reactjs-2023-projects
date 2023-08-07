export function Indicador({ titulo, valor, rodape }) {
    return (
        <div className="card">
            <div className="card-header">
                {titulo}
            </div>
            <div className="card-body text-center">
                <h5 className="card-title">{valor}</h5>
                <p className="card-text">{rodape}</p>
            </div>
        </div>
    )
}