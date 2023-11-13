import { useDispatch, useSelector } from 'react-redux';
import css from './Filter.module.css';
import { selectItemsFilter } from 'redux/selectors';
import { filterContact } from 'redux/contactsSlice';

const Filter = () => {
  const filter = useSelector(selectItemsFilter);

  const dispatch = useDispatch();

  const handleFilterChange = ({ target: { value } }) => {
    dispatch(filterContact(value));
  };

  return (
    <input
      className={css.inputFilter}
      type="text"
      name="filter"
      placeholder="Search contacts"
      value={filter}
      onChange={handleFilterChange}
    />
  );
};
export default Filter;
