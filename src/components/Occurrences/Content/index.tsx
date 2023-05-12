import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Occurrence } from "../../../interface/Occurrence";
import { getDateMinusDays } from "../../../util/getDateMinusDays";
import { sortItems } from "../../../util/sortItemsByTime";
import OccurrenceMessage from "../Message";
import OccurrencesOptions from "../Options";
import { useStyles } from "./occurrencesContentStyles";

interface IOccurrenceContent {
  occurrences: Occurrence[];
  setOccurrences: Dispatch<SetStateAction<Occurrence[]>>;
  editMode: boolean;
}

const OccurrenceContent = ({
  occurrences,
  setOccurrences,
  editMode,
}: IOccurrenceContent) => {
  const classes = useStyles();
  const [isThereOccurrences, setIsThereOccurrences] = useState(false);

  const [toggleAlert, setToggleAlert] = useState(true);
  const [toggleWarning, setToggleWarning] = useState(true);
  const [toggleInfo, setToggleInfo] = useState(true);
  const [filterTime, setFilterTime] = useState(7);

  const [filteredOccurrences, setFilteredOccurrences] = useState<Occurrence[]>(
    []
  );

  useEffect(() => {
    if (filteredOccurrences.length === 0) setIsThereOccurrences(true);
    else setIsThereOccurrences(false);
  }, [filteredOccurrences.length]);

  useEffect(() => {
    let occurr: Occurrence[] = [];
    let alertOccurr: Occurrence[] = [];
    let warningOccurr: Occurrence[] = [];
    let infoOccurr: Occurrence[] = [];

    if (toggleAlert) {
      alertOccurr = occurrences.filter((o) => o.occurrenceType === "alert");
      occurr = [...occurr, ...alertOccurr];
    }
    if (toggleWarning) {
      warningOccurr = occurrences.filter((o) => o.occurrenceType === "warning");
      occurr = [...occurr, ...warningOccurr];
    }
    if (toggleInfo) {
      infoOccurr = occurrences.filter((o) => o.occurrenceType === "info");
      occurr = [...occurr, ...infoOccurr];
    }
    occurr = occurr.sort((a, b) => sortItems(a.time, b.time));
    occurr = occurr.filter(
      (oc) => oc.time.getTime() > getDateMinusDays(new Date(), filterTime)
    );
    setFilteredOccurrences(occurr);
  }, [filterTime, toggleAlert, toggleWarning, toggleInfo, occurrences.length, occurrences]);

  return (
    <>
      <OccurrencesOptions
        filterTime={filterTime}
        setFilterTime={setFilterTime}
        setToggleInfo={setToggleInfo}
        setToggleAlert={setToggleAlert}
        setToggleWarning={setToggleWarning}
      />
      <div
        className={isThereOccurrences ? classes.noMessages : classes.messages}
      >
        {filteredOccurrences.length !== 0 &&
          filteredOccurrences.map((o) => (
            <OccurrenceMessage
              key={o.id}
              id={o.id}
              editMode={editMode}
              time={o.time}
              title={o.title}
              occurrenceType={o.occurrenceType}
              occurrences={occurrences}
              setOccurrences={setOccurrences}
            />
          ))}
        {isThereOccurrences && (
          <span className={classes.occurrenceSpan}>Não há ocorrências</span>
        )}
      </div>
    </>
  );
};

export default OccurrenceContent;
