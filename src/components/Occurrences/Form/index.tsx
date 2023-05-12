import {
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { v4 } from "uuid";

import { Occurrence } from "../../../interface/Occurrence";
import { convertToEnUSDataWithHoursAndMinutes } from "../../../util/convertData";
import Button from "../../EditableBox/Button";
import { useStyles } from "./occurrenceFormStyles";

interface IOccurrencesForm {
  setToggleModalForm: Dispatch<SetStateAction<boolean>>;
  setOccurrences: Dispatch<SetStateAction<Occurrence[]>>;
}

const OccurrencesForm = ({
  setToggleModalForm,
  setOccurrences,
}: IOccurrencesForm) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(new Date());
  const [occurrenceType, setOccurrenceType] = useState("");
  const [isAllDataFilled, setIsAllDataFilled] = useState(false);
  const [selectedColor, setSelectedColor] = useState("");

  const classes = useStyles({ selectedColor });

  const handleSelect = (
    event: ChangeEvent<{ name?: string | undefined; value: unknown }>
  ) => {
    setOccurrenceType(event.target.value as string);
  };

  const handleDate = () => (date: Date | null) => {
    if (date) setDate(date);
  };

  useEffect(() => {
    if (title && occurrenceType) setIsAllDataFilled(true);
    else setIsAllDataFilled(false);
  }, [title, occurrenceType]);

  useEffect(() => {
    switch (occurrenceType) {
      case "alert":
        setSelectedColor("#ef4444");
        break;
      case "info":
        setSelectedColor("#08678c");
        break;
      case "warning":
        setSelectedColor("#f2a30f");
        break;
      default:
        setSelectedColor("");
    }
  }, [occurrenceType]);

  const addOccurrences = () => {
    const newOccurrence = {
      id: v4(),
      title,
      time: date,
      occurrenceType,
    };
    setOccurrences((prevOccurrences) => [newOccurrence, ...prevOccurrences]);
    setToggleModalForm(false);
  };

  return (
    <div className={classes.form}>
      <h3 className={classes.title}>Adicionar uma ocorrência</h3>
      <TextField
        rows={2}
        multiline
        label="Descrição"
        className={classes.input}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        onClick={handleDate}
        type="datetime-local"
        className={classes.inputDateTime}
        value={convertToEnUSDataWithHoursAndMinutes(date)}
      />
      <FormControl className={classes.input}>
        <InputLabel>Tipo da ocorrência</InputLabel>
        <Select
          value={occurrenceType}
          onChange={handleSelect}
          className={classes.select}
        >
          <MenuItem value="">
            <ListItemText
              primary="Selecione o tipo"
              className={classes.selectFirstItem}
            />
          </MenuItem>
          <MenuItem
            value="alert"
            className={classes.selectItem}
            style={{ backgroundColor: "#ef4444" }}
          >
            <ListItemText primary="Alerta" />
          </MenuItem>
          <MenuItem
            value="warning"
            className={classes.selectItem}
            style={{ backgroundColor: "#f2a30f" }}
          >
            <ListItemText primary="Aviso" />
          </MenuItem>
          <MenuItem
            value="info"
            className={classes.selectItem}
            style={{ backgroundColor: "#08678c" }}
          >
            <ListItemText primary="Informação" />
          </MenuItem>
        </Select>
      </FormControl>

      <div className={classes.buttons}>
        <Button 
          variant="outlined"
          onClick={() => setToggleModalForm(false)}>
          <>Fechar</>
        </Button>
        <Button
          disabled={!isAllDataFilled}
          onClick={isAllDataFilled ? addOccurrences : () => {}}
        >
          <>Adicionar</>
        </Button>
      </div>
    </div>
  );
};

export default OccurrencesForm;
