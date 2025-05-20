import React from "react";
import styles from "./SplitScreenLayout.module.css";

interface SplitScreenLayoutProps {
  mediaText: string;
  mediaImage?: string;
  mediaBgColor?: string;
  mediaPosition?: "left" | "right";
  mainContent: React.ReactNode;
}

export const SplitScreenLayout: React.FC<SplitScreenLayoutProps> = ({
  mediaText,
  mediaImage,
  mediaBgColor = "#1677ff",
  mediaPosition = "left",
  mainContent,
}) => {
  const renderMedia = () => (
    <div className={styles.media} style={{ backgroundColor: mediaBgColor }}>
      {mediaImage && (
        <img src={mediaImage} alt="media" className={styles.mediaImage} />
      )}
      <div className={styles.mediaOverlay}>
        <span className={styles.mediaText}>{mediaText}</span>
      </div>
    </div>
  );

  const Media = renderMedia();
  const Main = <div className={styles.main}>{mainContent}</div>;

  return (
    <div className={styles.wrapper}>
      {mediaPosition === "left" ? (
        <>
          {Media}
          {Main}
        </>
      ) : (
        <>
          {Main}
          {Media}
        </>
      )}
    </div>
  );
};
