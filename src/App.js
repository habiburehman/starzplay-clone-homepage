import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import styles from "./App.module.css";
import Button from "./elements/Button";
import data from "./data/homepage.json";
import ErrorBoundary from "./components/ErrorBoundary";

const Layout = React.lazy(() => import("./components/Layout"));

function App() {
  const layoutElements = data.titles.filter(
    (title) => title.moduleType === "LAYOUT"
  );

  return (
    <div>
      <ErrorBoundary>
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
              key={layout.title}
            >
              <Layout
                heading={layout.title}
                titles={layout.layoutTitles.titles}
              />
            </React.Suspense>
          ))}
        </div>
        <div className={styles.callToAction}>
          <Button value="Explore Movies" />
        </div>
        <Footer />
      </ErrorBoundary>
    </div>
  );
}

export default App;
