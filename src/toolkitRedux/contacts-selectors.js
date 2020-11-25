import { createSelector } from "reselect";

const con = (state) => state.toolkit.contacts.items;
const filter = (state) => state.toolkit.contacts.filter;

export const contactsSelector = createSelector(con, (getList) => getList);
export const filterSelector = createSelector(filter, (filter) => filter);
