import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
 
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addArray } from "../../../../../Services/data/dataSlice";


const Form = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [isActive, setIsActive] = useState(true);


 
  const dispatch = useDispatch();


  const handleSubmit = (e) => {
    e.preventDefault();

    

    dispatch(addArray({name,description}));

    setName("");
    setDescription("");
  };
 
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      autoComplete="off"
      noValidate

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
        focused
        onChange={(e) => setName(e.target.value)}
        sx={{ marginBottom: 10, "&:hover": { border: "none" } }}
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
        sx={{ marginBottom: 10 }}
      />
      <FormControlLabel
        control={<Checkbox disabled={!isActive} />}
        label="Active"
        name="isActive"
      />

      <Button
        type="submit"
        sx={{
          marginTop: 10,
          padding: "5px 10px",
          backgroundColor: "green",
          "&:hover": { bgcolor: "green" },
          color: "#fff",
        }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default Form;
