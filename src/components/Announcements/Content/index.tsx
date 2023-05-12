import { Dispatch, SetStateAction } from "react";

import { Announcement } from "../../../interface/Announcement";

import { useStyles } from "./announcementsContentStyle";
import AnnouncementsDeleteButtonsContainer from "../DeleteButtons";
import AnnouncementsCarousel from "../Carousel";

interface IAnnouncementsContent {
  index: number;
  setIndex: Dispatch<SetStateAction<number>>;
  editMode: boolean;
  announcementsList: Announcement[];
  setAnnouncementsList: Dispatch<SetStateAction<Announcement[]>>;
}

const AnnouncementsContent = ({
  index,
  setIndex,
  editMode,
  announcementsList,
  setAnnouncementsList,
}: IAnnouncementsContent) => {
  const classes = useStyles();

  return (
    <div className={classes.announcements}>
      <div>
        <img
          src={
            announcementsList.length === 0
              ? "./images/bored.jpg"
              : "./images/think.jpg"
          }
          alt="Bonequinho em dúvida"
          className={classes.image}
        />
      </div>
      <div className={classes.carouselContainer}>
        {editMode && (
          <AnnouncementsDeleteButtonsContainer
            index={index}
            setIndex={setIndex}
            announcementsList={announcementsList}
            setAnnouncementsList={setAnnouncementsList}
          />
        )}
        {announcementsList.length > 0 ? (
          <AnnouncementsCarousel
            index={index}
            setIndex={setIndex}
            announcementsList={announcementsList}
          />
        ) : (
          <p>Não há comunicados.</p>
        )}
      </div>
    </div>
  );
};

export default AnnouncementsContent;
