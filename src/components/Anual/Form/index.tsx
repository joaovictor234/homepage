import { Button, TextField } from "@mui/material";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { v4 } from "uuid";
import { Yearly } from "../../../interface/Yearly";
import styles from './anualform.module.css';

interface IAnualForm {
  doYouKnowList: Yearly[];
  setDoYouKnowList: Dispatch<SetStateAction<Yearly[]>>;
  setOpenModalForm: Dispatch<SetStateAction<boolean>>;
}

const AnualForm = ({ doYouKnowList, setDoYouKnowList, setOpenModalForm }: IAnualForm) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isAllInputFilled, setIsAllInputFilled] = useState(false);

  const addNewYearlyInformation = () => {
    const newYearly: Yearly = {
      id: v4(),
      title,
      content
    }
    setDoYouKnowList([...doYouKnowList, newYearly]); 
    setOpenModalForm(false);
  }

  useEffect(() => {
    if (title && content)
      setIsAllInputFilled(true);
    else
      setIsAllInputFilled(false);
  }, [title, content]);

  return (
    <form className={styles.form} onSubmit={e => e.preventDefault()}>
      <h3>Adicionar uma nova Informação</h3>
      <TextField
        className={styles.input}
        onChange={e => setTitle(e.target.value)}
        label="Título"
        multiline
        rows={2} />
      <TextField
        className={styles.input}
        onChange={e => setContent(e.target.value)}
        label="Conteúdo"
        multiline
        rows={5} />
      <div className={styles.button_group}>
        <Button 
          className={styles.button_outlined}
          variant="outlined"
          onClick={() => setOpenModalForm(false)}>Fechar</Button>
        <Button 
          className={styles.button}
          onClick={isAllInputFilled ? addNewYearlyInformation : ()=>{}}
          variant={isAllInputFilled ? "contained" : "text"}
          disabled={!isAllInputFilled}
        >Adicionar</Button>
      </div>
    </form>
  )
}

export default AnualForm;