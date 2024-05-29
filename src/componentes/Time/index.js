import Colaborador from '../Colaborador/Index';
import './Time.css'
import hexToRgba from 'hex-to-rgba';

const Time = ({colaboradores, time, onDeletar, onChangeCorTime, onFavoritar}) => {
    return (
        colaboradores.length > 0 && <section className='time' style={{backgroundImage: 'url(/imagens/fundo.png)',backgroundColor : hexToRgba(time.cor, '0.6')}}>
            <input 
                type='color' 
                className='input-cor' 
                value={time.cor} 
                onChange={event => onChangeCorTime(time.id, event.target.value)}
            />

            <h3 style={{ borderColor : time.cor}}>{time.nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map(colaborador => {
                    return <Colaborador 
                                key={colaborador.id}
                                id={colaborador.id}
                                nome={colaborador.nome} 
                                cargo={colaborador.cargo} 
                                imagem={colaborador.imagem} 
                                favorito={colaborador.favorito} 
                                corFundo={time.cor}
                                onDeletar={onDeletar}
                                onFavoritar={onFavoritar}
                            />
                })}
            </div>
        </section>
    )
}

export default Time;