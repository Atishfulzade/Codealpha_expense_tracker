import React from "react";
import IncomeForm from "../../component/IncomeForm";
import { Container, Grid } from "@mui/material";
import EnhancedTable from "../../component/RecentTransaction";
const Expense = () => {
  const expense = {
    type: "expense",
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
