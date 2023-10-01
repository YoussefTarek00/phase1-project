import { Box, Button, ThemeProvider } from "@mui/material";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { theme } from "../../../Components/style/Buttons";

const Comp3Buttons = () => {
  const navigate = useNavigate();
  const [greenIndex, setGreenIndex] = useState(0);
  const firstButtonRef = useRef();

  const handleClick = (index) => {
    setGreenIndex(index);

    document.querySelectorAll(".button").forEach((button) => {
      if (button.classList.contains(`button-${index}`)) {
        button.style.backgroundColor = "#29CC8B";
        button.style.color =
          button.style.backgroundColor === "#29CC8B" ? "white" : "black";
      } else {
        button.style.backgroundColor = "white";
      }
    });
  };

  const buttonColors = ["#29CC8B", "white", "white"];
  buttonColors[greenIndex] = "#29CC8B";

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
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" } }}>
        <Button
          ref={firstButtonRef}
          className="button-0"
          startIcon="All"
          endIcon={allCount}
          color="inherit"
          sx={{
            backgroundColor: greenIndex === 0 ? "#29CC8B" : "white",
            color: greenIndex === 0 ? "white" : "black",
            "&:hover": {
              backgroundColor: greenIndex === 0 ? "#29CC8B" : "white",
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
            backgroundColor: greenIndex === 1 ? "#29CC8B" : "white",
            color: greenIndex === 1 ? "white" : "black",

            "&:hover": {
              backgroundColor: greenIndex === 1 ? "#29CC8B" : "white",
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
            backgroundColor: greenIndex === 2 ? "#29CC8B" : "white",
            color: greenIndex === 2 ? "white" : "black",

            "&:hover": {
              backgroundColor: greenIndex === 2 ? "#29CC8B" : "white",
            },
          }}
          onClick={() => {
            handelDisabledClick();
            handleClick(2);
          }}
        />
      </Box>
    </ThemeProvider>
  );
};

export default Comp3Buttons;
