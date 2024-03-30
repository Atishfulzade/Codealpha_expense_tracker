import React from "react";
import IncomeForm from "../../component/IncomeForm";
import { Container, Grid } from "@mui/material";
import EnhancedTable from "../../component/RecentTransaction";
import { useSelector } from "react-redux";
const Expense = ({ setShowPopup }) => {
  const model = useSelector((state) => state.model);
  const expense = {
    category: "expense",
    source: [
      "Health",
      "Investment",
      "Rent",
      "Education",
      "Food",
      "Travel",
      "Shopping",
      "Other",
    ],
  };
  setShowPopup(model?.isOpen);

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <IncomeForm value={expense} />
        </Grid>
        <Grid item xs={8}>
          <EnhancedTable value={expense} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Expense;
