import Banner from "../../components/Banner/Banner";
import Form from "../../components/Formulario/Form";
import styles from '../../global.module.css';

export default function index() {
  return (
    <body className={styles.global}>
        <Banner />
        <main>
            <Form />
        </main>
    </body>
  )
}
