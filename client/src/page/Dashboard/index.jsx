import React from "react";
import { Container, Grid, Typography, Box, Chip } from "@mui/material";
import SimpleLineChart from "../../component/Chart";
import PieActiveArc from "../../component/PieChart";
import EnhancedTable from "../../component/RecentTransaction";
import axios from "axios";
import AlertDialogSlide from "../../component/DialogBox";
import { useSelector } from "react-redux";

const Dashboard = ({ showPopup, setShowPopup }) => {
  const user = useSelector((state) => state.name);
  const model = useSelector((state) => state.model);
  const [userData, setUserData] = React.useState(null);
  console.log(user.name);
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        if (!user) {
          console.log("User not found");
          return;
        }
        const response = await axios.get(
          `http://localhost:3000/people/${user.name}`
        );
        setUserData(response.data); // Assuming response.data contains the fetched user data
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    // Call fetchData initially
    fetchData();

    // Call fetchData when modal is closed
    if (!showPopup && user) {
      fetchData();
    }
  }, [user, showPopup]); // Fetch data when user changes or when modal status changes
  return (
    <Container maxWidth="lg">
      {showPopup && <AlertDialogSlide setShowPopup={setShowPopup} />}
      {showPopup ? (
        ""
      ) : (
        <Grid container spacing={3}>
          {/* All Transaction */}
          <Grid item xs={12} sm={6}>
            <Box>
              <Typography variant="h5">All Transactions</Typography>
            </Box>
            <SimpleLineChart userData={userData} />
          </Grid>

          {/* Total Expense */}
          <Grid item xs={12} sm={6}>
            <Box marginBottom={8} display="flex" justifyContent="space-between">
              <Typography variant="h5">Total Expense</Typography>
              <Chip
                label={`Balance: ₹ ${userData && userData?.[0]?.balance}`}
                variant="outlined"
              />
            </Box>
            <PieActiveArc userData={userData} />
          </Grid>

          {/* Recent Transactions */}
          <Grid item xs={12}>
            <EnhancedTable userData={userData} />
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default Dashboard;
