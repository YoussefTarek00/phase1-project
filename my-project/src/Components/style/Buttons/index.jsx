import { Button, createTheme } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";


export const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          display: "flex",
          justifyContent: "space-around",
          textTransform: "none",
          borderRadius: 15,
          width: "10rem",
          padding: 0,
          marginRight: 10,
          marginBottom: 15,
        },
      },
    },
  },
});
export const SortGreenButton = (props) => {
  return (
    <Button
      onClick={props.onClick}
      sx={{
        borderRadius: 3,
        width: "12rem",
        color: "white",
        ml: 3,
        mt: { xs: 1, lg: 0 },
        textTransform: "none",
        bgcolor: "#29CC8B",
        "&:hover": { bgcolor: "#29CC8B" },
      }}
    >
      Add New Competency
    </Button>
  );
};
export const LoadMoreButton = (props) => {
  return (
    <Button
      endIcon={<KeyboardArrowDownIcon />}
      sx={{
        flexGrow: 1,
        borderRadius: 3,
        color: "#29CC8B",
        ml: { xs: 2, sm: 2, md: 5, lg: 5 },
        mr: { xs: 0, sm: 0, md: 10, lg: 10 },
        mt: { xs: 1, lg: 2 },
        p: 1,
        textTransform: "none",
        bgcolor: "white",
        "&:hover": { bgcolor: "white" },
      }}
      onClick={props.onClick}
    >
      Load More
    </Button>
  );
};
