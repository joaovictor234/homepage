import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  button: {
    background: "linear-gradient(270deg, rgba(4,77,41,1) 0%, rgba(69,191,85,1) 73%)",
    color: "#fff",
    padding: '5px 10px',
    border: "none",
    borderRadius: 5,
    boxShadow: '0 5px 10px rgba(0,0,0,.4)',
    margin: '0 5px',
    transition: '300ms',
    opacity: '0.9',
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    fontSize: 15,
    '&:hover': {
      opacity: 1
    },
    '&:disabled': {
      backgroundColor: "#fff",
      color: "#000"
    },
    '& svg': {
      marginRight: 5
    }
  },
  outlinedButton: {
    border: '2px solid rgba(4,77,41,1)',
    color: "#044d29",
    cursor: "pointer",
    padding: '5px 15px',
    borderRadius: 5,
    backgroundColor: "#fff"
  }
})