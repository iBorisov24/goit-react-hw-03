import { Field, Formik, Form } from 'formik';
import { nanoid } from 'nanoid';
import { ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './ContactForm.module.css';
export default function ContactForm({ onAdd }) {
	const formSchema = Yup.object().shape({
		name: Yup.string()
			.min(3, 'Too short name')
			.max(50, 'Too long name')
			.required(),
		number: Yup.string('Please, enter number format')
			.min(3, 'Too short number')
			.max(12, 'Too long number')
			.required(),
	});
	return (
		<Formik
			initialValues={{ name: '', number: '' }}
			onSubmit={values =>
				onAdd({
					name: values.name,
					number: values.number,
					id: nanoid(),
				})
			}
			validationSchema={formSchema}
		>
			<Form className={css.form}>
				<Field className={css.input} type="text" name="name" />
				<ErrorMessage name="name" component="span" />
				<Field className={css.input} type="number" name="number" />
				<ErrorMessage name="number" component="span" />
				<button className={css.btn} name="submitBtn" type="submit">
					AddContact
				</button>
			</Form>
		</Formik>
	);
}
