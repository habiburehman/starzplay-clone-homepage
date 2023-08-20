import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import styles from "./App.module.css";
import Button from "./elements/Button";
import data from "./data/homepage.json";

const Layout = React.lazy(() => import("./components/Layout"));

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
          <React.Suspense
            fallback={
              <div className={styles.fallBack}>
                Loading {layout.title} section
              </div>
            }
          >
            <Layout
              heading={layout.title}
              key={layout.title}
              titles={layout.layoutTitles.titles}
            />
          </React.Suspense>
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
