import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  messages: {
    height: "100%",
    maxHeight: 180,
    overflowY: "scroll"
  },
  noMessages: {
    display: "flex",
    justifyContent: "center",
  },
  occurrenceSpan: {
    width: "100%",
    padding: 10,
    textAlign: "center"
  }
})