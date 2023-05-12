import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { NewsContextType } from "../../../@types/NewsContextType";
import { NewsContext } from "../../../context/NewsContext";
import { INews } from "../../../interface/INews";

import { v4 } from "uuid";
import { useStyles } from "./newsBarForm";
import { TextField } from "@material-ui/core";
import { convertToAmericanData } from "../../../util/convertData";
import Button from "../../EditableBox/Button";

interface INewsBarForm {
  setToggleForm: Dispatch<SetStateAction<boolean>>;
}

const NewsBarForm = ({ setToggleForm }: INewsBarForm) => {
  const classes = useStyles();
  const { setNews } = useContext(NewsContext) as NewsContextType;
  const [description, setDescription] = useState("");
  const [data, setData] = useState(new Date());
  const [isAllInputFilled, setIsAllInputFilled] = useState(false);

  const handleDate = (event: ChangeEvent<HTMLInputElement>) => {
    const newDate = new Date(event.target.value);
    setData(newDate);
  };

  const save = () => {
    const newNews: INews = {
      id: v4(),
      description,
      data,
    };
    setNews((currentNews) => [...currentNews, newNews]);
    setToggleForm(false);
  };

  useEffect(() => {
    if (description && data) {
      setIsAllInputFilled(true);
    } else setIsAllInputFilled(false);
  }, [description, data]);

  return (
    <div className={classes.form}>
      <h3>Adicionar uma nova ocorrência</h3>
      <TextField
        label="Descrição"
        variant="outlined"
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="date"
        value={convertToAmericanData(data)}
        className={classes.inputDate}
        onChange={handleDate}
      />
      <div className={classes.buttonGroup}>
        <Button 
          variant="outlined"
          onClick={() => setToggleForm(false)}>
          Fechar
        </Button>
        <Button disabled={!isAllInputFilled} onClick={save}>
          Salvar
        </Button>
      </div>
    </div>
  );
};

export default NewsBarForm;
