import { TextField } from "@mui/material";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { v4 } from "uuid";
import { Announcement } from "../../../interface/Announcement";
import Button from "../../EditableBox/Button";
import Form from "../../Form";
import { useStyles } from "./announcementsFormStyle";

interface IAnnouncementsForm {
  setAnnouncementsList: Dispatch<SetStateAction<Announcement[]>>;
  setOpenModalForm: Dispatch<SetStateAction<boolean>>;
}

const AnnouncementsForm = ({
  setAnnouncementsList,
  setOpenModalForm,
}: IAnnouncementsForm) => {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isAllInputFilled, setIsAllInputFilled] = useState(false);

  const addNewAnnouncements = () => {
    const newAnnouncements: Announcement = {
      id: v4(),
      title,
      content,
    };
    setAnnouncementsList((currentAnnouncements) => [
      ...currentAnnouncements,
      newAnnouncements,
    ]);
    setOpenModalForm(false);
  };

  useEffect(() => {
    if (title && content) setIsAllInputFilled(true);
    else setIsAllInputFilled(false);
  }, [title, content]);

  return (
    <Form title="Adicionar uma nova informação">
      <TextField
        className={classes.input}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        label="Título"
        multiline
        rows={2}
      />
      <TextField
        className={classes.input}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        multiline
        rows={5}
      />
      <div className={classes.buttonGroup}>
        <Button variant="outlined" onClick={() => setOpenModalForm(false)}>
          Fechar
        </Button>
        <Button
          onClick={isAllInputFilled ? addNewAnnouncements : () => {}}
          disabled={!isAllInputFilled}
        >
          Adicionar
        </Button>
      </div>
    </Form>
  );
};

export default AnnouncementsForm;
