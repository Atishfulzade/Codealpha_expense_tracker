import React from "react";
import { Button, Card, CardContent, Typography } from "@mui/material";
import bgCard from "../../assets/bg.jpg";
const CreditCard = () => {
  return (
    <>
      <Button variant="contained" style={{ marginBottom: "30px" }}>
        Add Card
      </Button>
      <Card
        sx={{
          minWidth: 350,
          width: 350,
          height: 210,
          borderRadius: 5,
          padding: "5px",
          backgroundImage: `url(${bgCard})`, // Use template literals to insert the image URL
          backgroundSize: "cover", // Cover the entire area of the card
          backgroundRepeat: "no-repeat", // Prevent the image from repeating
        }}
      >
        <CardContent style={{ marginTop: "105px" }}>
          <Typography
            variant="p"
            color="white"
            fontSize={19}
            letterSpacing={9}
            marginLeft={2}
          >
            6233 4645 5689
          </Typography>
        </CardContent>
        <Typography variant="p" color="white" letterSpacing={2} marginLeft={2}>
          ATISH FULZADE
        </Typography>
        <Typography
          variant="p"
          fontSize="12px"
          color="white"
          marginLeft={5}
          marginTop={5}
        >
          Valid upto: 21/2024
        </Typography>
      </Card>
    </>
  );
};

export default CreditCard;
