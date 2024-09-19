import React, { useEffect, useState } from "react";
import { config } from "../../App";
import { useSnackbar } from "notistack";
import axios from "axios";
import { CircularProgress, Grid } from "@mui/material";
import { SentimentDissatisfied } from "@mui/icons-material";
import { Box } from "@mui/system";
import styles from "./Section.module.css";
import Card from "../Card/Card"; // Ensure the card component is styled properly
import Button from '../Button/Button';

export default function Section({ title, data }) {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { enqueueSnackbar } = useSnackbar();

  const performAPICall = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${config.endpoint}`);
      setAlbums(response.data);
      return response.data;
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
  }, []);

  return (
    <div className={styles.section}>
      <div className={styles.sectionContent}>
      <p className={styles.title}>{title}</p>
      <Button> Collapse</Button>
      </div>
      {loading ? (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          minHeight="50vh"
        >
          <CircularProgress />
          <p>Loading Albums...</p>
        </Box>
      ) : error ? (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          minHeight="50vh"
        >
          <SentimentDissatisfied />
          <p>{error}</p>
        </Box>
      ) : (
        <Grid container spacing={2} className="album-grid">
          {albums.map((album) => (
            <Grid item xs={6} sm={4} md={2} lg={1.7} key={album.id}>
              <Card
                title={album.title}
                follows={album.follows}
                image={album.image}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
}
