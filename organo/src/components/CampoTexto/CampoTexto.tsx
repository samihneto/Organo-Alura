import styles from './campotexto.module.css';

export default function CampoTexto(props: {
    aoAlterado: any;
    valor: string | number | readonly string[] | undefined;
    placeholder: string | undefined; label: string; obrigatorio: boolean;
}) 
{    
    const aoDigitado = (evento: { target: { value: any; }; }) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className={styles.campotexto}>
            <label className={styles.label}>{props.label}</label>
            <input className={styles.input} value={props.valor} onChange={aoDigitado} placeholder={props.placeholder} required={props.obrigatorio}  />
        </div>
    )
}
