import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FilterArgsContext } from '../../context/FilterArgsContext';
import { NavBar } from '../../components/NavBar/NavBar.component';
import { Loading } from '../../components/Loading/Loading.component';
import { Pagination } from '../../components/Pagination/Pagination.component';
import { useMediaQueries } from '../../hooks/useMediaQueries';
import { useCharacters } from '../../hooks/useCharacters';
import { Character } from '../../interfaces/Character.interface';
import { APIArgs } from '../../interfaces/FilterCharacter.interface';
import './CharactersList.page.css';

const CharactersList = () => {
  const [args, setArgs] = useState<APIArgs>({
    page: 1,
    filters: { name: '', status: '', gender: '' },
  });
  const { isMobileScreen } = useMediaQueries();
  const { error, loading, data } = useCharacters(args);
  const { filters, page, updatePaginationInfo } = useContext(FilterArgsContext);

  useEffect(() => {
    if (data?.characters.info !== undefined) {
      updatePaginationInfo(data.characters.info);
    }
    setArgs({ ...args, filters, page });
  }, [filters, page, data]);

  return (
    <>
      {(loading || error) && (
        <div className="loading-error-container">
          {loading && <Loading />}
          {error && data && <p>Error getting data from the server...</p>}
          {error && !data && <p>No results found... Clear the filters!</p>}
        </div>
      )}
      {data && (
        <>
          <NavBar />
          <div className="characters-list">
            {data.characters.results.map((character: Character) => (
              <Link
                to={`/characters/${character.id}`}
                key={character.id}
                className="character-image-container"
              >
                {isMobileScreen && (
                  <img
                    src={character.image}
                    alt="Character"
                    className="character-image"
                    width={110}
                    height={110}
                  />
                )}
                {!isMobileScreen && (
                  <img
                    src={character.image}
                    alt="Character"
                    className="character-image"
                    width={180}
                    height={180}
                  />
                )}
                {isMobileScreen && (
                  <h3 className="character-name character-name-mobile">{character.name}</h3>
                )}
                {!isMobileScreen && (
                  <h3 className="character-name character-name-desktop">{character.name}</h3>
                )}
              </Link>
            ))}
          </div>
          <Pagination />
        </>
      )}
    </>
  );
};

export default CharactersList;
