import styles from "./heroBanner.module.css";
import data from "../../data/homepage.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HeroBanner() {
  const heroTitles = data.titles.filter((title) => title.moduleType === "HERO");

  const settings = {
    slidesToShow: 2.3,
    infinite: true,
    autoplay: true,
    speed: 800,
    arrows: false,
    dots: false,
    centerMode: true,
  };

  return (
    <div className={styles.container}>
      <Slider {...settings}>
        {heroTitles.flatMap((heroTitle) =>
          heroTitle.layoutTitles.titles.map((title) => (
            <img
              key={title.title}
              src={title.thumbnails["thumb-613x1536"].url}
              alt={title.thumbnails["thumb-613x1536"].title}
            ></img>
          ))
        )}
      </Slider>
    </div>
  );
}
