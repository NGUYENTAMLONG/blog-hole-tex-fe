import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => {
  return {
    container: {
      backgroundColor: theme.palette.primary.main,
      color: "white",
      marginBottom: 20,
      fontWeight: "lighter",
      padding: "5px 0px",
    },
  };
});
