import './Campo.css'

const Campo = ({valor, label, placeholder, obrigatorio = false, type = 'text', setValor}) => {

    const alterar = (e) => {
        setValor(e.target.value)
    }

    return (
        <div className={`campo campo-${type}`}>
            <label>{label}</label>
            <input 
                value={valor} 
                onChange={alterar} 
                required={obrigatorio} 
                placeholder={placeholder} 
                type={type}
            />
        </div>
    )
}

export default Campo;