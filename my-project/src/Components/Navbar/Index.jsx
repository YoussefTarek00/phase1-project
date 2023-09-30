import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Badge from "@mui/material/Badge";
import AvatarLogo from "../../assets/Images/AvatarLogo.jpg";
import PagesData from "../../Pages/Navbar/Data/PagesData";
import PagesMenu from "../../Pages/Navbar/Data/PagesMenu";
import SettingMenu from "../../Pages/Navbar/Data/SettingMenu";
import { StyledAppBAr } from "../style/AccessThemes";

const Navbar = () => {
  return (
    <StyledAppBAr position="static">
      <Container maxWidth="xl">
        <Toolbar sx={{ p: 0 }}>
          <PagesMenu />

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

          <PagesData />
          <Box>
            <IconButton
              size="large"
              aria-label="show new notifications"
              color="inherit"
              sx={{ mr: { xs: 0, sm: 2 }, color: "white" }}
            >
              <Badge badgeContent="" color="error">
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

            <SettingMenu />
          </Box>
        </Toolbar>
      </Container>
    </StyledAppBAr>
  );
};

export default Navbar;
