import { ReactNode } from 'react';
import styles from './botao.module.css';

export default function Botao(props: {
    children: ReactNode;
}) {
    return (
        <button className={styles.botao} >
            {props.children}
        </button>
  )
}
