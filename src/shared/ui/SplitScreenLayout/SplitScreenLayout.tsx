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
    <div
      data-testid="media"
      className={styles.media}
      style={{
        backgroundColor: mediaBgColor,
        backgroundImage: mediaImage ? `url(${mediaImage})` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className={styles.mediaOverlay}>
        <span className={styles.mediaText}>{mediaText}</span>
      </div>
    </div>
  );

  const Media = renderMedia();
  const Main = (
    <div data-testid="main" className={styles.main}>
      {mainContent}
    </div>
  );

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
