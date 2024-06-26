import React from "react";
import { Box, Divider, Button, Typography, TextField } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import axios from "axios";
const IncomeForm = ({ value }) => {
  const user = useSelector((state) => state.name);

  const validate = (values) => {
    const errors = {};
    if (!values.title) {
      errors.title = "Title required";
    }

    if (!values.amount) {
      errors.amount = "amount required";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      amount: "",
      source: "",
      note: "",
    },
    validate,
    onSubmit: async (values, { resetForm }) => {
      try {
        const formData = { ...values, category: value.category };
        console.log(formData);
        await axios.post(
          `http://localhost:3000/people/${user.name}/${value.category}`,
          formData
        );
        resetForm();
      } catch (error) {
        console.error("Error:", error);
      }
    },
  });

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  return (
    <Box
      boxShadow="0 0 1px gray"
      borderRadius={1}
      padding={2}
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      onSubmit={formik.handleSubmit}
      noValidate
      autoComplete="off"
    >
      <Typography paddingBottom={1} marginLeft={1} variant="h6" color="primary">
        {capitalizeFirstLetter(`Add ${value.category}`)}
      </Typography>
      <Divider />
      <TextField
        required
        name="title"
        id="outlined-required"
        label={capitalizeFirstLetter(`${value.category} title`)}
        style={{ marginTop: "20px", width: "97%" }}
        onChange={formik.handleChange}
        value={formik.values.title}
      />
      <TextField
        required
        id="outlined-required"
        type="number"
        name="amount"
        label={capitalizeFirstLetter(`${value.category} amount`)}
        style={{ marginTop: "20px", width: "97%" }}
        onChange={formik.handleChange}
        value={formik.values.amount}
      />
      <FormControl
        style={{ width: "100%", marginLeft: "9px", marginTop: "20px" }}
      >
        <InputLabel id="demo-simple-select-label">
          {capitalizeFirstLetter(`${value.category} category`)}
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name="source"
          label={`${value.category} category`}
          style={{ width: "97%" }}
          onChange={formik.handleChange}
          value={formik.values.source}
        >
          {value.source.map((item, index) => (
            <MenuItem value={item} key={index}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        id="outlined-textarea"
        label="Note"
        name="note"
        placeholder="Add a note if any"
        rows={3}
        onChange={formik.handleChange}
        value={formik.values.note}
        style={{ width: "97%", marginTop: "20px" }}
        multiline
      />
      <Button
        variant="contained"
        size="medium"
        style={{
          marginTop: "15px",
          marginLeft: "10px",
          width: "97%",
          marginBottom: "10px",
        }}
        type="submit"
      >
        {`Add ${value.category}`}
      </Button>
    </Box>
  );
};

export default IncomeForm;
