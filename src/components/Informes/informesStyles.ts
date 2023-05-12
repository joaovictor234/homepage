import { Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  container: {
    backgroundColor: "#fff",
    borderRadius: 5,
    margin: "0 10px",
    boxShadow: "0 0 10px rgba(0,0,0,.2)"
  },
  header: {
    backgroundColor: "#a6193c",
    color: "#fff",
    padding: 10,
    marginBottom: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    display: "flex",
    alignItems: "center",
    '& h4': {
      fontSize: 17,
      padding: 0,
      margin: 0
    },
    '& svg': {
      marginLeft: 10,
      transition: "300ms",
      borderRadius: "50%"
    },
    '& svg:hover': {
      backgroundColor: "#f68b1f"
    }
  },
  info: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  },
  info1440: {
    display: "flex",
    justifyContent: "space-between",
    margin: "0 10px"
  }
})