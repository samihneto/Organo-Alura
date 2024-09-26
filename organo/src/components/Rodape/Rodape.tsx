import styles from './rodape.module.css';
import fb from '../../imgs/fb.png'
import ig from '../../imgs/ig.png'
import logo from '../../imgs/logo.png'
import tw from '../../imgs/tw.png'

export default function Rodape() {
  return (
    <footer className={styles.footer}>
        <section>
            <ul>
                <li>
                    <a href="facebook.com" target="_blank">
                        <img src={fb} alt="" />
                    </a>
                </li>
                <li>
                    <a href="twitter.com" target="_blank">
                        <img src={tw} alt="" />
                    </a>
                </li>
                <li>
                    <a href="instagram.com" target="_blank">
                        <img src={ig} alt="" />
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <img src={logo} alt="" />
        </section>
        <section>
            <p>
                Desenvolvido por Samir Neto.
            </p>
        </section>
    </footer>
  )
}
