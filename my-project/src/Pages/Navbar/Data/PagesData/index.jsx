import { Box, Button, ThemeProvider } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { GrayTheme } from "../../../../Components/style/AccessThemes";
import { pages } from "../PagesAndSettingsData";

const PagesData = () => {
  const navigate = useNavigate();

  const CurrentLocation = useLocation();
  return (
    <ThemeProvider theme={GrayTheme}>
      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        {pages.map((page) => (
          <Button
            key={page.text}
            sx={{
              mx: 3,
              color: "white",
              textTransform: "none",
              fontSize: 17,
              bgcolor:
                CurrentLocation.pathname === `${page.path}` && `primary.main`,
              "&:hover": {
                bgcolor:
                  CurrentLocation.pathname === `${page.path}` && `primary.main`,
              },
              borderRadius: 2,
            }}
            onClick={() => {
              navigate(page.path);
              handleCloseNavMenu();
            }}
          >
            {page.text}
          </Button>
        ))}
      </Box>
    </ThemeProvider>
  );
};

export default PagesData;
