import styles from './listasus.module.css';

export default function ListaSuspensa(props: {
    itens: any; label: string | undefined;
}) {
    return (
        <div className={styles.listaSus}>
            <label className={styles.listaLabel}>{props.label}</label>
            <select>
                {props.itens.map((item: string | undefined) => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}
