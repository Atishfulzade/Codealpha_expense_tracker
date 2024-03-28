import IncomeForm from "../../component/IncomeForm";
import { Container, Grid } from "@mui/material";
import EnhancedTable from "../../component/RecentTransaction";
const Income = () => {
  const income = {
    type: "Income",
    source: [
      "Salary",
      "Investment",
      "Rent",
      "Pension",
      "Business",
      "Interest",
      "Scolarship",
      "Other",
    ],
  };
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <IncomeForm value={income} />
        </Grid>
        <Grid item xs={8}>
          <EnhancedTable value={income} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Income;
