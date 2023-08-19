import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import Layout from "./components/Layout";
import styles from "./App.module.css";
import Button from "./elements/Button";
import data from "./data/homepage.json";

function App() {
  const layoutElements = data.titles.filter(
    (title) => title.moduleType === "LAYOUT"
  );

  return (
    <div>
      <Header />
      <HeroBanner />
      <div className={styles.layoutGroup}>
        {layoutElements.map((layout) => (
          <Layout
            heading={layout.title}
            key={layout.title}
            titles={layout.layoutTitles.titles}
          />
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
