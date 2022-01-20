import { Key, ReactChild, ReactFragment, ReactPortal } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './HorizontalSlider.component.css';

export const HorizontalSlider = ({ episodes }: any) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 250,
    slidesToShow: 4.2,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
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
    <div className="episode-container">
      <Slider {...settings}>
        {episodes.map(
          (episode: {
            id: Key | null | undefined;
            name: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined;
            air_date: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined;
          }) => (
            <div key={episode.id} className="episode">
              <h3 className="episode-title">{episode.name}</h3>
              <p className="episode-date">{episode.air_date}</p>
            </div>
          )
        )}
      </Slider>
    </div>
  );
};
