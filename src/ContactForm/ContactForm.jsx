import { Field, Formik, Form } from 'formik';
import { nanoid } from 'nanoid';
import { yupToFormErrors } from 'formik';

export default function ContactForm({ onAdd }) {
	return (
		<Formik
			initialValues={{ name: '', number: '' }}
			onSubmit={values =>
				onAdd({
					name: values.name,
					number: values.number,
					key: nanoid(),
				})
			}
		>
			<Form>
				<Field type="text" name="name" />
				<Field type="number" name="number" />
				<button name="submitBtn" type="submit">
					AddContact
				</button>
			</Form>
		</Formik>
	);
}
