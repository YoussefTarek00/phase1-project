import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Icon,
  Typography,
} from "@mui/material";
import HeadIcon from "../../assets/Icons/communicationskillfilled.svg";
import SearchIcon from "../../assets/Icons/ic-search.svg";
import Sorts from "./Sorts";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../style/AccessThemes";
import ArrayOfData from "./ArrayOfData";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";

const Competency = () => {
  const navigate = useNavigate();
  const [greenIndex, setGreenIndex] = useState(0);
  const firstButtonRef = useRef();

  const handleClick = (index) => {
    setGreenIndex(index);

    document.querySelectorAll(".button").forEach((button) => {
      if (button.classList.contains(`button-${index}`)) {
        button.style.backgroundColor = "green";
        button.style.color =
          button.style.backgroundColor === "green" ? "white" : "black";
      } else {
        button.style.backgroundColor = "white";
      }
    });
  };

  const buttonColors = ["green", "white", "white"];
  buttonColors[greenIndex] = "green";

  const handelAllClick = () => {
    navigate("?filter=all");
  };
  const handelActiveClick = () => {
    navigate("?filter=active");
  };
  const handelDisabledClick = () => {
    navigate("?filter=disabled");
  };
  const allData = useSelector((state) => state.data);

  const allCount = allData.length;
  const activeCount = allData.filter((name) => name.active === true).length;
  const disabledCount = allData.filter((name) => name.active === false).length;

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
      <Divider sx={{ mt: 3, mb: 3 }} />
      <Grid container spacing={5}>
        <Grid item xs={12} md={6} lg={6}>
          <Box sx={{ display: "flex", flexDirection: {xs:"column",sm:'row'} }}>
            <Button
              ref={firstButtonRef}
              className="button-0"
              startIcon="All"
              endIcon={allCount}
              color="inherit"
              sx={{
                display: "flex",
                justifyContent: "space-around",
                textTransform: "none",
                borderRadius: 10,
                width: "10rem",
                p: 0,
                mr: 2, mb:{xs:2},
                backgroundColor: greenIndex === 0 ? "green" : "white",
                color: greenIndex === 0 ? "white" : "black",

                "&:hover": {
                  backgroundColor: greenIndex === 0 ? "green" : "white",
                },
              }}
              onClick={() => {
                handelAllClick();
                handleClick(0);
              }}
            />
            <Button
              className="button-1"
              startIcon="Active"
              endIcon={activeCount}
              color="inherit"
              sx={{
                display: "flex",
                justifyContent: "space-around",
                textTransform: "none",
                borderRadius: 10,
                width: "10rem",
                p: 0,
                mr: 2,mb:{xs:2},
                backgroundColor: greenIndex === 1 ? "green" : "white",
                color: greenIndex === 1 ? "white" : "black",

                "&:hover": {
                  backgroundColor: greenIndex === 1 ? "green" : "white",
                },
              }}
              onClick={() => {
                handelActiveClick();
                handleClick(1);
              }}
            />
            <Button
              className="button-2"
              startIcon="Disabled"
              endIcon={disabledCount}
              color="inherit"
              sx={{
                display: "flex",
                justifyContent: "space-around",
                textTransform: "none",
                borderRadius: 10,
                width: "10rem",
                p: 0,
                mr: 2,mb:{xs:2},
                backgroundColor: greenIndex === 2 ? "green" : "white",
                color: greenIndex === 2 ? "white" : "black",

                "&:hover": {
                  backgroundColor: greenIndex === 2 ? "green" : "white",
                },
              }}
              onClick={() => {
                handelDisabledClick();
                handleClick(2);
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <Sorts />
        </Grid>
      </Grid>
      <ArrayOfData />
    </Container>
  );
};

export default Competency;
