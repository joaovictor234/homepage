import { Box } from '@mui/material';
import CardItem from './CardItem';
import styles from './informes.module.css';

const week = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

const Informes = () => {

  return (
    <div className={styles.informes_container}>
      <Box className={styles.info}>
        <h4>{week[new Date().getDay()]}, {new Date().getDay()} de {months[new Date().getMonth()]} de {new Date().getFullYear()}</h4>
        <div className={styles.info_container}>
          <CardItem
            qtd={8}
            totalValue={10000000}
            percentage={60}
            type='conline' />
          <CardItem
            qtd={12}
            totalValue={50000000}
            percentage={40}
            type='ressarcimento' />
        </div>
      </Box>
      <Box className={styles.info}>
        <h4>{months[new Date().getMonth()]}</h4>
        <div className={styles.info_container}>
          <CardItem
            qtd={8}
            totalValue={10000000}
            percentage={60}
            type='conline' />
          <CardItem
            qtd={12}
            totalValue={50000000}
            percentage={40}
            type='ressarcimento' />
        </div>
      </Box>
    </div>
  )
}

export default Informes;