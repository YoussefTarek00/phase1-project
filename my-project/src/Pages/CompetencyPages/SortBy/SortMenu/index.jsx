import { IconButton, Menu, MenuItem, Tooltip, Typography } from "@mui/material";
import { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const sortMenu = ["A To Z", "Z To A"];

const SortMenu = () => {
  const [anchorElSort, setAnchorElSort] = useState(null);

  const handleOpenSortMenu = (event) => {
    setAnchorElSort(event.currentTarget);
  };

  const handleCloseSortMenu = () => {
    setAnchorElSort(null);
  };
  return (
    <>
      <Tooltip title="Open menu">
        <IconButton onClick={handleOpenSortMenu} sx={{ p: 0 }}>
          <ArrowDropDownIcon />
        </IconButton>
      </Tooltip>

      <Menu
        sx={{ mt: "30px" }}
        id="menu-sort"
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
    </>
  );
};

export default SortMenu;
