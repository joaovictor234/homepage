import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#8d8e8f",
    color: "#fff",
    margin: "1rem",
    borderRadius: 5
  },
  title: {
    fontSize: 20,
    display: "flex",
    alignItems: "center",
    '& h1': {
      marginRight: 10
    }
  },
  actionIcons: {
    display: "flex",
    alignItems: "center",
    "& svg": {
      margin: "0 10px"
    }
  }
})