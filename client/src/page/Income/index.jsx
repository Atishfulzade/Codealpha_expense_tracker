import IncomeForm from "../../component/IncomeForm";
import { Container, Grid } from "@mui/material";
import EnhancedTable from "../../component/RecentTransaction";
import { useSelector } from "react-redux";
const Income = ({ setShowPopup }) => {
  const model = useSelector((state) => state.model);

  const income = {
    category: "income",
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
  setShowPopup(model?.isOpen);

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
