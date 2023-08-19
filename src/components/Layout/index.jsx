import styles from "./layout.module.css";

export default function Layout(props) {
  const { heading } = props;
  return (
    <div className={styles.container}>
      <div className={styles.heading}>{heading}</div>
      <div className={styles.content}></div>
    </div>
  );
}
