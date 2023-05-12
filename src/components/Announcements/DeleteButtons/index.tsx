import { Dispatch, SetStateAction } from "react";
import { Announcement } from "../../../interface/Announcement";
import { useStyles } from "./deleteButtonsContainerStyle";

import CloseIcon from '@mui/icons-material/Close';

interface IAnnouncementsDeleteButtonsContainer {
  index: number;
  setIndex: Dispatch<SetStateAction<number>>;
  announcementsList: Announcement[];
  setAnnouncementsList: Dispatch<SetStateAction<Announcement[]>>;
}

const AnnouncementsDeleteButtonsContainer = ({
  index,
  setIndex,
  announcementsList,
  setAnnouncementsList,
}: IAnnouncementsDeleteButtonsContainer) => {
  const classes = useStyles();

  const deleteAnnouncementById = (id: string, i: number) => {
    if (i === index) {
      const updatedAnnouncements: Announcement[] = announcementsList.filter(
        (announcements) => announcements.id !== id
      );
      setAnnouncementsList(updatedAnnouncements);
      setIndex(i - 1);
    } else {
      setIndex(i);
    }
  };

  if (announcementsList.length === 0) return <></>;

  return (
    <div className={classes.container}>
      <div className={classes.deleteButtons}>
        <h6 className={classes.deleteButtonsSubtitle}>
          Clique em um dos botões para deletar um comunicado
        </h6>
        <div>
          {announcementsList &&
            announcementsList.map((announcement, i) => (
              <button
                key={i}
                onClick={() => deleteAnnouncementById(announcement.id, i)}
                className={
                  index === i
                    ? `${classes.button} ${classes.activeIndex}`
                    : `${classes.button} ${classes.deleteButton}`
                }
              >
                {index === i ? <CloseIcon /> : i + 1}{" "}
              </button>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AnnouncementsDeleteButtonsContainer;
