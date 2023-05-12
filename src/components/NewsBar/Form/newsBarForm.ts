import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  form: {
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    padding: 20,
    borderRadius: 5,
    '& h3': {
      fontSize: 20,
      opacity: "0.7"
    }
  },
  inputDate: {
    padding: 15,
    margin: "10px 0",
    border: "1px solid rgba(0,0,0,.2)",
    borderRadius: 5
  },
  buttonGroup: {
    padding: "10px 0 0 0",
    display: "flex",
    justifyContent: "space-between"
  }
})