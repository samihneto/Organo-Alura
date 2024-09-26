import styles from './colab.module.css';

export default function Colaborador(props: { img: string | undefined; nome: string | undefined; cargo: string | undefined; corDeFundo: any; }) {
    return (
        <div className={styles.colaborador}>
            <div className={styles.cabecalho} style={{ backgroundColor: props.corDeFundo }} >
                <img src={props.img} alt='' />
            </div>
            <div className={styles.rodape} >
                <h4>{props.nome}</h4>
                <h5>{props.cargo}</h5>
            </div>
        </div>
    )
}
