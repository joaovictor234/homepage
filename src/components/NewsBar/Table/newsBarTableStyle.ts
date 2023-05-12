import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  table: {
    display: "flex",
    flexDirection: "column",
    minHeight: 500,
    padding: 0,
    margin: 0
  },
  header: {
    display: "grid",
    width: "100%",
    marginTop: 5,
    backgroundColor: "#eee",
    '& p': {
      padding: 0,
      margin: "5px 10px",
      textAlign: "center",
      borderLeft: "1px solid rgba(0,0,0,.2)"
    },
    '& p:first-child': {
      borderLeft: "none"
    }
  },
  headerDefault: {
    gridTemplateColumns: "20% 80%"
  },
  headerEditMode: {
    gridTemplateColumns: "15% 15% 70%"
  },
  row: {
    display: "grid",
    padding: 0,
    margin: "5px 10px",
    borderBottom: "1px solid rgba(0,0,0,.2)",
    '&:last-child': {
      borderBottom: "none"
    }
  },
  rowDefault: {
    gridTemplateColumns: "20% 80%"
  },
  rowEditMode: {
    gridTemplateColumns: "15% 15% 70%"
  },
  rowValue: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    '& p': {
      padding: 0,
      margin: "0 10px",
      width: "100%"
    }
  },
  rowData: {
    display: "flex",
    justifyContent: "center"
  },
  rowOptions: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    fontSize: 12,
    '& button': {
      backgroundColor: "#ccc",
      borderRadius: "50%",
      margin: "0 1px",
      padding: 3,
      border: "none"
    }
  },
  noRows: {
    textAlign: "center",
    marginTop: 10
  },
  editInput: {
    width: "100%",
    marginRight: 2,
    padding: 5
  }
})