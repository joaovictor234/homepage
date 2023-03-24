import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutlineOutlined';
import WarningAmberIcon from '@mui/icons-material/WarningAmberOutlined';
import InfoIcon from '@mui/icons-material/InfoOutlined';
import CloseIcon from '@mui/icons-material/Close';
import { getTime } from '../../../util/getTime';
import { Occurrence } from '../../../interface/Occurrence';
import styles from './occurrence.module.css';

interface IOccurrences extends Occurrence {
  editMode: boolean,
  occurences: Occurrence[],
  setOccurences: Dispatch<SetStateAction<Occurrence[]>>
}

const OccurrenceMessage = ({ id, title, time, typeOccurrence, editMode, occurences, setOccurences }: IOccurrences) => {
  const [occurenceBackgroundColor, setOccurenceBackgroundColor] = useState('');

  useEffect(() => {
    switch (typeOccurrence) {
      case 'alert':
        setOccurenceBackgroundColor('#EF4444')
        break;
      case 'info':
        setOccurenceBackgroundColor('#08678c')
        break;
      case 'warning':
        setOccurenceBackgroundColor('#F2A30F')
        break;
    }
  }, [typeOccurrence])

  const deleteOccurence = () => {
    const filteredOccurences = occurences.filter(occurence => occurence.id !== id);
    setOccurences(filteredOccurences)
  }

  return (
    <div
      className={styles.occurrences}
      style={{ backgroundColor: occurenceBackgroundColor }}>
      {typeOccurrence === 'alert' && <ErrorOutlineIcon />}
      {typeOccurrence === 'warning' && <WarningAmberIcon />}
      {typeOccurrence === 'info' && <InfoIcon />}
      <span>{getTime(time)}</span>
      <span>{title}</span>
      {editMode && <button onClick={deleteOccurence}><CloseIcon /></button>}
    </div>
  )
}

export default OccurrenceMessage;