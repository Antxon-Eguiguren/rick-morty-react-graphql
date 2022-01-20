import { useContext, useState } from 'react';
import { FilterArgsContext } from '../../context/FilterArgsContext';
import { useMediaQueries } from '../../hooks/useMediaQueries';
import { CustomButton } from '../CustomButton/CustomButton.component';
import { Filter } from '../Filter/Filter.component';
import { FilterModal } from '../FilterModal/FilterModal.component';
import './NavBar.component.css';

export const formInitialState: any = {
  name: '',
  status: {
    value: '',
    label: 'Select...',
  },
  gender: {
    value: '',
    label: 'Select...',
  },
};

export const NavBar = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [formFilters, setFormFilters] = useState<any>(formInitialState);
  const [isFiltered, setIsFiltered] = useState<boolean>(false);
  const { isMobileScreen } = useMediaQueries();
  const { resetFilters } = useContext(FilterArgsContext);
  const logo = require('../../assets/img/logo.png');

  const goToHomePage = () => {
    resetFilters();
    setFormFilters(formInitialState);
    setIsFiltered(false);
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" width={80} height={80} onClick={goToHomePage} />
      </div>
      <div className="search-container">
        {!isMobileScreen && (
          <Filter
            isMobile={false}
            setModalIsOpen={setModalIsOpen}
            setFormFilters={setFormFilters}
            formFilters={formFilters}
            isFiltered={isFiltered}
            setIsFiltered={setIsFiltered}
          />
        )}
        {isMobileScreen && !isFiltered && (
          <CustomButton setModalIsOpen={setModalIsOpen} isFiltered={isFiltered} />
        )}
        {isMobileScreen && isFiltered && (
          <CustomButton
            isFiltered={isFiltered}
            setIsFiltered={setIsFiltered}
            setFormFilters={setFormFilters}
          />
        )}
      </div>

      {/* MODAL */}
      {modalIsOpen && (
        <FilterModal
          setModalIsOpen={setModalIsOpen}
          setFormFilters={setFormFilters}
          formFilters={formFilters}
          isFiltered={isFiltered}
          setIsFiltered={setIsFiltered}
        />
      )}
    </nav>
  );
};
