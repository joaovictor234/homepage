import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    padding: 10,
    margin: 10,
    color: "#fff",
    width: "100%",
    boxShadow: "0 0 10px rgba(0,0,0,.4)"
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    color: "#fff",
    '& h6': {
      fontSize: "1rem",
      margin: "5px 0",
      fontWeight: "bold"
    },
    '& div': {
      display: "flex",
      alignItems: "center"
    },
    '& div span': {
      backgroundColor: "#fff",
      color: "#000",
      fontWeight: 600,
      padding: "3px 10px",
      borderRadius: 5,
      marginLeft: 5
    }
  },
  data: {
    display: "flex",
    justifyContent: "space-between",
    color: "#fff",
    '& div:last-child': {
      marginRight: 22
    },
    '& div p': {
      margin: 0,
      padding: 0
    },
    '& div span': {
      fontWeight: 600
    }
  },
  conline: {
    background: "linear-gradient(270deg, rgba(186, 61, 48, 1) 0%, rgba(219, 122, 29, 1) 0%, rgba(166, 25, 60, 1) 77%)"
  },
  ressarcimento: {
    background: "linear-gradient(115deg, rgba(255, 255, 255, 1) 0%, rgba(8, 103, 140, 1) 0%, rgba(7, 1, 64, 1) 87%)"
  }
})