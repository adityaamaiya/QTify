import React from "react";
import ReactPlayer from "react-player/lazy";
import styles from "./Player.module.css";

export default function Player({ data }) {
  //   const [player, setPlayer] = useState(null);
  //   const { enqueueSnackbar } = useSnackbar();

  return (
    <div className={styles.player}>
      <div className={styles.playerContainer}>
        <div className={styles.playerWrapper}>
          {/* <ReactPlayer
            url="https://www.youtube.com/watch?v=Co8kUe4JDtg"
            controls
            width="100%"
            height="100%"
            className={styles.reactPlayer}
          /> */}

          <audio controls autoPlay loop>
            <source src="../../assets/song.mp3" type="audio/mpeg" />
          </audio>
        </div>
      </div>
    </div>
  );
}
