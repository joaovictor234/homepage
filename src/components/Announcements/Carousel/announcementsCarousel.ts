import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%"
  },
  carousel: {
    display: "flex",
    alignItem: "center",
    minHeight: 300,
    marginTop: 10
  },
  carouselLm: {
    display: "flex",
    alignItem: "center",
    minHeight: 220,
    marginTop: 10
  },
  carouselButton: {
    background: "none",
    border: "none",
    transition: "300ms",
    borderRadius: 5,
    margin: 5,
    '&:hover': {
      backgroundColor: "rgba(0,0,0,.2)"
    },
    '& svg': {
      fontSize: 30
    }
  },
  rotateCarouselButton: {
    rotate: "180deg"
  },
  carouselContent: {
    width: "100%"
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    margin: "10px 0"
  },
  description: {
    padding: 0,
    maring: "3px 6px",
    textAlign: "justify"
  },
  selectButtonsContainer: {
    display: "flex",
    justifyContent: "center",
    padding: 10
  },
  selectButton: {
    width: 12,
    height: 12,
    backgroundColor: "rgba(0,0,0,.4)",
    borderRadius: "50%",
    border: "none",
    margin: 3,
    cursor: "pointer"
  },
  selectedButton: {
    backgroundColor: "rgba(0,0,0,.8)"
  }
})