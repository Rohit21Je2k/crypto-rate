import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme();

theme.props = {
  MuiInput: {
    disableUnderline: true,
  },
  MuiInputLabel: {
    shrink: true,
  },
};

theme.overrides = {
  MuiInput: {
    root: {
      top: "15px",
      border: "3px solid black",
      borderRadius: "4px",
      margin: "10px 0 50px",
      paddingLeft: "5px",
      height: "45px",
      background: "white",
      "&$focused": {},
    },
  },
  MuiInputLabel: {
    root: {
      textTransform: "uppercase",
      fontSize: "1.5rem",
      fontWeight: "bold",
      textShadow: "0 0 10px #f48476",
      color: " #14bed4",
      "&$focused": {
        color: " #14bed4",
      },
    },
  },
};

export default theme;
