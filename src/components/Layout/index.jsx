import styles from "./layout.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./custom.css";

export default function Layout(props) {
  const { heading, titles } = props;
  const settings = {
    slidesToShow: 19,
    slidesToScroll: 5,
    swipeToSlide: true,
    infinite: titles.length > 19,
    autoplay: false,
    arrows: false,
    dots: false,
    centerMode: true,
    adaptiveHeight: true,
  };
  return (
    <div className={styles.container}>
      <div className={styles.heading}>{heading}</div>
      <div className={styles.content}>
        <Slider {...settings}>
          {titles.map((title) => (
            <img
              src={title.thumbnails["thumb-677x474"].url}
              alt={title.thumbnails["thumb-677x474"].title}
            ></img>
          ))}
        </Slider>
      </div>
    </div>
  );
}
