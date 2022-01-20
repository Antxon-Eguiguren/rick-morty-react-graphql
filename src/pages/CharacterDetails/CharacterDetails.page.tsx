import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useCharacter } from '../../hooks/useCharacter';
import { useMediaQueries } from '../../hooks/useMediaQueries';
import { HorizontalSlider } from '../../components/HorizontalSlider/HorizontalSlider.component';
import { Loading } from '../../components/Loading/Loading.component';
import { Blob } from '../../components/Blob/Blob.component';
import { IoIosArrowRoundBack } from 'react-icons/io';
import './CharacterDetails.page.css';

const CharacterDetails = () => {
  const [randomColor, setRandomColor] = useState<string>('#FFF38C');
  const { characterId } = useParams();
  const { data, error, loading } = useCharacter(+characterId!);
  const { isLaptopScreen } = useMediaQueries();
  const navigate = useNavigate();

  useEffect(() => {
    if (isNaN(+characterId!) || !characterId) {
      navigate('/characters');
    }
    setRandomColor('#' + Math.floor(Math.random() * 16777215).toString(16));
  }, []);

  return (
    <>
      <nav className="nav">
        <Link to="/characters">
          <IoIosArrowRoundBack className="arrow-back" />
        </Link>
        {data && isLaptopScreen && <h2 className="name-header">{data.character.name}</h2>}
      </nav>
      {(loading || error) && (
        <div className="loading-error-container">
          {loading && <Loading />}
          {error && <p>Error getting data from the server...</p>}
        </div>
      )}
      {data && (
        <>
          <div className="container">
            {!isLaptopScreen && <h2 className="name">{data.character.name}</h2>}
            <img src={data.character.image} className="img" />
            <div className="blob-container">
              <Blob fill={randomColor} width="205%" />
              <div className="blob-texts">
                <p className="label-container">
                  <span className="label">Name: </span>
                  {data.character.name}
                </p>
                <p className="label-container">
                  <span className="label">ID: </span> {data.character.id}
                </p>
                <p className="label-container">
                  <span className="label">Specie: </span> {data.character.species}
                </p>
                <p className="label-container">
                  <span className="label">Status: </span> {data.character.status}
                </p>
                <p className="label-container">
                  <span className="label">Gender: </span> {data.character.gender}
                </p>
                <p className="label-container">
                  <span className="label">Location: </span> {data.character.location?.name}
                </p>
              </div>
            </div>
          </div>
          {data.character.episode.length > 0 && (
            <>
              <h4
                className={
                  data.character.episode.length < 3 ? 'episodes-title-centered' : 'episodes-title'
                }
              >
                Episodes: {data.character.episode.length}
              </h4>
              <HorizontalSlider episodes={data.character.episode} />
            </>
          )}
        </>
      )}
    </>
  );
};

export default CharacterDetails;
