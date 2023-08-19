import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import Layout from "./components/Layout";
import styles from "./App.module.css";
import Button from "./elements/Button";

function App() {
  const layoutElements = [
    "Popular Movies",
    "Action Movies",
    "Comedy Movies",
    "Horror Movies",
  ];
  return (
    <div>
      <Header />
      <HeroBanner />
      <div className={styles.layoutGroup}>
        {layoutElements.map((element) => (
          <Layout heading={element} key={element} />
        ))}
      </div>
      <div className={styles.callToAction}>
        <Button value="Explore Movies" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
