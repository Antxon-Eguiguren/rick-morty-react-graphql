import { useContext } from 'react';
import { FilterArgsContext } from '../../context/FilterArgsContext';
import { formInitialState } from '../NavBar/NavBar.component';
import { ImCross, ImFilter } from 'react-icons/im';

interface Props {
  isFiltered: boolean;
  setModalIsOpen?: any;
  setIsFiltered?: any;
  setFormFilters?: any;
}

export const CustomButton = ({
  isFiltered,
  setModalIsOpen,
  setIsFiltered,
  setFormFilters,
}: Props) => {
  const { resetFilters } = useContext(FilterArgsContext);

  const clearFilters = () => {
    resetFilters();
    setIsFiltered(false);
    setFormFilters(formInitialState);
  };

  return (
    <div>
      {!isFiltered && (
        <button className="btn" onClick={() => setModalIsOpen(true)}>
          <ImFilter className="icon" />
        </button>
      )}
      {isFiltered && (
        <button className="btn" onClick={clearFilters}>
          <ImCross className="delete-icon" />
        </button>
      )}
    </div>
  );
};
