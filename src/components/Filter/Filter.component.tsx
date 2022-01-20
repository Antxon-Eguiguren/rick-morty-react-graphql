import { useContext } from 'react';
import { FilterArgsContext } from '../../context/FilterArgsContext';
import { FilterButton } from '../FilterButton/FilterButton.component';
import Select from 'react-select';
import './Filter.component.css';

interface Props {
  isMobile: boolean;
  setModalIsOpen?: any;
  formFilters?: any;
  setFormFilters?: any;
  isFiltered?: boolean;
  setIsFiltered?: any;
}

export const Filter = ({
  isMobile,
  setModalIsOpen,
  formFilters,
  setFormFilters,
  isFiltered,
  setIsFiltered,
}: Props) => {
  const { filter } = useContext(FilterArgsContext);

  const statuses = [
    { value: 'Dead', label: 'Dead' },
    { value: 'Alive', label: 'Alive' },
    { value: 'unknown', label: 'Unknown' },
  ];

  const genders = [
    { value: 'Female', label: 'Female' },
    { value: 'Male', label: 'Male' },
    { value: 'Genderless', label: 'Genderless' },
    { value: 'unknown', label: 'Unknown' },
  ];

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (
      formFilters.name !== '' ||
      formFilters.status.value !== '' ||
      formFilters.gender.value !== ''
    ) {
      const filters = {
        name: formFilters.name,
        status: formFilters.status.value,
        gender: formFilters.gender.value,
      };
      filter(filters);
      setIsFiltered(true);
      setModalIsOpen(false);
    }
  };

  return (
    <form
      className={isMobile ? 'filter-form-mobile' : 'filter-form-desktop'}
      onSubmit={handleSubmit}
    >
      <label className={isMobile ? 'mobile-label-container' : ''}>
        <span>Name</span>
        <input
          className="input-name"
          value={formFilters.name}
          type="text"
          placeholder="Search by name..."
          onChange={(e) => setFormFilters({ ...formFilters, name: e.target.value })}
        />
      </label>
      <label className={isMobile ? 'mobile-label-container' : ''}>
        <span>Status</span>
        <Select
          className="select"
          value={formFilters.status}
          options={statuses}
          onChange={(option) =>
            setFormFilters({
              ...formFilters,
              status: {
                value: option!.value,
                label: option!.label,
              },
            })
          }
        />
      </label>
      <label className={isMobile ? 'mobile-label-container' : ''}>
        <span>Gender</span>
        <Select
          className="select"
          value={formFilters.gender}
          options={genders}
          onChange={(option) =>
            setFormFilters({
              ...formFilters,
              gender: {
                value: option!.value,
                label: option!.label,
              },
            })
          }
        />
      </label>
      <FilterButton
        isMobile={isMobile}
        isFiltered={isFiltered}
        setIsFiltered={setIsFiltered}
        setFormFilters={setFormFilters}
      />
    </form>
  );
};
