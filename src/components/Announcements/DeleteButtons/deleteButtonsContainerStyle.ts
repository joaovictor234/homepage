import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    width: "100%"
  },
  deleteButtons: {
    display: "flex",
    flexDirection: "column",
    borderBottom: "1px solid rgba(0,0,0,.3)",
    width: "80%",
    '& div': {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
    },
    '& div svg': {
      margin: 0,
      color: "#fff"
    }
  },
  deleteButtonsSubtitle: {
    textAlign: "center",
    margin: "5px 0",
    color: "#000",
    fontSize: 18
  },
  button: {
    borderRadius: 5,
    width: 40,
    height: 35,
    backgroundColor: "#fff",
    border: "none",
    margin: 5,
    padding: "5px 15px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    bottom: 0,
    transition: "0.2s"
  },
  deleteButton: {
    border: "1px solid rgba(69,191,85,1)",
    color: "rgba(69,191,85,1)",
    '& svg': {
      fontSize: 20
    }
  },
  activeIndex: {
    background: "linear-gradient(270deg, rgba(4,77,41,1) 0%, rgba(69,191,85,1) 73%)",
    color: "#fff",
    bottom: 5,
    padding: "5px 10px",
    boxShadow: "2px 5px 10px rgba(4,77,41, 0.3)"
  },
})