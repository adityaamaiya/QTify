import React, { useEffect, useState } from "react";
import styles from "./Faq.module.css";
import axios from "axios";
import { config } from "../../App";
import { useSnackbar } from "notistack";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "../Arrows/ExpandMoreIcon";

export default function Faq({ data }) {
  const [faqs, setFaqs] = useState([]);
  const [expanded, setExpanded] = useState(false); // Track the expanded accordion
  const { enqueueSnackbar } = useSnackbar();

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false); // Set the expanded accordion, or close all
  };

  const performAPICall = async () => {
    try {
      const response = await axios.get(`${config.endpoint}${data}`); // Fetch faqs
      setFaqs(response.data.data); // Store faq data
    } catch (err) {
      enqueueSnackbar(
        err.response ? err.response.data.message : "Failed to fetch FAQs.",
        { variant: "error" }
      );
    }
  };

  useEffect(() => {
    performAPICall();
  }, []); // Empty array so it runs only once when the component mounts

  return (
    <>
    <div className={styles.faq}>
      <h1>FAQs</h1>
      {faqs.map((faq, index) => (
        <div key={index} className={styles.faqItem}>
          <Accordion
            className={styles.Accordion}
            expanded={expanded === `panel${index}`} // Open this accordion if it's expanded
            onChange={handleChange(`panel${index}`)} // Handle the accordion expand/collapse
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
              className={styles.AccordionSummary}
            >
              {faq.question}
            </AccordionSummary>
            <AccordionDetails className={styles.AccordionDetails}>
              {faq.answer}
            </AccordionDetails>
          </Accordion>
        </div>
      ))}
    </div>
    <hr color="grey" />
    </>
  );
}
