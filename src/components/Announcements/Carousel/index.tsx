import { Dispatch, SetStateAction, useEffect, useState } from "react";

import { Announcement } from "../../../interface/Announcement";

import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import { useStyles } from "./announcementsCarousel";
import { useMediaQuery } from "@mui/material";

interface ICarousel {
  index: number;
  setIndex: Dispatch<SetStateAction<number>>;
  announcementsList: Announcement[];
}

const AnnouncementsCarousel = ({
  index,
  setIndex,
  announcementsList,
}: ICarousel) => {
  const classes = useStyles();
  const [selectedAnnouncement, setSelectedAnnouncement] =
    useState<Announcement>();

  const matcheSize = useMediaQuery("(min-width:1150px)");

  useEffect(() => {
    setSelectedAnnouncement(announcementsList[index]);
  }, [index, announcementsList]);

  const handlePassIndex = (action: "inc" | "dec") => {
    if (action === "inc") {
      if (index + 1 === announcementsList.length) {
        setIndex(0);
      } else setIndex(index + 1);
    } else {
      if (index - 1 < 0) {
        setIndex(announcementsList.length - 1);
      } else setIndex(index - 1);
    }
  };

  const handleSetIndex = (value: number) => {
    setIndex(value);
  };

  return (
    <div className={classes.container}>
      <div className={matcheSize ? classes.carouselLm : classes.carousel}>
        <button
          className={classes.carouselButton}
          onClick={() => handlePassIndex("dec")}
        >
          <NavigateBeforeIcon />
        </button>
        <div className={classes.carouselContent}>
          {selectedAnnouncement && (
            <div className={classes.carouselContent}>
              <h4 className={classes.title}>{selectedAnnouncement.title}</h4>
              <p className={classes.description}>
                {selectedAnnouncement.content}
              </p>
            </div>
          )}
        </div>
        <button
          className={classes.carouselButton}
          onClick={() => handlePassIndex("inc")}
        >
          <NavigateNextIcon />
        </button>
      </div>
      <div className={classes.selectButtonsContainer}>
        {announcementsList.length > 0 &&
          announcementsList.map((a, i) => (
            <button
              key={i}
              className={
                i === index
                  ? `${classes.selectButton} ${classes.selectedButton}`
                  : classes.selectButton
              }
              onClick={() => handleSetIndex(i)}
            ></button>
          ))}
      </div>
    </div>
  );
};

export default AnnouncementsCarousel;
