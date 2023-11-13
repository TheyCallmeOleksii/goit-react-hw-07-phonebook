import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as IconDelete } from '../../assets/delete.svg';
import css from './ContactList.module.css';
import { deleteContact, fetchContacts } from 'redux/operations';
import {
  selectItems,
  selectItemsError,
  selectItemsFilter,
  selectItemsIsloading,
} from 'redux/selectors';
import { useEffect } from 'react';

const ContactList = () => {
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  const filter = useSelector(selectItemsFilter) || '';
  const items = useSelector(selectItems) || [];

  const isLoading = useSelector(selectItemsIsloading);
  const error = useSelector(selectItemsError);

  const filteredContacts =
    items !== null &&
    items.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase().trim())
    );

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && (
        <div>
          <p>Loading...</p>
        </div>
      )}
      {error && (
        <div>
          <p>{error}</p>
        </div>
      )}
      <ul className={css.boxList}>
        {filteredContacts &&
          filteredContacts.map(({ id, name, number }) => (
            <li key={id} className={css.itemList}>
              <span className={css.nameItem}>{name}: </span>
              <span>{number}</span>
              <button
                type="button"
                onClick={() => handleDelete(id)}
                className={css.btnDelete}
              >
                <IconDelete className={css.iconDelete} />
              </button>
            </li>
          ))}
      </ul>
    </>
  );
};

export default ContactList;
