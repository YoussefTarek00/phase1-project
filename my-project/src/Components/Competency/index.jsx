import {
  Avatar,
  Box,
  Container,
  Grid,
  Icon,
  Typography,
} from "@mui/material";
import HeadIcon from "../../assets/Icons/communicationskillfilled.svg";
import SearchIcon from "../../assets/Icons/ic-search.svg";
import SortBy from "./SortBy";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../style/AccessThemes";
import ArrayOfData from "../../Pages/CompetencyPages/ArrayOfData";
import { useNavigate } from "react-router-dom";
import Comp3Buttons from "../../Pages/CompetencyPages/Comp3Buttons";
import StyleDivider from "../style/Divider";

const Competency = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Box sx={{ display: "flex", flexWrap: "wrap", mt: 5 }}>
        <Icon sx={{ mr: 1, mt: 0.5 }}>
          <Avatar
            src={HeadIcon}
            alt="icon"
            style={{ height: "100%", width: "100%" }}
          />
        </Icon>
        <Typography variant="h5" color="initial">
          Competency Setup
        </Typography>
        <Typography variant="p" color="#92929D" sx={{ mt: 1, ml: 3 }}>
          Showing 121 Available Competencies
        </Typography>
        <Box sx={{ ml: { md: 0, lg: 15 }, mt: { xs: 3, sm: 3, md: 1, lg: 0 } }}>
          <Search>
            <SearchIconWrapper>
              <Icon>
                <Avatar
                  src={SearchIcon}
                  alt="icon"
                  style={{ height: "100%", width: "100%" }}
                />
              </Icon>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search by Competency Name , Competency Description"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Box>
      </Box>
      <StyleDivider/>
      <Grid container spacing={5}>
        <Grid item xs={12} md={6} lg={6}>
          <Comp3Buttons />
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <SortBy />
        </Grid>
      </Grid>
      <ArrayOfData />
    </Container>
  );
};

export default Competency;
