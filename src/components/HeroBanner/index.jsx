import styles from "./heroBanner.module.css";
import data from "../../data/homepage.json";

export default function HeroBanner() {
  const heroTitles = data.titles.filter((title) => title.moduleType === "HERO");
  return (
    <div className={styles.container}>
      {heroTitles.flatMap((heroTitle) =>
        heroTitle.layoutTitles.titles.map((title) => (
          <img
            src={title.thumbnails["thumb-613x1536"].url}
            alt={title.thumbnails["thumb-613x1536"].title}
          ></img>
        ))
      )}
    </div>
  );
}
