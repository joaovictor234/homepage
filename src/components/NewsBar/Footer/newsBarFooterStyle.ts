import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  footer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    position: "sticky",
    bottom: -1,
    fontSize: "0.9rem",
    backgroundColor: "#fff",
    borderTop: "1px solid rgba(0,0,0,.1)"
  },
  element: {
    display: "flex",
    alignItems: "center",
    margin: 10,
    '& select': {
      marginLeft: 5,
      border: "none",
      backgroundColor: "rgba(0,0,0,.1)",
      margin: 0
    },
    '& p': {
      display: "flex",
      alignItems: "center",
      margin: 0
    },
    '& p span': {
      margin: "0 5px"
    }
  },
  button: {
    backgroundColor: "#ccc",
    borderRadius: "50%",
    margin: 2,
    cursor: "pointer",
    marginBottom: 2,
    boxShadow: "0 3px 10px rgba(0,0,0,.3)",
    '&:active': {
      marginBottom: 0,
      boxShadow: "none"
    }
  },
  rotateButton: {
    rotate: "180deg",
    boxShadow: "0 -3px 10px rgba(0,0,0,.3)"
  },
  disable: {
    backgroundColor: "#eee",
    boxShadow: "none",
    marginBottom: 0,
    borderRadius: "50%",
    margin: 2
  }
})