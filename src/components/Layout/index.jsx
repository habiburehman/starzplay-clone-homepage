import styles from "./layout.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./custom.css";

export default function Layout(props) {
  const { heading, titles } = props;
  const settings = {
    slidesToShow: 19,
    swipeToSlide: true,
    infinite: false,
    autoplay: false,
    arrows: false,
    dots: false,
    centerMode: false,
    adaptiveHeight: true,
  };
  return (
    <div className={styles.container}>
      <div className={styles.heading}>{heading}</div>
      <div className={styles.content}>
        <Slider {...settings}>
          {titles.map((title) => (
            <img
              key={title.title}
              src={title.thumbnails["thumb-677x474"].url}
              alt={title.thumbnails["thumb-677x474"].title}
              loading="lazy"
            ></img>
          ))}
        </Slider>
      </div>
    </div>
  );
}
