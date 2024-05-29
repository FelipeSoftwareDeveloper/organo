import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import './Colaborador.css'

const Colaborador = ({ id, nome, cargo, imagem, favorito, corFundo, onDeletar, onFavoritar}) => {

    const Favoritar = _ => {
        onFavoritar(id)
    }

    const propsFavorito = {
        size : 25,
        onClick : Favoritar,
        color : '#ff0000'
    }
    return (
        <div className='colaborador'>
            <AiFillCloseCircle 
                size={25} 
                className='deletar' 
                onClick={ () => onDeletar(id)} 
            />
            <div className='cabecalho' style={{backgroundColor : corFundo}}>
                <img src={imagem} alt=''/>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
                <div className='favoritar'>
                    {favorito 
                        ? <AiFillHeart { ...propsFavorito } /> 
                        : <AiOutlineHeart { ...propsFavorito } />
                    }
                </div>
            </div>
        </div>
    )

}

export default Colaborador;