import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar/Index";
import { Box } from "@mui/material";

const Layout = () => {
  return (
    <Box>
      <Navbar />

      <Outlet />
    </Box>
  );
};

export default Layout;
