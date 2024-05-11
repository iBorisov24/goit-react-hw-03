import Contact from '../Contact/Contact';
export default function ContactList({ data, onDelete }) {
	return (
		<ul>
			{data.map(friend => (
				<li key={friend.id}>
					<Contact
						onDelete={onDelete}
						name={friend.name}
						number={friend.number}
						id={friend.id}
					/>
				</li>
			))}
		</ul>
	);
}
