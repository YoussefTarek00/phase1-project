import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  ThemeProvider,
} from "@mui/material";
import { useState } from "react";
import { TextFieldtheme } from "../../../../../Components/style/AccessThemes";

const Form = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [isActive, setIsActive] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <ThemeProvider theme={TextFieldtheme}>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          id="name"
          label="Name"
          name="name"
          multiline
          required
          value={name}
          helperText=" Enter your name"
          color="success"
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          id="description"
          label="Description"
          name="description"
          multiline
          required
          helperText=" Write your description"
          color="success"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <FormControlLabel
          control={<Checkbox disabled={!isActive} />}
          label="Active"
          name="isActive"
          onChange={(e) => setIsActive(e.target.value)}
        />

        <Button
          type="submit"
          sx={{
            marginTop: 10,
            padding: "5px 10px",
            backgroundColor: "#29CC8B",
            "&:hover": { bgcolor: "#29CC8B" },
            color: "#fff",
          }}
        >
          Submit
        </Button>
      </Box>
    </ThemeProvider>
  );
};

export default Form;
