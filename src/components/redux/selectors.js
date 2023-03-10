export const getContacts = ({ contacts }) => contacts.items;
export const getFilter = ({ filter }) => filter;
export const getFilteredContacts = ({ contacts, filter }) => {
    // console.log(contacts.items);
    const normalizeFilter = filter.toLowerCase().trim();
    const visiblePersons = contacts.items.filter(cont => cont.name.toLowerCase().includes(normalizeFilter));
    return visiblePersons;
};

export const isUserLogin = store => store.auth.isLogin;
export const getAuthError = store => store.auth.error || {};
export const getUser = store => store.auth.user;