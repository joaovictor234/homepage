import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  container: {
    backgroundColor: "#fff",
    margin: 10,
    borderRadius: 5,
    boxShadow: "0 0 10px rgba(0,0,0,.2)",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#011C40",
    padding: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  },
  headerButtons: {
    display: "flex"
  },
  title: {
    padding: 0,
    margin: 0,
    color: "#fff",
    fontSize: "1.2rem"
  },
  modal: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
})