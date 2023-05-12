import { Dispatch, SetStateAction } from "react";

import { useStyles } from "./confirmRemoveItemsModalStyes";

import Button from "../Button";

import ClearAllIcon from '@mui/icons-material/ClearAll';
import { Modal } from "@mui/material";

interface IConfirmRemoveItemsModal {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  onRemoveList: () => void;
}

const ConfirmRemoveItems = ({
  open,
  setOpen,
  onRemoveList,
}: IConfirmRemoveItemsModal) => {
  const classes = useStyles();

  return (
    <Modal open={open} onClose={() => setOpen(false)} className={classes.modal}>
      <div className={classes.confirmModal}>
        <h4 className={classes.title}>Remover todos?</h4>
        <div className={classes.buttons}>
          <Button variant="outlined" onClick={() => setOpen(false)}>
            Fechar
          </Button>
          <Button onClick={onRemoveList}>
            <ClearAllIcon />
            Remover Todos
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmRemoveItems;
