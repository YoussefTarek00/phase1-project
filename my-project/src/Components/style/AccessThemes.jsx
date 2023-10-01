import { createTheme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

export const GrayTheme = createTheme({
  palette: {
    primary: {
      main: "#92929D",
    },
  },
});

export const StyledAppBAr = styled("div")(() => ({
  backgroundColor: "#29CC8B",
}));
export const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 10,
  backgroundColor: "white",
  opacity: 0.5,
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

export const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "50ch",
    },
  },
}));

export const TextFieldtheme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: "white", opacity: 0.5, 
        },
      },
    },
  },
});
