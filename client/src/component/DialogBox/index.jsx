import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TextField, Box } from "@mui/material";
import { useFormik } from "formik";
import axios from "axios";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
React.useState(() => {
  try {
    const response = axios.get("/");
  } catch (error) {}
}, []);
export default function AlertDialogSlide({ setShowPopup }) {
  const validate = (values) => {
    const error = {};
    if (!values.name) {
      error.name = "Name is required";
    }
    if (!values.balance) {
      error.name = "Balance is required";
    }
    return error;
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      balance: "",
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
      setShowPopup(false);
    },
  });
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>Fill below information</DialogTitle>
      <DialogContent>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          onSubmit={formik.handleSubmit}
          autoComplete="off"
        >
          <div>
            <TextField
              required
              id="outlined-required"
              label="Enter Name"
              placeholder="Enter full name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
          </div>
          <div>
            <TextField
              required
              id="outlined-required"
              label="Available balance"
              type="number"
              name="balance"
              value={formik.values.balance}
              onChange={formik.handleChange}
            />
          </div>
          <Button
            type="submit"
            variant="contained"
            style={{ marginLeft: "8px", marginTop: "10px" }}
          >
            Submit
          </Button>
        </Box>
      </DialogContent>
      <DialogActions></DialogActions>
    </Dialog>
  );
}
