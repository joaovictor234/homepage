import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  form: {
    backgroundColor: "#fff",
    padding: 20,
    display: 'flex',
    flexDirection: "column",
    borderRadius: 5
  },
  title: {
    fontSize: '1.3rem',
    textAlign: "center",
    opacity: '0.7'
  },
  input: {
    margin: "10px 0",
    width: 400
  },
  inputDateTime: {
    padding: 10,
    marginTop: 10,
    border: "1px solid rgba(0,0,0,.3)",
    borderRadius: 5
  },
  select: (props: { selectedColor: string }) => ({
    '& div': {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: props.selectedColor,
      margin: 5,
      padding: '5px',
      borderRadius: 5,
      color: props.selectedColor ? '#fff' : ''
    },
    '& svg': {
      marginRight: 1
    }
  }),
  selectFirstItem: {
    "& span": {
      color: "#000"
    } 
  },
  selectItem: {
    margin: 5,
    borderRadius: 5,
    color: "#fff",
    '& svg': {
      marginRight: 10
    }
  },
  buttons: {
    display: "flex",
    justifyContent: "space-between"
  }
})