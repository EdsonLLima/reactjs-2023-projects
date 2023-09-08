import { Menu } from "../../components/menu/Menu"
import { Busca } from "../../components/busca/busca"
import DataTable from "react-data-table-component"
import dados from "../../services/dados.json"

/**
 * 
 * 1:10:30 -- começar a organizar a api do WhatsApp
 * usando função.
 */

export function Negocios() {

    const columns = [
        {
            name: 'Código',
            selector: row => row.id_negocio,
            sortable: true,
            width: "120px",
        },
        {
            name: 'Descrição',
            selector: row => row.descricao,
            sortable: true,
            compact: true
        },
        {
            name: 'Etapa',
            selector: row => row.etapa,
            sortable: true
        },
        {
            name: 'Empresa',
            selector: row => <>
                <p className="mb-1">{row.empresa}</p>
                <p className="mb-1">Contato: {row.contato}</p>
            </>,
            sortable: true,
            compact: true
        },
        {
            name: 'Dados Contato',
            selector: row => <>
                <p className="mb-1">E-mail: {row.email}</p>
                <p className="mb-1">Fone: {row.fone}</p>
            </>,
            sortable: true
        },
        {
            name: 'Vl. Estimado',
            selector: row => row.valor,
            sortable: true,
            right: true,
            format: row => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(row.valor)
        },
        {
            cell: (row) => <>
                <button className="btn btn-success"><i className="bi bi-whatsapp"></i></button>
                <button className="btn btn-primary ms-3"><i className="bi bi-pencil-square"></i></button>
                <button className="btn btn-danger ms-3"><i className="bi bi-trash3-fill"></i></button>
            </>,
            width: "200px",
            right: true
        }
    ];

    const paginationOptions = {
        rowsPerPageText: 'Registros por página',
        rangeSeparatorText: 'de',
        selectAllRowsItem: true,
        selectAllRowsItemText: 'Todos',
    };



    return (
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <div className="col-auto col-md-2 col-lx-2 px-sm-2 px-0">
                    <Menu page="negocios" />
                </div>

                <div className="col py-3 me-3">
                    <div className="mb-5">
                        <Busca texto="Busca por negócios" />
                    </div>

                    <div className="bg-white p-4 rounded-4 border">

                        <div className="d-flex justify-content-between mb-3">
                            <div className="d-inline-flex">
                                <h2>Negócios</h2>
                                <div className="form-control ms-4">
                                    <select name="etapa" id="etapa">
                                        <option value="0">Etapa</option>
                                        <option value="Prospecção">Prospecção</option>
                                        <option value="Proposta">Proposta</option>
                                    </select>
                                </div>
                            </div>

                            <button className="btn btn-primary ms-4">
                                <i className="bi bi-plus-lg me-2"></i>
                                Novo Negócio
                            </button>
                        </div>

                        <DataTable
                            columns={columns}
                            data={dados}
                            pagination={true}
                            paginationComponentOptions={paginationOptions}
                            noDataComponent={"Nenhum registro encontrado."}
                        />

                    </div>

                    <div className="row">


                    </div>
                </div>
            </div>

        </div>
    )

}