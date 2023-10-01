import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import HeadIcon from "../../../../assets/Icons/communicationSkillGren.svg";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const DataCards = ({ data }) => {
  const style = {
    borderLeft: `10px solid ${
      data.competency_type.name === "Core Competency" ? "#29CC8B" : "#6794FF"
    }  `,
  };

  return (
    <Box
      sx={{
        pr: { xs: 0, sm: 0, md: 10, lg: 10 },
        pl: { xs: 0, sm: 0, md: 3, lg: 3 },
      }}
    >
      <Card
        style={style}
        elevation={0}
        sx={{
          height: { xs: "100px", sm: "80px", md: "60px", lg: "60px" },
          borderRadius: 2,
        }}
      >
        <CardHeader
          sx={{ p: 0.5, ml: 2 }}
          avatar={
            <Avatar
              src={HeadIcon}
              alt="icon"
              sx={{ height: "20px", width: "20px" }}
            />
          }
          title={
            <>
              <Typography sx={{ display: "flex", fontSize: 18 }}>
                {data.name}
                {data.active === true ? (
                  <Typography
                    component="span"
                    sx={{ color: "#29CC8B", ml: 2, mt: 0.5, fontSize: 13 }}
                  >
                    Active
                  </Typography>
                ) : (
                  <Typography
                    component="span"
                    sx={{ color: "red", ml: 2, fontSize: 13, mt: 0.5 }}
                  >
                    Disapled
                  </Typography>
                )}
              </Typography>
            </>
          }
          action={
            <IconButton
              sx={{ bgcolor: "#E2E8EE", p: 0, mr: 2, mt: 1, borderRadius: 2 }}
            >
              <MoreHorizIcon />
            </IconButton>
          }
        />
        <CardContent sx={{ mt: -2 }}>
          <Typography
            sx={{ ml: 5, fontSize: 14 }}
            variant="body1"
            color="text.secondary"
          >
            {data.description}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default DataCards;
