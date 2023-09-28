import {
  Avatar,
  Box,
  Button,
  Icon,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import FilterIcon from "../../../assets/Icons/filter.svg";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useState } from "react";
import { SortGreenButton } from "../Buttons";
import ButtonDialog from "./ButtonDialog";

const sortMenu = ["A To Z", "Z To A"];

const Sorts = () => {
  const [anchorElSort, setAnchorElSort] = useState(null);

  const handleOpenSortMenu = (event) => {
    setAnchorElSort(event.currentTarget);
  };

  const handleCloseSortMenu = () => {
    setAnchorElSort(null);
  };
  return (
    <Box sx={{ ml: {xs:3,sm:12}, mb: 2 }}>
      <Typography variant="p" color="#92929D">
        Sort by:
      </Typography>
      <Typography variant="p" color="inherit" sx={{ ml: 1 }}>
        Last added
      </Typography>
      <Tooltip title="Open menu">
        <IconButton onClick={handleOpenSortMenu} sx={{ p: 0 }}>
          <ArrowDropDownIcon />
        </IconButton>
      </Tooltip>

      <Menu
        sx={{ mt: "30px" }}
        id="menu-appbar"
        anchorEl={anchorElSort}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElSort)}
        onClose={handleCloseSortMenu}
      >
        {sortMenu.map((sortMenu) => (
          <MenuItem key={sortMenu} onClick={handleCloseSortMenu}>
            <Typography textAlign="center">{sortMenu}</Typography>
          </MenuItem>
        ))}
      </Menu>

      <IconButton
        sx={{ border: "1px solid #E2E8EE", borderRadius: 2, ml: 2, p: 0.5 }}
      >
        <Avatar
          src={FilterIcon}
          alt="icon"
          style={{ height: "100%", width: "100%" }}
        />
      </IconButton>
      <ButtonDialog />
    </Box>
  );
};

export default Sorts;
