import css from './SearchBox.module.css';
export default function SearchBox({ onFilter, value }) {
	return (
		<input
			className={css.input}
			type="text"
			name="filter"
			onChange={e => onFilter(e.target.value)}
			value={value}
			placeholder="Type to find"
		/>
	);
}
