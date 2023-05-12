import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  occurrences: {
    padding: 5,
    paddingLeft: 10,
    color: "#fff",
    display: "flex",
    alignItems: "center",
    borderRadius: 20,
    margin: 10,
    width: "fit-content",
    boxShadow: "0 0 5px rgba(0,0,0,.3)",
    borderWidth: 2,
    "& svg": {
      marginRight: 5,
      fontSize: 20
    },
    "& span": {
      margin: "0 5px"
    },
    "& span:nth-child(3)": {
      borderLeft: "1px solid",
      paddingLeft: 10,
    },
    "& button": {
      background: "none",
      border: "none",
      padding: 0,
      paddingLeft: 5,
      margin: 0,
      color: "inherit",
      cursor: "pointer"
    }
  }
})