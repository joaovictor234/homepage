import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  root: {
    backgroundColor: "#fff",
  },
  appBar: {
    backgroundColor: "#a6193c",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  },
  tab: {
    '& span': {
      color: "#fff"
    }
  },
  content: {
    display: "flex",
    flexDirection: "row"
  }
});