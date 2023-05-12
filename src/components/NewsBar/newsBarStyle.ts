import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  newsBar: {
    borderRadius: 5,
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  newsBarTable: {
    margin: 3,
    maxHeight: 450,
    overflowY: "scroll"
  },
  tableHeader: {
    fontSize: 13
  },
  cellIcon: {
    display: "flex",
    alignItem: "center",
    '& svg': {
      color: "green",
      marginRight: 3
    }
  },
})