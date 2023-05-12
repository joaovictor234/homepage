import { useMediaQuery } from "@material-ui/core";
import { useState } from "react";
import Announcements from "../../components/Announcements";
import { useStyles } from "./homepage";
import Informes from "../../components/Informes";
import NewsBar from "../../components/NewsBar";
import Occurrences from "../../components/Occurrences";
import Header from "../../components/Header";

const Homepage = () => {
  const classes = useStyles();

  const matches1400 = useMediaQuery("(max-width:1400px)");

  const [admin, setAdmin] = useState(true);

  return (
    <div className={classes.container}>
      <Header admin={admin} setAdmin={setAdmin} />
      <div
        className={`${classes.mainContent} ${
          matches1400 && classes.mainContent1024
        }`}
      >
        <div className={classes.informations}>
          <Occurrences admin={admin} />
          <Informes />
        </div>
        <div>
          <NewsBar />
        </div>
      </div>
      <Announcements admin={admin} />
    </div>
  );
};

export default Homepage;
