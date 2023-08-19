import styles from "./button.module.css";

export default function Button(props) {
  const { value } = props;
  return <div className={styles.button}>{value}</div>;
}
