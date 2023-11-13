import axios from 'axios';

const contactsInstance = axios.create({
  baseURL: 'https://653e93639e8bd3be29df8327.mockapi.io/contacts',
});

export const requestContacts = async () => {
  const { data } = await contactsInstance.get('/contacts');
  return data;
};

export const requestAddContacts = async contactsData => {
  const { data } = await contactsInstance.post('/contacts', contactsData);

  return data;
};

export const requestDeleteContacts = async id => {
  const { data } = await contactsInstance.delete(`/contacts/${id}`);

  return data;
};
