import styles from "./header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faSearch } from "@fortawesome/free-solid-svg-icons";

const style = {
  active: {
    borderBottom: "2px solid coral",
  },
};

export default function Header() {
  const menuItems = ["Movies", "TV Shows", "Arabic", "Kids", "Channels"];
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <div className={styles.logo}>StarzPlay</div>
        {menuItems.map((menuItem) => (
          <div
            className={styles.menuItem}
            style={menuItem === "Movies" ? style.active : {}}
          >
            {menuItem}
          </div>
        ))}
      </div>
      <div className={styles.rightSide}>
        <FontAwesomeIcon icon={faSearch} />
        <FontAwesomeIcon icon={faGear} />
      </div>
    </div>
  );
}
