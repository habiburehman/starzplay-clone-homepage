import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./footer.module.css";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  const quickLinks = [
    "Why Starzplay?",
    "Help Center",
    "Contact us",
    "Partner with us",
    "Company",
    "Terms & Conditions",
    "Privacy Policy",
    "Blog",
    "Careers",
  ];
  return (
    <div className={styles.container}>
      <div className={styles.quickLinkGroup}>
        {quickLinks.map((quickLink, index) => (
          <div key={quickLink}>
            <div className={styles.quickLinks}>{quickLink}</div>
            {index < quickLinks.length - 1 ? (
              <div className={styles.partition}></div>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
      <div className={styles.copyRight}>
        <span>
          Copyright <FontAwesomeIcon icon={faCopyright} /> 2021 STARZPLAY All
          rights reserved
        </span>
      </div>
    </div>
  );
}
