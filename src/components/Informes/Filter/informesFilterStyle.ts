import { makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200
  },
  dateInput: {
    justifyContent: "flex-start"
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}))