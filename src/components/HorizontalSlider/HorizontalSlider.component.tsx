import { Episode } from '../../interfaces/Character.interface';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './HorizontalSlider.component.css';

interface Props {
  episodes: Episode[];
  isMobileScreen: boolean;
}

export const HorizontalSlider = ({ episodes, isMobileScreen }: Props) => {
  const settings = {
    dots: !isMobileScreen,
    infinite: false,
    speed: 250,
    slidesToShow: 6.2,
    slidesToScroll: 6,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1439,
        settings: {
          slidesToShow: 4.2,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3.2,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2.2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 479,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={isMobileScreen ? 'episode-container-mobile' : 'episode-container-desktop'}>
      <Slider {...settings}>
        {episodes.map((episode) => (
          <div key={episode.id} className="episode">
            <h3 className="episode-title">{episode.name}</h3>
            <p className="episode-date">{episode.air_date}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};
