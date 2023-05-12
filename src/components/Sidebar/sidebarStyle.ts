import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  sidebar: {
    color: "#fff",
    backgroundColor: "#8d8e8f",
    display: "flex",
    minWidth: 200,
    flexDirection: "column"
  },
  logo: {
    borderRight: "1px solid rgba(0,0,0,.01)"
  },
  tools: {
    padding: "1em"
  },
  toolsText: {
    borderBottom: "1px solid #fff"
  },
  list: {
    padding: 5,
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    "& i": {
      marginRight: "1rem"
    }
  },
  listItems: {
    padding: 5,
    margin: 5,
    borderRadius: 5,
    transition: "200ms",
    "&:hover": {
      backgroundColor: "#595959"
    }
  },
  chat: {
    display: "flex",
    justifyContent: "flex-end",
    "& i": {
      border: "1px solid #97ed8a",
      color: "#97ed8a",
      padding: "0.5rem",
      borderRadius: 20,
      transition: "200ms"
    },
    "& i:hover": {
      backgroundColor: "#97ed8a",
      color: "#000"
    }
  }
})