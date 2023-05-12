import { ChangeEvent, Dispatch, SetStateAction } from "react";
import {
  FormControl,
  FormControlLabel,
  FormGroup,
  MenuItem,
  Select,
} from "@material-ui/core";

import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import ErrorIcon from '@mui/icons-material/Error';
import WarningIcon from '@mui/icons-material/Warning';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import InfoIcon from '@mui/icons-material/Info';

import { useStyles } from "./occurrencesOptionsStyle";
import { AlertCheckbox, InfoCheckbox, WarningCheckbox } from "./CustomCheckBox";

interface IOccurrencesOptions {
  setToggleAlert: Dispatch<SetStateAction<boolean>>;
  setToggleWarning: Dispatch<SetStateAction<boolean>>;
  setToggleInfo: Dispatch<SetStateAction<boolean>>;
  filterTime: number;
  setFilterTime: Dispatch<SetStateAction<number>>;
}

const OccurrencesOptions = ({
  setToggleAlert,
  setToggleWarning,
  setToggleInfo,
  filterTime,
  setFilterTime,
}: IOccurrencesOptions) => {
  const classes = useStyles();

  const handleChangeTime = (event: ChangeEvent<{ value: unknown }>) => {
    setFilterTime(event.target.value as number);
  };

  return (
    <div className={classes.container}>
      <FormGroup className={classes.filterContainer}>
        <FormControlLabel
          className={classes.checkboxButton}
          control={
            <AlertCheckbox
              icon={<ErrorIcon />}
              checkedIcon={<ErrorOutlineIcon />}
            />
          }
          label="Alertas"
          onChange={() => setToggleAlert((currentValue) => !currentValue)}
        />
        <FormControlLabel
          className={classes.checkboxButton}
          control={
            <WarningCheckbox
              icon={<WarningIcon />}
              checkedIcon={<WarningAmberIcon />}
            />
          }
          label="Avisos"
          onChange={() => setToggleWarning((currentValue) => !currentValue)}
        />
        <FormControlLabel
          className={classes.checkboxButton}
          control={
            <InfoCheckbox
              icon={<InfoIcon />}
              checkedIcon={<InfoOutlinedIcon />}
            />
          }
          label="Informações"
          onChange={() => setToggleInfo((currentValue) => !currentValue)}
        />
      </FormGroup>
      <FormControl className={classes.filterContainer}>
        <Select
          value={filterTime}
          className={classes.select}
          onChange={handleChangeTime}
        >
          <MenuItem value={0}>Hoje</MenuItem>
          <MenuItem value={7}>7 Dias</MenuItem>
          <MenuItem value={15}>15 Dias</MenuItem>
          <MenuItem value={30}>30 Dias</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default OccurrencesOptions;
