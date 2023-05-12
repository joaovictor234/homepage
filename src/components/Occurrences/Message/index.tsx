import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Occurrence } from '../../../interface/Occurrence';

import ErrorIcon from '@mui/icons-material/Error';
import WarningIcon from '@mui/icons-material/Warning';
import InfoIcon from '@mui/icons-material/Info';
import CloseIcon from '@mui/icons-material/Close';

import { getTime } from '../../../util/getTime';
import { useStyles } from './occurrenceMessageStyle';

interface IOccurrencesMessage extends Occurrence {
  editMode: boolean;
  occurrences: Occurrence[];
  setOccurrences: Dispatch<SetStateAction<Occurrence[]>>;
}

const OccurrenceMessage = ({ id, title, time, occurrenceType, editMode, occurrences, setOccurrences }: IOccurrencesMessage) => {
  const classes = useStyles();
  const [occurrenceBackgroundColor, setOccurrenceBackgroundColor] = useState("");

  useEffect(() => {
    switch (occurrenceType) {
      case "alert":
        setOccurrenceBackgroundColor("#ef4444");
        break;
      case "info":
        setOccurrenceBackgroundColor("#08678c");
        break;
      case "warning":
        setOccurrenceBackgroundColor("#f2a30f")
        break;
    }
  }, [occurrenceType])

  const handleDeleteOccurrence = () => {
    const filteredOccurrences = occurrences.filter(occurrence => occurrence.id !== id);
    setOccurrences(filteredOccurrences);
  }

  return (
    <div
      className={classes.occurrences}
      style={{ border: `1px solid ${occurrenceBackgroundColor}`, color: occurrenceBackgroundColor }}>
      {occurrenceType === "alert" && <ErrorIcon />}
      {occurrenceType === "warning" && <WarningIcon />}
      {occurrenceType === "info" && <InfoIcon />}

      <span>{getTime(time)}</span>
      <span>{title}</span>
      {editMode && <button onClick={handleDeleteOccurrence}><CloseIcon /></button>}
    </div>
  )
}

export default OccurrenceMessage;