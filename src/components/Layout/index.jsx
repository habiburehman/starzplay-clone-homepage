import styles from "./layout.module.css";

export default function Layout(props) {
  const { heading, titles } = props;
  return (
    <div className={styles.container}>
      <div className={styles.heading}>{heading}</div>
      <div className={styles.content}>
        {titles.map((title) => (
          <img
            src={title.thumbnails["thumb-677x474"].url}
            alt={title.thumbnails["thumb-677x474"].title}
          ></img>
        ))}
      </div>
    </div>
  );
}
