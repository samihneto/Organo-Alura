import Colaborador from '../Colaborador/Colaborador';
import styles from './time.module.css';

export default function Time(props: {
    colaboradores: any;
    corPrimaria: string;
    corSecundaria: string;
    nome: string | undefined;
}) {
    const css = { backgroundColor: props.corSecundaria };

    return (
        (props.colaboradores.lenght > 0) &&<section className={styles.time} style={css}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className={styles.colaboradores}>
                {props.colaboradores.map((colaborador: {
                    imagem: any; nome: any; cargo: string | undefined;
                }) => <Colaborador
                        corDeFundo={props.corPrimaria}
                        key={colaborador.nome}
                        img={colaborador.imagem}
                        nome={colaborador.nome}
                        cargo={colaborador.cargo}
                    />)}
            </div>
        </section>
    );
}