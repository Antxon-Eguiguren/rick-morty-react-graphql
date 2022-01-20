import { Filter } from '../Filter/Filter.component';
import './FilterModal.component.css';

interface Props {
  setModalIsOpen: any;
  setFormFilters?: any;
  formFilters?: any;
  isFiltered?: boolean;
  setIsFiltered?: any;
}

export const FilterModal = ({
  setModalIsOpen,
  setFormFilters,
  formFilters,
  isFiltered,
  setIsFiltered,
}: Props) => {
  return (
    <div className="darkBG">
      <div className="centered">
        <div className="modal">
          <Filter
            isMobile={true}
            setModalIsOpen={setModalIsOpen}
            setFormFilters={setFormFilters}
            formFilters={formFilters}
            isFiltered={isFiltered}
            setIsFiltered={setIsFiltered}
          />
          <button className="btn-close" onClick={() => setModalIsOpen(false)}>
            <p className="btn-close-text">X</p>
          </button>
        </div>
      </div>
    </div>
  );
};
