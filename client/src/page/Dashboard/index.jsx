import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import SimpleLineChart from "../../component/Chart";
import PieActiveArc from "../../component/PieChart";
import EnhancedTable from "../../component/RecentTransaction";
import { Chip } from "@mui/material";
const Dashboard = () => {
  return (
    <Container>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Box>
            <Typography variant="h5">All Transaction</Typography>
          </Box>
          <SimpleLineChart />
        </Grid>
        <Grid item xs={6}>
          <Box marginBottom={8} display="flex" justifyContent="space-between">
            <Typography variant="h5">Total Expense</Typography>
            <Chip label="Balance: ₹ 500" variant="outlined" />
          </Box>
          <PieActiveArc />
        </Grid>
        <Grid item xs={12}>
          <Box>
            <EnhancedTable />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
