import { ContactForm } from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import css from './App.module.css';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

// const ContactForm = lazy(() => import('components/ContactForm/ContactForm'));

export const App = () => {
  return (
    <div className={css.box}>
      <Suspense fallback="Loading...">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1 className={css.title}>Phonebook</h1>
                <ContactForm />
                <h2 className={css.title}>Contacts</h2>
                <Filter />
                <ContactList />
              </>
            }
          />
        </Routes>
      </Suspense>
    </div>
  );
};
