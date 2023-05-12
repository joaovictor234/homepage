import { Card } from '@mui/material';
import { convertMoneyToBRL } from '../../../util/convertMoneyToBRL';
import { useStyles } from './cardItemStyle';

interface ICardItem {
  qtd: number,
  total: number,
  percentage: number,
  type: "conline" | "ressarcimento"
}

const CardItem = ({ qtd, total, percentage, type }: ICardItem) => {
  const classes = useStyles();

  return (
    <Card className={type === "conline" ? 
      `${classes.container} ${classes.conline}` : 
      `${classes.container} ${classes.ressarcimento}`}>
      <div className={classes.header}>
        <h6>{type === "conline" ? "Compras Online" : "Ressarcimento"}</h6>
        <div>
          Quantidade
          <span>{qtd}</span>
        </div>
      </div>
      <div className={classes.data}>
        <div>
          <p>Valor Total</p>
          <span>R$ {convertMoneyToBRL(total)}</span>
        </div>
        <div>
          <p>Porcentagem</p>
          <span>{percentage} %</span>
        </div>
      </div>
    </Card>
  )
}

export default CardItem;