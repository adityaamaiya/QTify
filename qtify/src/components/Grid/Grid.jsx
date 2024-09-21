import React from "react";
import { Grid, Box } from "@mui/material";
import Card from "../Card/Card"; // Adjust the import path to your actual Card component

// GridComponent to display items in a grid format
export default function GridComponent({ items, type }) {
  return (
    <Box sx={{ width: "100%", marginTop: 2 }}>
      <Grid container spacing={1}>
        {items.map((item) => (
          <Grid item xs={6} sm={4} md={2} lg={1.7} key={item.id}>
            <Card
              title={item.title}
              follows={item.follows} // Handle follows or likes depending on type
              image={item.image}
              type={type} // Type to differentiate between "album" and "song"
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
