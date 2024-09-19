import Chip from "@mui/material/Chip";

import styles from "./Card.module.css";

export default function Card({ title, follows, image }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <img src={image} alt={title} className={styles.cardImage} />
        <div className={styles.chip}>
          <Chip
            sx={{
              backgroundColor: "var(--color-black)",
              color: "var(--color-text)",
              borderRadius: "15px",
            }}
            label={`${follows} Follows`}
            size="small"
          />
        </div>
      </div>
      <p className={styles.title}>{title}</p>
    </div>
  );
}
