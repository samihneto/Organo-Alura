import { useState } from "react";
import Banner from "../../components/Banner/Banner";
import Form from "../../components/Formulario/Form";
import styles from '../../global.module.css';
import Time from "../../components/Time/Time";
import Rodape from "../../components/Rodape/Rodape";

export default function index() {

  const times = [
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
    },
    {
      nome: 'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2',
    },
    {
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8',
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#D86EBF',
      corSecundaria: '#FAE5F5',
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FEBA05',
      corSecundaria: '#FFF5D9',
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF',
    }
  ]

  const [colaboradores, setColaboradores] = useState<{ nome: string; cargo: string; imagem: string; time: string; }[]>([]);

  const aoNovoColaboradorCadastrado = (colaborador: { nome: string; cargo: string; imagem: string; time: string; }) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <body className={styles.global}>
      <Banner />
      <main>
        <Form times={times.map(time => time.nome)} aoColaboradorCadastrado={(colaborador) => aoNovoColaboradorCadastrado(colaborador)} />

        {times.map((time) => (
          <Time 
            key={time.nome} 
            nome={time.nome} 
            corPrimaria={time.corPrimaria} 
            corSecundaria={time.corSecundaria}
            colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)} 
          />
        ))}
        
      </main>
      <Rodape />
    </body>
  )
}
