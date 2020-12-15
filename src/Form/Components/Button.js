import React from "react";
import { default as MUIButton } from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 4,
    color: "white",
    fontWeight: "bold",
    display: "block",
    width: "100%",
    margin: "0 auto",
    height: 48,
    padding: "0 30px",
    "&:disabled": {
      background: "grey",
    },
    "&:hover": {
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    },
  },
});

function Button(props) {
  const classes = useStyles();
  return (
    <MUIButton
      onClick={props.onClick}
      disabled={props.disabled}
      className={classes.root}
    >
      Get Exchange Rate
    </MUIButton>
  );
}

export default Button;
