import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  container: {
    backgroundColor: "rgba(240,240,240,.7)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
    marginBottom: 5
  },
  filterContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  select: {
    minWidth: 120
  },
  checkboxButton: {
    border: "none",
    padding: 5,
    borderRadius: 5,
    margin: "0 3px",
    '&:hover': {
      boxShadow: "0 0 5px rgba(0,0,0,.2)"
    }
  }
})