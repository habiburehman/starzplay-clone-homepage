import styles from "./footer.module.css";

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
          <>
            <div className={styles.quickLinks} key={quickLink}>
              {quickLink}
            </div>
            {index < quickLinks.length - 1 ? (
              <div className={styles.partition}></div>
            ) : (
              ""
            )}
          </>
        ))}
      </div>
      <div className={styles.copyRight}>
        Copyright 2021 STARZPLAY All rights reserved
      </div>
    </div>
  );
}
