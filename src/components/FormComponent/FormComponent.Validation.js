import * as Yup from 'yup';

const formComponentValidation = Yup.object().shape({
	title: Yup.string()
		.min(5, 'The title field is too short.')
		.required('The title field is required.'),
	body: Yup.string()
		.min(10, 'The body of the publication is too short.')
		.required('The body of the publication is required.'),
});

export default formComponentValidation;