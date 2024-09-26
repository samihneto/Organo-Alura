import { useState } from 'react';
import Botao from '../Botao/Botao';
import CampoTexto from '../CampoTexto/CampoTexto';
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa';
import styles from './form.module.css';

export default function Form(props: {
    times: any; aoColaboradorCadastrado: (arg0: { nome: string; cargo: string; imagem: string; time: string; }) => void; 
}) {



    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento: React.FormEvent) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado ({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section className={styles.formulario}>
            <form className={styles.campoForm} onSubmit={aoSalvar} >
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={(valor: string) => setNome(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    aoAlterado={(valor: string) => setCargo(valor)}
                />
                <CampoTexto
                    obrigatorio={false}
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={(valor: string) => setImagem(valor)}
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label="Time"
                    itens={props.times}
                    valor={time}
                    aoAlterado={(valor: string) => setTime(valor)}            
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}
