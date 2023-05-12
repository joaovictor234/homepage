import { useState } from "react";

import HomeBox from "../Box";
import InformesContent from "./Content";

const months = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

const Informes = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [visualizationMode, setVisualizationMode] = useState<
    "day" | "month" | "year"
  >("day");
  let title = "Sem resultados";

  if (
    selectedDate &&
    selectedDate.getDate() &&
    selectedDate.getMonth() &&
    selectedDate.getFullYear()
  ) {
    switch (visualizationMode) {
      case "day":
        title = `Resultados para ${selectedDate.getDate()} de ${
          months[selectedDate.getMonth()]
        } de ${selectedDate.getFullYear()}`;
        break;
      case "month":
        title = `Resultados para ${
          months[selectedDate.getMonth()]
        } de ${selectedDate.getFullYear()}`;
        break;
      case "year":
        title = `Resultados para ${selectedDate.getFullYear()}`;
    }
  }

  return (
    <HomeBox title={title}>
      <InformesContent
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        visualizationMode={visualizationMode}
        setVisualizationMode={setVisualizationMode}
      />
    </HomeBox>
  );
};

export default Informes;
