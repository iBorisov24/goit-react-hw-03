import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
export default function ContactList({ data, onDelete }) {
	return (
		<ul className={css.cardList}>
			{data.map(friend => (
				<li key={friend.id}>
					<Contact
						onDelete={onDelete}
						name={friend.name}
						number={friend.number}
						id={friend.id}
						key={friend.id}
					/>
				</li>
			))}
		</ul>
	);
}
