import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import jsonData from '../ContactList/ContactList.json';
import { useEffect, useState } from 'react';

export default function App() {
	const [contacts, setContact] = useState(() =>
		localStorage.getItem('contacts-history') !== null
			? JSON.parse(localStorage.getItem('contacts-history'))
			: jsonData
	);
	const [filter, setFilter] = useState('');

	useEffect(
		() => localStorage.setItem('contacts-history', JSON.stringify(contacts)),
		[contacts]
	);

	const visibleContact = contacts.filter(user =>
		user.name.toLowerCase().includes(filter.toLowerCase())
	);

	const onAdd = newContact =>
		setContact(prevContact => [...prevContact, newContact]);

	const onDelete = contactId =>
		setContact(prevContacts => {
			return prevContacts.filter(contact => contact.id !== contactId);
		});
	return (
		<>
			<h1>Phonebook</h1>
			<ContactForm onAdd={onAdd} />
			<SearchBox value={filter} onFilter={setFilter} />

			<ContactList data={visibleContact} onDelete={onDelete} />
		</>
	);
}
