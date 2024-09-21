import React, { useState } from "react";
import Button from "../Button/Button";
import Modal from "@mui/material/Modal";
import styles from "./Modal.module.css";
import FeedbackForm from "../FeedbackForm/FeedbackForm";

export default function BasicModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Give Feedback</Button>
      <Modal open={open} onClose={handleClose} className={styles.modal}>
        <FeedbackForm onClose={handleClose} />
      </Modal>
    </div>
  );
}
