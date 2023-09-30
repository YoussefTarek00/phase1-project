import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { GrayTheme } from "../../../../Components/style/AccessThemes";
import { pages } from "../PagesAndSettingsData";

const PagesMenu = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const navigate = useNavigate();

  const CurrentLocation = useLocation();

  const handleOpenNavMenu = (e) => {
    setAnchorElNav(e.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <ThemeProvider theme={GrayTheme}>
      <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>

        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          {pages.map((page) => (
            <MenuItem
              key={page.text}
              sx={{
                bgcolor:
                  CurrentLocation.pathname === `${page.path}` && `primary.main`,
                "&:hover": {
                  bgcolor:
                    CurrentLocation.pathname === `${page.path}` &&
                    `primary.main`,
                },
              }}
              onClick={() => {
                handleCloseNavMenu();
                navigate(page.path);
              }}
            >
              <Typography textAlign="center">{page.text}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </ThemeProvider>
  );
};

export default PagesMenu;
