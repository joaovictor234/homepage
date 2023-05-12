import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { ChangeEvent, Dispatch, ReactNode, SetStateAction } from "react";

import { useStyles } from "./informesFilterStyle";

interface IInformesFilter {
  selectedDate: Date | null;
  setSelectedDate: Dispatch<SetStateAction<Date | null>>;
  visualizationMode: "day" | "month" | "year";
  setVisualizationMode: Dispatch<SetStateAction<"day" | "month" | "year">>;
}

const InformesFilter = ({
  selectedDate,
  setSelectedDate,
  visualizationMode,
  setVisualizationMode,
}: IInformesFilter) => {
  const classes = useStyles();

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const handleSelectChange = (
    event: SelectChangeEvent<"day" | "month" | "year">,
    child: ReactNode
  ) => {
    setVisualizationMode(event.target.value as "day" | "month" | "year");
  };

  return (
    <div className={classes.container}>
      {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid
          container
          justifyContent="space-around"
          className={classes.dateInput}
        >
          <KeyboardDatePicker
            views={
              visualizationMode !== "day" ? [visualizationMode] : undefined
            }
            variant="inline"
            format="dd/MM/yyyy"
            id="date-picker-inline"
            label="Selecionar a data"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "mudar data",
            }}
            className={classes.formControl}
            maxDate={new Date()}
          />
        </Grid>
      </MuiPickersUtilsProvider> */}
      <FormControl className={classes.formControl}>
        <InputLabel>Formato de Visualização</InputLabel>
        <Select value={visualizationMode} onChange={handleSelectChange}>
          <MenuItem value="day">Dia</MenuItem>
          <MenuItem value="month">Mês</MenuItem>
          <MenuItem value="year">Ano</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default InformesFilter;
