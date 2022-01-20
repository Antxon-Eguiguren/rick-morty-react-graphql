import { useContext } from 'react';
import { FilterArgsContext } from '../../context/FilterArgsContext';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import './Pagination.component.css';

export const Pagination = () => {
  const { paginationInfo, updatePage, page } = useContext(FilterArgsContext);
  const isPrev = paginationInfo.prev;
  const isNext = paginationInfo.next;

  return (
    <>
      <div className="buttons-container">
        <button
          className={`arrows ${!isPrev ? 'disabled' : ''}`}
          onClick={() => updatePage(page! - 1)}
          disabled={!isPrev}
        >
          <IoIosArrowBack />
        </button>
        <span className="pages-info">
          {page} of {paginationInfo.pages}
        </span>
        <button
          className={`arrows ${!isNext ? 'disabled' : ''}`}
          onClick={() => updatePage(page! + 1)}
          disabled={!isNext}
        >
          <IoIosArrowForward />
        </button>
      </div>
      <h6 className="total-characters">Total characters: {paginationInfo.count}</h6>
    </>
  );
};
