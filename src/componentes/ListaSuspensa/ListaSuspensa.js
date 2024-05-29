import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select 
                required={props.obrigatorio}
                onChange={valor => props.setValor(valor.target.value)}
                valor={props.valor}>
                    <option>Selecione um time</option>
                {props.itens.map(item => <option key={item.id} value={item.id}>{item.nome}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa