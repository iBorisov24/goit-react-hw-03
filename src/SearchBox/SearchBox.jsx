import { Field, Formik } from 'formik';
export default function SearchBox({ onFilter, value }) {
	return (
		<input
			type="text"
			name="filter"
			onChange={e => onFilter(e.target.value)}
			value={value}
		/>
	);
}
