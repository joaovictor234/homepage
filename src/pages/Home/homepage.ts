import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  container: {
    height: "100%",
    display: "row",
    flexDirection: "column",
  },
  mainContent: {
    display: "grid",
    gridTemplateColumns: "50% 50%"
  },
  mainContent1024: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  informations: {
    display: "flex",
    flexDirection: "column",
  }
})