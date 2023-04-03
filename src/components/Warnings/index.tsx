import { useEffect, useState } from 'react';
//components
import OccurrenceMessage from './Message';
import { Occurrence } from '../../interface/Occurrence';
import OccurrenceForm from './Form';
import Box from '../Box';
//utils
import { v4 } from 'uuid';
//styles
import styles from './occurrences.module.css';

const Warnings = () => {
  const [editMode, setEditMode] = useState(false);
  const [thereIsNoWarnings, setThereIsNoWarnings] = useState(false);
  const [occurrences, setOccurrences] = useState<Occurrence[]>([
    {
      id: v4(),
      title: 'O serviço está desativado temporariamente',
      time: new Date(),
      typeOccurrence: 'alert'
    },
    {
      id: v4(),
      title: 'Um longo aviso',
      time: new Date(),
      typeOccurrence: 'warning'
    },
    {
      id: v4(),
      title: 'Informação desnecessariamente pequena que preenche mais espaço do que devia.',
      time: new Date(),
      typeOccurrence: 'info'
    }
  ])
  const [toggleModalForm, setToggleModalForm] = useState(false);

  useEffect(() => {
    if (occurrences.length === 0)
      setThereIsNoWarnings(true);
    else
      setThereIsNoWarnings(false);
  }, [occurrences.length]);

  return <Box
    title="Ocorrências"
    list={occurrences}
    setList={setOccurrences}
    editMode={editMode}
    setEditMode={setEditMode}
    toggleModalForm={toggleModalForm}
    setToggleModalForm={setToggleModalForm}
    children={
      <div className={thereIsNoWarnings ? styles.no_messages : styles.messages}>
        {
          occurrences.length !== 0 ? occurrences.map(w =>
            <OccurrenceMessage
              key={w.id}
              id={w.id}
              editMode={editMode}
              time={w.time}
              title={w.title}
              typeOccurrence={w.typeOccurrence}
              occurences={occurrences}
              setOccurences={setOccurrences} />) :
            <span className={styles.occurence_span}>Não há ocorrências</span>
        }
      </div>
    }
    formChildren={<OccurrenceForm
      occurrences={occurrences}
      setOccurrences={setOccurrences}
      setToggleModalForm={setToggleModalForm} />}
  />
}

export default Warnings