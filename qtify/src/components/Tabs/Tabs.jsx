import React, { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Carousel from "../Carousel/Carousel";
import Card from "../Card/Card";
import { config } from "../../App";
import axios from "axios";
import { useSnackbar } from "notistack";
import styles from "./Tabs.module.css";
export default function ColorTabs({ songs }) {
  // Destructure the `songs` prop directly
  const [value, setValue] = useState("all"); // Default tab is 'all'
  const [filteredSongs, setFilteredSongs] = useState(songs || []); // Default to all songs
  const [tabsData, setTabsData] = useState([]); // Tabs for genres
  const { enqueueSnackbar } = useSnackbar();

  const performAPICall = async () => {
    try {
      const response = await axios.get(`${config.endpoint}/genres`); // Fetch genres
      setTabsData(response.data.data); // Store genres data
    } catch (err) {
      enqueueSnackbar(
        err.response ? err.response.data.message : "Failed to fetch genres.",
        { variant: "error" }
      );
    }
  };

  useEffect(() => {
    performAPICall();
    console.log(filteredSongs);
    console.log(value);
  }, []);

  useEffect(() => {
    setFilteredSongs(songs); // Update filteredSongs whenever songs change
  }, [songs]);

  useEffect(() => {
    // Filter songs after the value (selected genre) is updated
    if (value === "all") {
      setFilteredSongs(songs);
      console.log(songs); // Show all songs for "All"
    } else {
      const filtered = songs.filter((song) => song.genre.key === value);
      setFilteredSongs(filtered); // Filter songs based on selected genre

      // Log filtered songs here to see the updated state
      console.log("Filtered songs based on value:", value, filtered);
    }
  }, [value, songs]); // Run this effect whenever `value` or `songs` changes

  const handleChange = (event, newValue) => {
    console.log("Tab clicked:", newValue); // Log the clicked tab value
    setValue(newValue); // Update selected tab value
  };

  return (
    <Box sx={{ width: "100%" }}>
      {/* Genre Tabs */}
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="text"
        indicatorColor="primary"
        aria-label="song genres tabs"
      >
        <Tab className={styles.tab} value="all" label="All Songs" />
        {tabsData.map((tab) => (
          <Tab
            key={tab.key}
            className={styles.tab}
            value={tab.key}
            label={tab.label}
          />
        ))}
      </Tabs>

      {/* Carousel showing filtered songs */}
      <Carousel albums={filteredSongs} />
    </Box>
  );
}
