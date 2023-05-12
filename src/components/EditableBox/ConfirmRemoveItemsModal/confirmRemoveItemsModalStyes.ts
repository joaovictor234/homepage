import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  modal: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  confirmModal: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5
  },
  title: {
    fontSize: '1.3rem',
    textAlign: 'center'
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-between'
  }
})