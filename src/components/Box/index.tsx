//icons
import SettingsIcon from '@mui/icons-material/Settings';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import AddIcon from '@mui/icons-material/Add';
//hooks
import { Dispatch, SetStateAction, useState } from 'react';
//components
import { Modal } from '@mui/material';
//styles
import styles from './box.module.css';

interface IBox<T> {
  editMode: boolean;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  toggleModalForm: boolean;
  setToggleModalForm: Dispatch<SetStateAction<boolean>>;
  title: string;
  list: T[];
  setList: Dispatch<SetStateAction<T[]>>;
  children: JSX.Element;
  formChildren: JSX.Element;
}

const Box = <T extends {}>({
  editMode, setEditMode,
  toggleModalForm, setToggleModalForm,
  title,
  list, setList,
  children, formChildren
}: IBox<T>) => {
  const [toggleModalConfirmRemoveItems, setToggleModalConfirmRemoveItems] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3>{title}</h3>
        <div>
          {
            editMode ?
              <>
                <button
                  className={styles.button}
                  onClick={() => setEditMode(false)}>
                  <ArrowBackIcon />Retornar
                </button>
                <button
                  className={styles.button}
                  onClick={() => setToggleModalConfirmRemoveItems(true)}>
                  <ClearAllIcon />Remover Todos
                </button>
                <button
                  className={styles.button}
                  onClick={() => setToggleModalForm(true)}>
                  <AddIcon />Adicionar
                </button>
              </> :
              <button
                className={styles.button}
                onClick={() => setEditMode(true)}>
                <SettingsIcon />Opções
              </button>
          }
        </div>
      </div>

      {children}

      <Modal
        className={styles.modal}
        open={toggleModalForm}
        onClose={() => setToggleModalForm(false)}>
        {formChildren}
      </Modal>

      <Modal
        className={styles.modal}
        open={toggleModalConfirmRemoveItems}
        onClose={() => setToggleModalConfirmRemoveItems(false)}>
        <div className={styles.confirm_modal}>
          <h4>Remover todas as ocorrências?</h4>
          <div>
            <button
              className={styles.outlined_button}
              onClick={() => setToggleModalConfirmRemoveItems(false)}>Fechar</button>
            <button
              className={styles.button}
              onClick={() => {
                setList([])
                setToggleModalConfirmRemoveItems(false)
              }}>Remover Todos</button>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default Box