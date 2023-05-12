import { Dispatch, SetStateAction } from "react";
import CardItem from "../CardItem";
import { useStyles } from "./informesContentStyles";
import InformesFilter from "../Filter";

interface IInformesContent {
  selectedDate: Date | null;
  setSelectedDate: Dispatch<SetStateAction<Date | null>>;
  visualizationMode: "day" | "month" | "year";
  setVisualizationMode: Dispatch<SetStateAction<"day" | "month" | "year">>;
}

const InformesContent = ({
  selectedDate,
  setSelectedDate,
  visualizationMode,
  setVisualizationMode,
}: IInformesContent) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <InformesFilter
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        visualizationMode={visualizationMode}
        setVisualizationMode={setVisualizationMode}
      />
      <div className={classes.content}>
        <CardItem qtd={8} total={10000000} percentage={60} type="conline" />
        <CardItem
          qtd={12}
          total={50000000}
          percentage={40}
          type="ressarcimento"
        />
      </div>
    </div>
  );
};

export default InformesContent;
