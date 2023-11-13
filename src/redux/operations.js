import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  requestAddContacts,
  requestContacts,
  requestDeleteContacts,
} from 'services/api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkApi) => {
    try {
      const contacts = await requestContacts();

      return contacts;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkApi) => {
    try {
      const contact = await requestAddContacts(newContact);

      return contact;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkApi) => {
    try {
      const deletedContact = await requestDeleteContacts(id);

      return deletedContact;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
