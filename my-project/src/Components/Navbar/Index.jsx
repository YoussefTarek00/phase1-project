import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Badge from "@mui/material/Badge";
import AvatarLogo from "../../assets/Images/AvatarLogo.jpg";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { ThemeProvider } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { GrayTheme } from "../style/AccessThemes";
import { useState } from "react";

const pages = [
  { text: "Jobs", path: "/" },
  { text: "Competency", path: "/competency" },
  { text: "Setup", path: "#" },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const navigate = useNavigate();

  const CurrentLocation = useLocation();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ bgcolor: "#29CC8B" }}>
      <Container maxWidth="xl" >
        <Toolbar sx={{p:0}}>
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
                        CurrentLocation.pathname === `${page.path}` &&
                        `primary.main`,
                      "&:hover": {
                        bgcolor:
                          CurrentLocation.pathname === `${page.path}` &&
                          `primary.main`,
                      },
                    }}
                    onClick={() => {
                      handleCloseNavMenu;
                      navigate(page.path);
                    }}
                  >
                    <Typography textAlign="center">{page.text}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: { xs: 2, sm: 5, md: 8 },
                flexGrow: { xs: 1, sm: 1, md: 0, lg: 0 },
                fontSize: { xs: 14, sm: 17 },
                color: "#44444F",
                textDecoration: "none",
              }}
            >
              UNITED OFOQ
            </Typography>

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
                      CurrentLocation.pathname === `${page.path}` &&
                      `primary.main`,
                    "&:hover": {
                      bgcolor:
                        CurrentLocation.pathname === `${page.path}` &&
                        `primary.main`,
                    },
                    borderRadius: 2,
                  }}
                  onClick={() => {
                    handleCloseNavMenu;
                    navigate(page.path);
                  }}
                >
                  {page.text}
                </Button>
              ))}
            </Box>

            <Box>
              <IconButton
                size="large"
                aria-label="show new notifications"
                color="inherit"
                sx={{ mr: { xs: 0, sm: 2 } }}
              >
                <Badge badgeContent="" color="error" >
                  <NotificationsNoneIcon
                    sx={{ fontSize: { xs: 30, sm: 30, md: 40, lg: 40 } }}
                  />
                </Badge>
              </IconButton>

              <IconButton sx={{ p: 0 }}>
                <Avatar
                  alt="J"
                  src={AvatarLogo}
                  sx={{ border: "2px solid #eee" }}
                />
              </IconButton>

              <Tooltip title="Open settings">
                <IconButton
                  onClick={handleOpenUserMenu}
                  sx={{ p: 0, color: "#eee" }}
                >
                  <ArrowDropDownIcon />
                </IconButton>
              </Tooltip>

              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </ThemeProvider>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
