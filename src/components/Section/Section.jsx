import React, { useEffect, useState } from "react";
import { config } from "../../App";
import { useSnackbar } from "notistack";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import { SentimentDissatisfied } from "@mui/icons-material";
import styles from "./Section.module.css";
import Button from "../Button/Button";
import Box from "@mui/material/Box";
import ColorTabs from "../Tabs/Tabs";
import Carousel from "../Carousel/Carousel";
import Grid from "../Grid/Grid"; // Import GridComponent

export default function Section({ title, data, showButton }) {
  const [albums, setAlbums] = useState([]); // Data from API
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showCarousel, setShowCarousel] = useState(true); // Toggle state for Grid and Carousel
  const { enqueueSnackbar } = useSnackbar();

  // API call function
  const performAPICall = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${config.endpoint}/${data}`);
      setAlbums(response.data); // Store the response data
    } catch (err) {
      setError(err.response ? err.response.data.message : err.message);
      enqueueSnackbar(
        err.response ? err.response.data.message : "Failed to fetch data.",
        { variant: "error" }
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    performAPICall();
  }, [data]);

  const handleToggle = () => {
    setShowCarousel((prev) => !prev);
  };

  // Loading and error handling
  if (loading) {
    return (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        minHeight="50vh"
      >
        <CircularProgress />
        <p className={styles.title}>Loading {title}...</p>
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        minHeight="50vh"
      >
        <SentimentDissatisfied />
        <p className={styles.title}>{error}</p>
      </Box>
    );
  }

  return (
    <div className={styles.section}>
      <div className={styles.sectionContent}>
        <p className={styles.title}>{title}</p>
        {showButton && (
          <Button onClick={handleToggle}>
            {showCarousel ? "Show All" : "Collapse"}
          </Button>
        )}
      </div>

      {showButton ? (
        showCarousel ? (
          <Carousel
            albums={albums}
            type="album"
          /> /* Pass albums to Carousel */
        ) : (
          <Grid items={albums} type="album" /> // Grid view
        )
      ) : (
        <ColorTabs songs={albums} type="songs" />
      )}
    </div>
  );
}
