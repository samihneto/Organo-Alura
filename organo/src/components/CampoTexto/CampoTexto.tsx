import styles from './campotexto.module.css';

export default function CampoTexto(props: {
    placeholder: string | undefined; label: string; obrigatorio: boolean;
}) {
    return (
        <div className={styles.campotexto}>
            <label className={styles.label}>{props.label}</label>
            <input className={styles.input} placeholder={props.placeholder} required={props.obrigatorio} />
        </div>
    )
}
