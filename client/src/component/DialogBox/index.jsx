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
import { useDispatch } from "react-redux";
import { setName } from "../../store/nameSlice";
import { setOpen } from "../../store/dialogSlice";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({ setShowPopup }) {
  const [person, setPerson] = React.useState("");
  const dispatch = useDispatch();
  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Name is required";
    }
    if (!values.balance) {
      errors.balance = "Balance is required";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      balance: "",
    },
    validate,
    onSubmit: async (values) => {
      try {
        await axios.post("http://localhost:3000/people", values);
        dispatch(setName(values.name));
        setShowPopup(false);
        dispatch(setOpen(false));
        localStorage.setItem("state", false);
      } catch (error) {
        console.error("Error:", error);
      }
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
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
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
              error={formik.touched.balance && Boolean(formik.errors.balance)}
              helperText={formik.touched.balance && formik.errors.balance}
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
