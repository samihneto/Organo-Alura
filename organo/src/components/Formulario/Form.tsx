import Botao from '../Botao/Botao';
import CampoTexto from '../CampoTexto/CampoTexto';
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa';
import styles from './form.module.css';

export default function Form() {

    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        ' Inovação e Gestão'
        ]

    const aoSalvar = (evento: React.FormEvent) => {
        evento.preventDefault()
        console.log('Form foi submetido')
    }    

    return (
        <section className={styles.formulario}>
            <form className={styles.campoForm} onSubmit={aoSalvar} >
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome" />
                <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto obrigatorio={false} label="Imagem" placeholder="Digite o endereço da imagem" />
                <ListaSuspensa itens={times} label="Time" />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}
