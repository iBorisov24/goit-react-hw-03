import css from './Contact.module.css';
export default function Contact({ id, name, number, onDelete }) {
	return (
		<div className={css.card}>
			<p>{name}</p>
			<p>{number}</p>
			<button onClick={() => onDelete(id)} type="button">
				Delete
			</button>
		</div>
	);
}
