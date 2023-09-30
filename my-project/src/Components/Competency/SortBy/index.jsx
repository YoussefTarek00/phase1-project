import { Avatar, Box, IconButton, Typography } from "@mui/material";
import FilterIcon from "../../../assets/Icons/filter.svg";
import ButtonDialog from "../../../Pages/CompetencyPages/SortBy/ButtonDialog";
import SortMenu from "../../../Pages/CompetencyPages/SortBy/SortMenu";

const SortBy = () => {
  return (
    <Box sx={{ ml: { xs: 3, sm: 12 }, mb: 2 }}>
      <Typography variant="p" color="#92929D">
        Sort by:
      </Typography>
      <Typography variant="p" color="inherit" sx={{ ml: 1 }}>
        Last added
      </Typography>

      <SortMenu />

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

export default SortBy;
