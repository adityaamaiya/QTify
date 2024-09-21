import Chip from "@mui/material/Chip";

import styles from "./Card.module.css";

export default function Card({ cardData, type, loading }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <img
          src={cardData.image}
          alt={cardData.title}
          className={styles.cardImage}
          loading={loading}
        />
        <div className={styles.chip}>
          <Chip
            sx={{
              backgroundColor: "var(--color-black)",
              color: "var(--color-text)",
              borderRadius: "15px",
            }}
            label={
              type === "album"
                ? `${cardData.follows} Follows`
                : `${cardData.likes} Likes`
            }
            size="small"
          />
        </div>
      </div>
      <p className={styles.title}>{cardData.title}</p>
    </div>
  );
}
