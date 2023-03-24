import { Button, TextField } from "@mui/material";
import { ChangeEvent, Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import { NewsContextType } from "../../../@types/NewsContextType";
import { NewsContext } from "../../../context/NewsContext";
import { INews } from "../../../interface/INews";
import { v4 } from 'uuid';
import styles from './newsform.module.css';
import { convertData } from "../../../util/convertData";

interface INewsForm {
  setToggleForm: Dispatch<SetStateAction<boolean>>;
}

const NewsForm = ({setToggleForm}: INewsForm) => {
  const { news, setNews } = useContext(NewsContext) as NewsContextType;
  const [description, setDescription] = useState('');
  const [data, setData] = useState<Date>(new Date());
  const [allInputFilled, setAllInputFilled] = useState(false);

  const handleDate = (event: ChangeEvent<HTMLInputElement>) => {
    const newDate = new Date(event.target.value);
    setData(newDate);
  }

  const save = () => {
    const newNews: INews = {
      id: v4(),
      description, 
      data
    }
    setNews([...news, newNews]);
    setToggleForm(false);
  }

  useEffect(() => {
    if(description && data) {
      setAllInputFilled(true)
    } else setAllInputFilled(false)
  }, [description, data])

  return (
    <form className={styles.form}>
      <h3>Adicionar uma nova ocorrência</h3>
      <TextField
        label="Descrição"
        variant="outlined"
        className={styles.input} 
        onChange={e => setDescription(e.target.value)}/>
      <input 
        type="date" 
        value={convertData(data)}
        className={styles.input_date}
        onChange={handleDate}
        />
      <div className={styles.button_group}>
        <Button 
          className={styles.button} 
          variant="outlined">Fechar</Button>
        <Button 
          className={styles.button} 
          disabled={!allInputFilled}
          onClick={save}
          variant={allInputFilled ? 'contained' : 'text'}>Salvar</Button>
      </div>
    </form>
  )
}

export default NewsForm;