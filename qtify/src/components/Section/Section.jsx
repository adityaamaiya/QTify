import React, { useEffect, useState } from "react";
import { config } from "../../App";
import { useSnackbar } from "notistack";
import axios from "axios";
import { CircularProgress, Grid, Button as MUIButton } from "@mui/material";
import { SentimentDissatisfied } from "@mui/icons-material";
import { Box } from "@mui/system";
import styles from "./Section.module.css";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel"; // Adjust import path as needed
import Button from "../Button/Button";

export default function Section({ title, data, showButton }) {
  const [albums, setAlbums] = useState([]);  // Data from API
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showCarousel, setShowCarousel] = useState(true); // State to toggle between Grid and Carousel
  const { enqueueSnackbar } = useSnackbar();

  const performAPICall = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${config.endpoint}/${data}`); // Adjust the API endpoint as per the config
      setAlbums(response.data);  // Store albums data
    } catch (err) {
      setError(err.response ? err.response.data.message : err.message);
      enqueueSnackbar(
        err.response ? err.response.data.message : "Failed to fetch albums.",
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
    setShowCarousel(!showCarousel);
  };

  return (
    <div className={styles.section}>
      <div className={styles.sectionContent}>
        <p className={styles.title}>{title}</p>
        {showButton && showButton && ( // Show button only for albums
          <Button onClick={handleToggle}>
            {showCarousel ? "Show All" : "Collapse"}
          </Button>
        )}
      </div>
      {loading ? (
        <Box display="flex" alignItems="center" justifyContent="center" minHeight="50vh">
          <CircularProgress />
          <p className={styles.title}> Loading Albums...</p>
        </Box>
      ) : error ? (
        <Box display="flex" alignItems="center" justifyContent="center" minHeight="50vh">
          <SentimentDissatisfied />
          <p className={styles.title}> {error}</p>
        </Box>
      ) : (
        <>
          {showButton ? (
            // Albums section with Carousel and toggle button
            showCarousel ? (
              <Carousel slides={albums.map(album => (
                <Card
                  title={album.title}
                  follows={album.follows}
                  image={album.image}
                  key={album.id}
                  type="album"
                />
              ))} />
            ) : (
              <Grid container spacing={1} className="album-grid">
                {albums.map(album => (
                  <Grid item xs={6} sm={4} md={2} lg={1.7} key={album.id}>
                    <Card
                      title={album.title}
                      follows={album.follows}
                      image={album.image}
                      type="album"
                    />
                  </Grid>
                ))}
              </Grid>
            )
          ) : ( // Songs section with Carousel only
            <Carousel slides={albums.map(song => (
              <Card
                title={song.title}
                likes={song.likes}
                image={song.image}
                key={song.id}
                type="song"
              />
            ))} />
          )}
        </>
      )}
    </div>
  );
  
}
