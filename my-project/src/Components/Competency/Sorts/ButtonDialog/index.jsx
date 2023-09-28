import { Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import { SortGreenButton } from "../../Buttons";
import Form from "./Form";

const ButtonDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenDialog = () => {
    setIsOpen(true);
  };
  const handleCloseDialog = () => {
    setIsOpen(false);
  };

  return (
    <>
      <SortGreenButton onClick={handleOpenDialog} />

      <Dialog open={isOpen} onClose={handleCloseDialog}>
        <DialogTitle>Add New Competency</DialogTitle>
        <DialogContent>
          <Form />
        </DialogContent>
        <DialogActions>
          <Button
            color="inherit"
            sx={{ textTransform: "none" }}
            onClick={handleCloseDialog}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ButtonDialog;
