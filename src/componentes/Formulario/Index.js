import "./Formulario.css";
import Campo from "../Campo/Campo";
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa";
import Botao from "../Botao/Botao";
import { useState } from "react";
import { BiHide, BiShow  } from "react-icons/bi";

const Formulario = ({setColaborador, times, cadastrarTime}) => {

  const aoSalvar = (e) => {
    e.preventDefault()
    setColaborador({nome, cargo, imagem, time})
    setNome('')
    setCargo('')
    setImagem('')
    setTime('')
  }

  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')
  const [nomeTime, setNomeTime] = useState('')
  const [corTime, setCorTime] = useState('')
  const [showForms, setShowForms] = useState(true)

  const escondeForms = (evento) => {
    evento.preventDefault()
    setShowForms(oldValue => !oldValue)
  }

  return (
    <section className="formulario">
      <div className="botao-formulario">
        <form onSubmit={escondeForms}>
          <Botao>
            {
              showForms
              ? <BiHide /> 
              : <BiShow  />
            }
          </Botao>
        </form>
      </div>
      {
        showForms 
        ? <div className="forms">
            <form onSubmit={aoSalvar}>
              <h2>Preencha os dados para criar o card do colaborador.</h2>
              <Campo 
                obrigatorio={true} 
                label="Nome" 
                placeholder="Digite o seu nome"
                valor={nome}
                setValor={valor => setNome(valor)} />
              <Campo 
                obrigatorio={true} 
                label="Cargo" 
                placeholder="Digite o seu cargo"
                valor={cargo}
                setValor={valor => setCargo(valor)} />
              <Campo 
                label="Imagem" 
                placeholder="Informe o caminho da imagem"
                valor={imagem}
                setValor={valor => setImagem(valor)} />
              <ListaSuspensa 
                obrigatorio={true} 
                label="Times" 
                itens={times}
                valor={time}
                setValor={valor => setTime(valor)} />
                
              <Botao>Criar Card</Botao>
            </form>
            <form onSubmit={(evento) => {
              evento.preventDefault()
              cadastrarTime({nome: nomeTime, cor: corTime})
              setNomeTime('')
              setCorTime('')
            } }>
              <h2>Preencha os dados para criar um novo time.</h2>
              <Campo 
                obrigatorio
                label="Nome" 
                placeholder="Digite o nome do time."
                valor={nomeTime}
                setValor={valor => setNomeTime(valor)} />
              <Campo 
                obrigatorio
                label="Cor" 
                placeholder="Digite a cor do time."
                valor={corTime}
                setValor={valor => setCorTime(valor)} 
                type="color"
              />
                
              <Botao>Criar Time</Botao>
            </form>
          </div>
      : <div></div>
      }
    </section>
  );
};

export default Formulario;
