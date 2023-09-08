import './busca.css'

export function Busca({ texto }) {
    return (
        <div className="input-group">
            <input type="text" className="form-control busca" placeholder={texto} />
            <button className="btn btn-primary" type="button" id="button-addon2">Buscar</button>
        </div>
    )
}