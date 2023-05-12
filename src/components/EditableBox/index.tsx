import { Dispatch, SetStateAction, useState } from "react";

import SettingsIcon from '@mui/icons-material/Settings';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import AddIcon from '@mui/icons-material/Add';

import Button from "./Button";
import ConfirmRemoveItems from "./ConfirmRemoveItemsModal";

import { useStyles } from "../../styles/boxStyles";
import { IHomeBox } from "../../interface/IHomeBox";
import { Modal } from "@mui/material";

interface IFunctionalBox<T> extends IHomeBox {
  editMode: boolean;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  toggleModalForm: boolean;
  setToggleModalForm: Dispatch<SetStateAction<boolean>>;
  list: T[];
  setList: Dispatch<SetStateAction<T[]>>;
  formChildren: JSX.Element;
}

const EditableBox = <T extends {}>({
  editMode,
  setEditMode,
  toggleModalForm,
  setToggleModalForm,
  title,
  list,
  setList,
  children,
  formChildren,
}: IFunctionalBox<T>) => {
  const classes = useStyles();
  const [toggleModalConfirmRemoveItems, setToggleModalConfirmRemoveItems] =
    useState(false);

  const handleRemoveList = () => {
    setList([]);
    setToggleModalConfirmRemoveItems(false);
  };

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h3 className={classes.title}>{title}</h3>
        <div className={classes.headerButtons}>
          {editMode ? (
            <>
              <Button onClick={() => setEditMode(false)}>
                <ArrowBackIcon />
                Retornar
              </Button>
              <Button
                disabled={list.length === 0}
                onClick={
                  list.length > 0
                    ? () => setToggleModalConfirmRemoveItems(true)
                    : () => {}
                }
              >
                <ClearAllIcon />
                Remover Todos
              </Button>
              <Button onClick={() => setToggleModalForm(true)}>
                <AddIcon />
                Adicionar
              </Button>
            </>
          ) : (
            <Button onClick={() => setEditMode(true)}>
              <SettingsIcon />
              Opções
            </Button>
          )}
        </div>
      </div>

      {children}

      <Modal
        open={toggleModalForm}
        className={classes.modal}
        onClose={() => setToggleModalForm(false)}
      >
        {formChildren}
      </Modal>

      <ConfirmRemoveItems
        open={toggleModalConfirmRemoveItems}
        setOpen={setToggleModalConfirmRemoveItems}
        onRemoveList={handleRemoveList}
      />
    </div>
  );
};

export default EditableBox;
