import { Card } from "@mui/material";
import { convertMoneyToBRL } from '../../../util/convertMoneyToBRL';
import styles from './carditem.module.css';

interface ICardItem {
  qtd: number,
  totalValue: number,
  percentage: number,
  type: 'conline' | 'ressarcimento'
}

const CardItem = ({ qtd, totalValue, percentage, type }: ICardItem) => {

  return (
    <Card className={type === 'conline' ? `${styles.carditem} ${styles.conline}` : `${styles.carditem} ${styles.ressarcimento}`}>
      <div className={styles.header}>
        <h6>{type === 'conline' ? 'Compras Online' : 'Ressarcimento'}</h6>
        <div>
          Quantidade
          <span>{qtd}</span>
        </div>
      </div>
      <div className={styles.data}>
        <div>
          <p>Valor total</p>
          <span>R$ {convertMoneyToBRL(totalValue)}</span>
        </div>
        <div>
          <p>Percentagem</p>
          <span>{percentage} %</span>
        </div>
      </div>
    </Card>
  )
}

export default CardItem;