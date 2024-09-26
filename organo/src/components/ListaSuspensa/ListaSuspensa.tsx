import styles from './listasus.module.css';

export default function ListaSuspensa(props: {
    obrigatorio: boolean;
    valor: string | number | readonly string[] | undefined;
    aoAlterado: any;
    itens: any; label: string | undefined;
}) {
    return (
        <div className={styles.listaSus}>
            <label className={styles.listaLabel}>{props.label}</label>
            <select
                onChange={evento => props.aoAlterado(evento.target.value)}
                required={props.obrigatorio}
                value={props.valor}
            >
                <option value={""}></option>
                {props.itens.map((item: string | undefined) => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}
