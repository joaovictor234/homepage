import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  announcements: {
    display: "flex",
    alignItems: "center",
  },
  image: {
    margin: "0 20px",
    height: 200
  },
  carouselContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    '& p': {
      padding: 0,
      margin: 0
    }
  },
  carousel: {
    minHeight: 225,
    width: "100%",
    padding: "30px 100px",
    textAlign: "justify",
    '& a': {
      margin: "0 -40px"
    }
  },
  carouselMdSize: {
    minHeight: 400,
    width: "100%",
    padding: "15px 60px",
    textAlign: "justify",
    '& a': {
      marginLeft: "0 -30px"
    }
  },
  carouselTitle: {
    fontSize: 17,
    marginBottom: 10
  },
  carouselDescription: {
    fontSize: 15,
    padding: 0,
    margin: 0
  }
})