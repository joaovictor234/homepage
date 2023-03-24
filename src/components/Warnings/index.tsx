import SettingsIcon from '@mui/icons-material/Settings';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import OccurrenceMessage from './Message';
import { Occurrence } from '../../interface/Occurrence';
import { Modal } from '@mui/material';
import OccurrenceForm from './Form';
import { v4 } from 'uuid';
import styles from './occurrences.module.css';
import Button from '../Button';

const Warnings = () => {
  const [editMode, setEditMode] = useState(false);
  const [ocurrences, setOcurrences] = useState<Occurrence[]>([
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
  const [openModalForm, setOpenModalForm] = useState(false);
  const [openConfirmRemoveOccurrencesModal, setOpenConfirmRemoveOccurrencesModal] = useState(false);
  const [swipeOptions, setSwipeOptions] = useState(false);

  return <div className={styles.warnings_container}>
    <div className={styles.warnings_header}>
      <h4>Ocorrências</h4>
      {
        editMode ?
          <div>
            <Button
              className={styles.occurences_button}
              onClick={() => setEditMode(false)}>
              <ArrowBackIcon /> Retornar
            </Button>
            <Button 
 
              className={styles.occurences_button}
              onClick={() => setOpenConfirmRemoveOccurrencesModal(true)}>
              <ClearAllIcon /> Remover Todos
            </Button>
            <Button

              className={styles.occurences_button}
              onClick={() => setOpenModalForm(true)}>
              <AddIcon /> Adicionar
            </Button>
          </div> :
          <Button
            className={swipeOptions ? `${styles.occurences_button} ${styles.remove_option_button}` : `${styles.occurences_button}`}
            onClick={() => {
              setSwipeOptions(true)
              setEditMode(true)
            }}>
            <SettingsIcon /> Opções
          </Button>
      }
    </div>
    <div className={styles.messages}>
      {
        ocurrences.length !== 0 ? ocurrences.map(w =>
          <OccurrenceMessage
            key={w.id}
            id={w.id}
            editMode={editMode}
            time={w.time}
            title={w.title}
            typeOccurrence={w.typeOccurrence}
            occurences={ocurrences}
            setOccurences={setOcurrences} />) :
          <span className={styles.occurence_span}>Não há ocorrências</span>
      }
    </div>

    {
      openModalForm &&
      <Modal
        open={openModalForm}
        className={styles.modal}
        onClose={() => setOpenModalForm(false)}>
        <OccurrenceForm
          occurrences={ocurrences}
          setOccurrences={setOcurrences}
          setOpenModal={setOpenModalForm} />
      </Modal>
    }

    {
      openConfirmRemoveOccurrencesModal &&
      <Modal 
        open={openConfirmRemoveOccurrencesModal}
        className={styles.modal}
        onClose={() => setOpenConfirmRemoveOccurrencesModal(false)}>
          <div className={styles.confirm_modal}>
            <h4>Remover todas as ocorrências?</h4>
            <div>
              <Button 
                onClick={() => setOpenConfirmRemoveOccurrencesModal(false)}>Fechar</Button>
              <Button 
  
                className={styles.occurences_button}
                onClick={() => {
                  setOcurrences([])
                  setOpenConfirmRemoveOccurrencesModal(false)
                }}>Remover Todos</Button>
            </div>
          </div>
      </Modal>
    }
  </div>
}

export default Warnings