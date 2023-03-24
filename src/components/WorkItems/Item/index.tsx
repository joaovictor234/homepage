import { useEffect, useState } from 'react';
import CircleIcon from '@mui/icons-material/CircleOutlined';
import { IItem } from '../../../interface/IItem';
import styles from './item.module.css';

const colors = ['#00C7E8', '#E5322C', '#C5C6C7']

const Item = ({ id, type, title, assignedTo, state, tags, status }: IItem) => {
  const [color, setColor] = useState('');

  useEffect(() => {
    switch(status) {
      case 'running':
        setColor(colors[0]);
        break;
      case 'blocked':
        setColor(colors[1]);
        break;
      case 'new':
        setColor(colors[2]);
        break;
    }
  }, [status])

  return (
    <div className={styles.item_container} style={{backgroundColor: color, color: status === "blocked" ? "#fff" : ""}}>
      <div className={styles.header}>
        <p>{type}</p>
        <p><CircleIcon />{state}</p>
      </div>
      <p className={styles.title}>{title}</p>
      <p className={styles.assigned}>{assignedTo}</p>
      {
        tags &&
        <div className={styles.tags}>
          {tags.map(tag => <p className={styles.tag}>{tag}</p>)}
        </div>
      }
    </div>
  )
}

export default Item;